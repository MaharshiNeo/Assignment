function validate(){
    
    let val = true;

    let form = document.forms.validate;
    console.log(form.firstName,'form');

    let firstName = form.firstName.value.trim();
    let lastName = form.lastName.value.trim();
    let phone = form.phone.value.trim();
    let officeNumber = form.officeNumber.value.trim();
    let email = form.email.value.trim();
    let verifyEmail = /(^[a-zA-Z])([._-]?([a-zA-Z0-9])+)*@([a-zA-Z0-9]{2,}.)+[a-zA-Z]{2,3}/;
    let password = form.password.value.trim();
    let confirmPassword = form.confirmPassword.value.trim();
    let verifyPassword = /[!"#$%&'()*+,-./:;<=>?@^_`{|}~]/;
    let birthDate = form.birthDate.value;
    let male = form.male.checked;
    let female = form.female.checked;
    let interest1 = form.interest1;
    let interest2 = form.interest2;
    let interest3 = form.interest3;
    let about = form.about.value.trim();
    
    if(firstName == ''){
        
        document.getElementById('firstNameError').innerHTML = "First Name Required";
        val = false;
    }
    else
    {
        document.getElementById('firstNameError').innerHTML = "";
    }


    if(lastName == ''){
        document.getElementById('lastNameError').innerHTML = "Last Name Required";
        val = false;
    }else
    {
        document.getElementById('lastNameError').innerHTML = "";
    }


    if(phone == ''){
        document.getElementById('phoneError').innerHTML = "Phone Number required";
        val = false;
    }else if(isNaN(phone)){
        document.getElementById('phoneError').innerHTML = "Only digits are allowed";
        val = false;
    }else if(phone.length!=10){
        document.getElementById('phoneError').innerHTML = "Only 10 digits number allowed";
        val = false;
    }
    else{
        document.getElementById('phoneError').innerHTML = "";
    }


    if(isNaN(officeNumber)){
        document.getElementById('officeNumberError').innerHTML = "Only digits are allowed";
        val = false;
    }
    else{
        document.getElementById('officeNumberError').innerHTML = "";
    }


    if(email == ''){
        document.getElementById('emailError').innerHTML = "Email Required";
        val = false;
    }
    else if(verifyEmail.test(email) == false){
        document.getElementById('emailError').innerHTML = "Email invalid";
        val = false;
    }
    else{
        document.getElementById('emailError').innerHTML = "";
    }

    
    if(password.length > 12 || password.length < 8){
        document.getElementById("passwordError").innerHTML = "Length of password should be between 8 and 12";
        val = false;
    }
    else if(verifyPassword.test(password)){
        document.getElementById("passwordError").innerHTML = "Password is not valid";
        val = false;
    }
    else{
        document.getElementById("passwordError").innerHTML = "";
    }

    if(confirmPassword != password){
        document.getElementById("confirmPasswordError").innerHTML = "Type same password";
        val = false;
    }
    else{
        document.getElementById("confirmPasswordError").innerHTML = "";
    }


    if(birthDate == ''){
        document.getElementById("birthDateError").innerHTML = "Enter date please";
        val = false;
    }
    else{
        document.getElementById("birthDateError").innerHTML = "";
        let today = new Date();
        let dob = new Date(birthDate);
        let age = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        age = age + (month/12);
        document.getElementById("age").value = age;
    }


    if(!(male || female)){
        document.getElementById("genderError").innerHTML = "Please select gender";
        val = false;
    }
    else{        
        document.getElementById("genderError").innerHTML = "";
    }


    if(!(interest1.checked || interest2.checked || interest3.checked)){
        document.getElementById('interestError').innerHTML = 'Please select atleast one interest';
        val = false;
    }
    else{
        document.getElementById('interestError').innerHTML = "";
    }


    if(about == ''){
        document.getElementById("aboutError").innerHTML = "This field is required";
        val = false;
    }
    else{
        document.getElementById("aboutError").innerHTML = "";
    }

    return val;
}