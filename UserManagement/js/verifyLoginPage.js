function verifyLogin(){
  
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let emailReg = /(^[a-zA-Z])([._-]?([a-zA-Z0-9])+)*@([a-zA-Z0-9]{2,}.)+[a-zA-Z]{2,3}/;

  let valid = true;

  if(email == ""){
    document.getElementById("emailError").innerHTML = "Email required";
    valid  = false;
  }
  else if(!emailReg.test(email)){
    document.getElementById("emailError").innerHTML = "Email invalid";
    valid = false;
  }
  else{
    document.getElementById("emailError").innerHTML = "";
  }

  if(password == ""){
    document.getElementById("passwordError").innerHTML = "Password required";
    valid = false;
  }
  else if(password.length < 4){
    document.getElementById("passwordError").innerHTML = "Length of password should be greater than 4";
    valid = false;
  }
  else{
    document.getElementById("passwordError").innerHTML = "";
  }    
  return valid;
}