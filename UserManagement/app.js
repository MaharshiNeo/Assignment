const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const config = require('./js/config');

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let app = express();

app.set('view engine', 'ejs');

app.use(session({secret: 'session'}));

app.use(express.static('js'));

app.get('/', (req, res) => {  
  res.render('login');
});

app.post('/checkUser', urlencodedParser, (req, res) => {  
  let email = req.body.email;
  let password = req.body.password;  

  const con = mysql.createConnection(config);

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let getUserSql = `SELECT * FROM credential WHERE emailId = '${email}' AND password = '${password}'`;
    con.query(getUserSql, (err, data, fields) => {      
      if(err){
        console.log(err);
      }
      if(data.length == 0){
        res.redirect('/errorLoginPage');
      }
      else{
        req.session.userId = data[0].id;
        req.session.type = data[0].type;        
        if(data[0].type == 'admin'){
          res.redirect('/adminPage');
        }
        else if(data[0].type == 'normal') {
          res.redirect('/normalUserPage');
        }
      }
    });
  });
});

app.get('/normalUserPage', (req, res) => {
  if((!req.session.userId) || req.session.type != 'normal'){
    res.redirect('/normalUserPageError');
  }
  else{
    const con = mysql.createConnection(config);

    con.connect((err) => {
      if(err){
        console.log(err);
      }
      else{
        let getUserSql = `SELECT * FROM user WHERE userId=${Number(req.session.userId)}`;        
        con.query(getUserSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
          else{            
            res.render('normalUserPage', {data});
          }
        });
      }
    });    
  }
});

app.get('/logout', (req, res) => {
  if(req.session.userId){
    delete req.session.userId;
    delete req.session.type;
    res.redirect('/logoutPage');
  }
  else{
    res.redirect('/adminPageError');
  }
});

app.get('/logoutPage', (req, res) => {  
  res.render('logoutPage');
});

app.get('/normalUserPageError', (req, res) => {
  res.render('normalUserPageError');
});

app.get('/adminPage', (req, res) => {
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  else{
    const con = mysql.createConnection(config);

    con.connect((err) => {
      if(err){
        console.log(err);
      }
      let identifyUserSql = `SELECT * FROM credential WHERE id = ${req.session.userId}`;      
      con.query(identifyUserSql, (err, data, fields) => {        
        let getUserData = 'select * from user as u join credential as c on c.id = u.userId';
        con.query(getUserData, (err, userData, fields) => {
          res.render('adminPage', {data, userData});
        });        
      });
    });
  }  
});

app.get('/deleteUser', (req, res) => {
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  else{
    let userId = req.query.userId;
    
    const con = mysql.createConnection(config);

    con.connect((err) => {
      if(err){
        console.log(err);
      }
      else{
        let deleteUserFromUserSql = `DELETE FROM user WHERE userId = ${Number(userId)}`;        
        con.query(deleteUserFromUserSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
          else{
            let deleteUserFromCredentialSql = `DELETE FROM credential WHERE id = ${Number(userId)}`
            con.query(deleteUserFromCredentialSql, (err, data, fields) => {
              if(err){
                console.log(err);
              }
              else{
                res.redirect('/userDeletedPage');
              }
            });
          }
        });
      }
    });

    // res.redirect('/adminPage');
  }
});

app.get('/editUser', (req, res) => {
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  else{

    const con = mysql.createConnection(config);
    con.connect((err) => {
      if(err){
        console.log(err);
      }
      else{        
        let getUserSql = `select u.email, u.firstName, u.lastName, u.address, u.phoneNo, c.password from user as u 
        join credential as c on u.userId = c.id where c.id = ${Number(req.query.userId)}`;
        con.query(getUserSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
          else{
            console.log(data);
            req.session.editEmail = data[0].email;
            console.log(req.session.editEmail);
            res.render('editUser', {data});
          }          
        });
      }
    });    
  }
});

app.post('/editUser', urlencodedParser, (req, res) => {
  
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  
  else{    
    
    let email = req.session.editEmail;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let address = req.body.address;
    let password = req.body.password;
    let phoneNo = req.body.phoneNo;

    const con = mysql.createConnection(config);

    con.connect((err) => {
      if(err){
        console.log(err);
      }
      else{
        let updateUserSql = `UPDATE user SET firstName="${firstName}", lastName="${lastName}", address="${address}", phoneNo=${Number(phoneNo)} WHERE email="${email}"`;
        console.log(updateUserSql);
        con.query(updateUserSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
          else{
            let updatePassword = `UPDATE credential SET password="${password}" WHERE emailId="${email}"`;
            con.query(updatePassword, (err, updatePasswordData, fields) => {
              if(err){
                console.log(err);
              }
              else{
                delete req.session.editEmail;                
                res.redirect('/userEdited');
              }
            });            
          }
        });
      }
    });
  }
});

app.get('/userEdited', (req, res) => {
  res.render('userEdited');
});

app.get('/addUser', (req, res) => {
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  else{
    res.render('addUser');
  }
});

app.post('/addUser', urlencodedParser, (req, res) => {
  if((!req.session.userId) || req.session.type != 'admin'){
    res.redirect('/adminPageError');
  }
  else{

    const con = mysql.createConnection(config);

    con.connect((err) => {
      if(err){
        console.log(err);
      }
      else{
        let checkUserSql = `SELECT emailId FROM credential WHERE emailId="${req.body.email}"`;        
        con.query(checkUserSql, (err, checkUserdata, fields) => {
          if(err){
            console.log(err);
          }
          else{
            console.log(checkUserdata);
            console.log((checkUserdata.length));
            if(checkUserdata.length == 1){
              res.redirect('/userExistPage');
            }
            else{
              let addUserToCredentialSql = `INSERT INTO credential (emailId, password, type) VALUES ('${req.body.email}', '${req.body.password}', 'normal')`;              
              con.query(addUserToCredentialSql, (err, data, fields) => {
                if(err){
                  console.log(err);
                }
                else{
                  let selectDataFromCredential = `select id from credential ORDER BY id DESC LIMIT 1`;
                  con.query(selectDataFromCredential, (err, userData, fields) => {
                    if(err){
                      console.log(err);
                    }
                    else{                      
                      let addUserToUserSql = `INSERT INTO user (userId, email, firstName, lastName, address, phoneNo) VALUES (${userData[0].id}, "${req.body.email}", "${req.body.firstName}", "${req.body.lastName}", "${req.body.address}", ${req.body.phoneNo})`;
                      con.query(addUserToUserSql, (err, result, fields) => {
                        if(err){
                          console.log(err);
                        }
                        else{
                          res.redirect('/userAddedPage');
                        }
                      });
                    }
                  });
                }
              });
            }
          }
        });
      }
    });    
  }  
});

app.get('/userExistPage', (req, res) => {
  res.render('userExistPage');
});

app.get('/userAddedPage', (req, res) => {
  res.render('userAddedPage');
});

app.get('/userDeletedPage', (req, res) => {
  res.render('userDeletedPage');
});

app.get('/adminPageError', (req, res) => {
  res.render('adminPageError');
});

app.get('/errorLoginPage', (req, res) => {
  res.render('errorLoginPage');
});

app.listen(3001);