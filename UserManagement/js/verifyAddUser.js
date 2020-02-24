function verifyAddUser(){
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let address = document.getElementById("address").value.trim();
  let phoneNo = document.getElementById("phoneNo").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let emailReg = /(^[a-zA-Z])([._-]?([a-zA-Z0-9])+)*@([a-zA-Z0-9]{2,}.)+[a-zA-Z]{2,3}/;

  let valid = true;

  if(firstName == ""){
    document.getElementById("firstNameError").innerHTML = "First Name required";
    valid = false;
  }
  else{
    document.getElementById("firstNameError").innerHTML = "";
  }

  if(lastName == ""){
    document.getElementById("lastNameError").innerHTML = "Last Name required";
    valid = false;
  }
  else{
    document.getElementById("lastNameError").innerHTML = "";
  }

  if(address == ""){
    document.getElementById("addressError").innerHTML = "Address required";
    valid = false;
  }
  else{
    document.getElementById("addressError").innerHTML = "";
  }

  if(phoneNo == ""){
    document.getElementById("phoneNoError").innerHTML = "Phone no. required";
    valid = false;
  }
  else if(isNaN(phoneNo)){
    document.getElementById("phoneNoError").innerHTML = "Phone no. should be number";
    valid = false;
  }
  else if(phoneNo.length != 10){
    document.getElementById("phoneNoError").innerHTML = "Length of phone no. should be 10";
    valid = false;
  }
  else{
    document.getElementById("phoneNoError").innerHTML = "";
  }

  if(email == ""){
    document.getElementById("emailError").innerHTML = "Email required";
    valid = false;
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
  return valid;
}