const express = require('express');
const app = express();

const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/showProducts', (req, res) => {
  const mysql = require('mysql');
  let con =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let showProductSql = 'SELECT * FROM product';
    con.query(showProductSql, (err, data, fields) => {
      console.log(data);
      res.render('showProducts', {data});
    });
    con.end();
  });  
});

app.get('/editProduct', (req, res) => {
  const mysql = require('mysql');
  let con =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let getData = `SELECT * FROM product`;
    con.query(getData, (err, data, fields) => {
      // console.log(data);
      res.render('editProduct', {data});
    });
  });
});

app.post('/editProduct', urlencodedParser, (req, res) => {
  console.log(Boolean(req.body.product));
  const mysql = require('mysql');
  let con =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }    
    if(req.body.product){
      if(typeof(req.body.product) == 'string'){
        let text = 'quantity' + req.body.product;
        let updateProductSql = `UPDATE product SET quantity = ${Number(req.body[text])} WHERE id = ${Number(req.body.product)}`
        console.log(updateProductSql);
        con.query(updateProductSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
        });
      }
      else{
        for(ob of req.body.product){
          let text = 'quantity' + ob;
          let updateProductSql = `UPDATE product SET quantity = ${Number(req.body[text])} WHERE id = ${Number(ob)}`
          console.log(updateProductSql);
          con.query(updateProductSql, (err, data, fields) => {
            if(err){
              console.log(err);
            }
          });
        } 
      }
    }   
  });
  res.redirect('/showProducts');    
});

app.get('/deleteProductFromProduct', (req, res) => {
  let id = Number(req.query.id);
  console.log(id);
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let deleteProductFromProductSql = `DELETE FROM product WHERE id = ${id}`;
    let deleteProductFromCartSql = `DELETE FROM cart WHERE productId = ${id}`;
    console.log(deleteProductFromProductSql);
    con.query(deleteProductFromProductSql, (err, data, fields) => {
      if(err){
        console.log(err);
      } 
      con.query(deleteProductFromCartSql, (err, data, fields) => {
        if(err){
          console.log(err);
        }      
      });     
    });
    
  });
  res.redirect('/editProduct');
});

app.get('/addProduct', (req, res) => {
  res.render('addProduct');
});

app.post('/addProduct', urlencodedParser, (req, res) => {
  const mysql = require('mysql');
  let name = req.body.name;
  let quantity = Number(req.body.quantity);
  let price = Number(req.body.price);
  // console.log(name, quantity, price);
  let con =  mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });
  con.connect((err) =>{
    if(err){
      console.log(err);
    }
    else{
      let sql = `INSERT INTO product (name, quantity, price) VALUES ("${name}", ${quantity}, ${price})`
      con.query(sql, (err, result) => {
        if(err){
          console.log(err);
        }
      });
    }
    con.end();
  });  
  res.redirect('/');
});

app.get('/addToCart', (req, res) => {  
  let result;
  const mysql = require('mysql');
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });
  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let sql = 'select * from product where product.id not in  (SELECT productId from cart)';

    con.query(sql, (err, data, fields) => {
      console.log(data);
      res.render('addToCart', {data});         
    });
    con.end();
  });  
});

app.post('/addToCart', urlencodedParser, (req, res) => {  
  
  console.log(req.body);
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }    
    
    if(typeof req.body.product == "string"){
      let cartSql = `INSERT INTO cart (productId, quantity) VALUES (${Number(req.body.product)}, ${Number(req.body.quantity)})`;
      console.log(cartSql);
      con.query(cartSql, (err, result, fields) => {
        if(err){
          console.log(err);
        }
      });
    }
    else{
      for(let i = 0; i < req.body.product.length; i++){
        let cartSql = `INSERT INTO cart (productId, quantity) VALUES (${Number(req.body.product[i])}, ${Number(req.body.quantity[i])})`;
        console.log(cartSql);
        con.query(cartSql, (err, result, fields) => {
          if(err){
            console.log(err);
          }
        });      
      }
      let truncateCartStatusSql = `TRUNCATE TABLE cartStatus`;
      con.query(truncateCartStatusSql, (err, result, fields) => {
        if(err){
          console.log(err);
        }
      });
    }
    let cartStatusSql = `INSERT INTO cartStatus (status, total) VALUES (0, 0)`

    con.query(cartStatusSql, (err, result, fields) => {
      if(err){
        console.log(err);
      }
    });  
    con.end();  
  });
  res.redirect('/');
});

