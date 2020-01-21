function validate(){
    
    var val = true

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var off_no = document.getElementById("off_no").value;
    var email = document.getElementById("email").value.trim();
    var reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var reg2 = /[!"#$%&'()*+,-./:;<=>?@^_`{|}~]/;
    var date = document.getElementById("date").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var checkbox1 = document.getElementById("checkbox_sample18");
    var checkbox2 = document.getElementById("checkbox_sample19");
    var checkbox3 = document.getElementById("checkbox_sample20");
    var about = document.getElementById("about").value;

    if(fname.trim() == ''){
        document.getElementById('fname_err').innerHTML = "First Name Required"
        val = false
    }else
    {
        document.getElementById('fname_err').innerHTML = ""
    }


    if(lname.trim() == ''){
        document.getElementById('lname_err').innerHTML = "Last Name Required"
        val = false
    }else
    {
        document.getElementById('lname_err').innerHTML = ""
    }


    if(phone.trim() == ''){
        document.getElementById('phone_err').innerHTML = "Phone Number required"
        val = false
    }else if(isNaN(phone)){
        document.getElementById('phone_err').innerHTML = "Only digits are allowed"
        val = false
    }else if(isNaN(phone)){
        document.getElementById('phone_err').innerHTML = "Only digits are allowed"
        val = false
    }
    else if(phone.length!=10){
        document.getElementById('phone_err').innerHTML = "Only 10 digits number allowed"
        val = false
    }
    else{
        document.getElementById('phone_err').innerHTML = ""
    }


    if(isNaN(off_no)){
        document.getElementById('off_no_err').innerHTML = "Only digits are allowed"
        val = false
    }
    else{
        document.getElementById('off_no_err').innerHTML = ""
    }


    if(email == ''){
        document.getElementById('email_err').innerHTML = "Email Required"
        val = false
    }
    else if(reg1.test(email) == false){
        document.getElementById('email_err').innerHTML = "Email invalid"
        val = false
    }
    else{
        document.getElementById('email_err').innerHTML = ""
    }

    
    if(pass.length > 12 || pass.length < 8){
        document.getElementById("pass_err").innerHTML = "Length of password should be between 8 and 12"
        val = false
    }
    else if(reg2.test(pass)){
        document.getElementById("pass_err").innerHTML = "Password is not valid"
        val = false
    }
    else{
        document.getElementById("pass_err").innerHTML = ""
    }

    if(cpass != pass){
        document.getElementById("cpass_err").innerHTML = "Type same password"
        val = false
    }
    else{
        document.getElementById("cpass_err").innerHTML = ""
    }


    if(date == ''){
        document.getElementById("date_err").innerHTML = "Enter date please"
        val = false
    }
    else{
        document.getElementById("date_err").innerHTML = ""
        var today = new Date();
        var dob = new Date(date);
        var age = today.getFullYear() - dob.getFullYear()
        var month = today.getMonth() - dob.getMonth()
        age = age + (month/12)
        document.getElementById("age").value = age
    }


    if(!(male || female)){
        document.getElementById("gender_err").innerHTML = "Please select gender"
        val = false
    }
    else{        
        document.getElementById("gender_err").innerHTML = ""
    }


    if(!(checkbox1.checked || checkbox2.checked || checkbox3.checked)){
        document.getElementById('interest_err').innerHTML = 'Please select atleast one interest'
        val = false
    }
    else{
        document.getElementById('interest_err').innerHTML = ""        
    }


    if(about.trim() == ''){
        document.getElementById("about_err").innerHTML = "This field is required"
        val = false
    }
    else{
        document.getElementById("about_err").innerHTML = ""
    }

    return val
}