app.get('/showCart', (req, res) => {
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let showCartSql = `SELECT p.name,p.price,c.quantity ,p.price*c.quantity as total
    FROM shopping2.product as p join cart as c on (p.id=c.productId)`;
    con.query(showCartSql, (err, data, fields) => {
      if(err){
        console.log(err);
      }
      // console.log(data);
      res.render('showCart', {data});
    });
    con.end();
  });  
});

app.get('/editCart', (req, res) => {
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });
  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let editCartSql = `SELECT p.id, p.name, p.quantity as productQuantity, c.quantity as cartQuantity FROM product as p join cart as c on p.id = c.productId order by p.id`;
    con.query(editCartSql, (err, data, result) => {
      if(err){
        console.log(err);
      }
      res.render('editCart', {data});
      // console.log(data);
    });
    con.end();
  });  
});

app.post('/editCart', urlencodedParser, (req, res) => {
  console.log(req.body);
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    if(typeof(req.body.product) == "string"){
      let temp = 'quantity' + req.body.product;
      console.log(temp);
      let updateCartSql = `UPDATE cart SET quantity = ${Number(req.body[temp])} WHERE productId = ${Number(req.body.product)}`
      console.log(updateCartSql);
      con.query(updateCartSql, (err, data, fields) => {
        if(err){
          console.log(err);
        }
      });
    }
    else{
      for(ob of req.body.product){
        let temp = 'quantity' + ob;
        let updateCartSql = `UPDATE cart SET quantity = ${Number(req.body[temp])} WHERE productId = ${Number(ob)}`
        console.log(updateCartSql);
        con.query(updateCartSql, (err, data, fields) => {
          if(err){
            console.log(err);
          }
        });
      }
    }
    con.end();
  });
  res.redirect('/editCart');
});

app.get('/deleteProductFromCart', (req, res) => {
  let id = Number(req.query.id);
  console.log(id);
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let deleteProductSql = `DELETE FROM cart WHERE productId = ${id}`;
    console.log(deleteProductSql);
    con.query(deleteProductSql, (err, data, fields) => {
      if(err){
        console.log(err);
      }      
    });
  });
  res.redirect('editCart');
});

app.get('/deleteCart', (req, res) => {
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });

  con.connect((err) => {
    if(err){
      console.log(err);
    }
    let deleteCart = `TRUNCATE TABLE cart`;
    con.query(deleteCart, (err, data, fields) => {
      if(err){
        console.log(err);
      }
    });
    let deleteCartStatus = `TRUNCATE TABLE cartStatus`;
    con.query(deleteCartStatus, (err, data, fields) => {
      if(err){
        console.log(err);
      }
    });
    con.end();
  });
  res.render('deleteCart');
});

app.get('/confirmOrder', (req, res) => {
  const mysql = require('mysql');
  
  let con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'maharshi@123',
    database: 'shopping2'
  });
  con.connect((err) => {
    
    let showOrder = `SELECT p.name,p.price,c.quantity ,p.price*c.quantity as total
    FROM shopping2.product as p join cart as c on (p.id=c.productId)`;
    
    con.query(showOrder, (err, data, result) => {
      if(err){
        console.log(err);
      }      
      res.render('confirmOrder', {data});
    });
    let getId = `SELECT productId FROM cart`;
    con.query(getId, (err, data, fields) => {
      if(err){
        console.log(err);
      }
      console.log(data);
      for(d of data){
        let minusQuantity = `UPDATE product SET quantity=quantity-(SELECT quantity from cart where productId=${d.productId}) where id=${d.productId}`;
        console.log(minusQuantity);
        con.query(minusQuantity, (err, data, fields) => {
          if(err){
            console.log(err);
          }
        });
      }
      let cartStatusSql = `update cartStatus set status = 1, total = (select sum(c.quantity*p.price) from product as p join cart as c on c.productId = p.id);`
      con.query(cartStatusSql, (err, data, fields) => {
        if(err){
          console.log(err);
        }
      });
      let clearCart = 'TRUNCATE TABLE cart';
      con.query(clearCart, (err, data, fields) => {
        if(err){
          console.log(err);
        }
      });
    });      
  });  
});

app.listen(3001);