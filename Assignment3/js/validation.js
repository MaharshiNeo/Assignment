function validation(){
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var phone = $('#phone').val();
    var off_no = $('#off_no').val();
    var email = $('#email').val();
    var reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var pass = $('#pass').val();
    var cpass = $('#cpass').val();
    var reg2 = /[!"#$%&'()*+,-./:;<=>?@^_`{|}~]/;
    var date = $('#date').val();
    var male = $('#male').is(":checked");
    var female = $('#female').is(":checked");
    var checkbox1 = $("#checkbox_sample18").is(":checked");
    var checkbox2 = $("#checkbox_sample19").is(":checked");
    var checkbox3 = $("#checkbox_sample20").is(":checked");
    var about = $("#about").val();

    var valid = true;
    
    if(fname.trim() == ''){
        $("#fname_err").text("First Name required");
        valid = false;
    }
    else{
        $("#fname_err").text("");
    }


    if(lname.trim() == ''){
        $("#lname_err").text("Last Name required");
        valid = false;
    }
    else{
        $("#lname_err").text("");
    }


    if(phone.trim() == ''){
        $("#phone_err").text("Phone Number required")
        valid = false
    }else if(isNaN(phone)){
        $("#phone_err").text("Only digits allowed")
        valid = false
    }
    else if(phone.length!=10){
        $("#phone_err").text("Only 10 digits number allowed")
        valid = false
    }
    else{
        $("#phone_err").text("")
    }


    if(isNaN(off_no)){
        $("#off_no_err").text("Only digits are allowed")
        valid = false
    }
    else{
        $("#off_no_err").text("")
    }


    if(email == ''){
        $("#email_err").text("Email Required")        
        valid = false
    }
    else if(reg1.test(email) == false){
        $("#email_err").text("Email invalid")
        valid = false
    }
    else{
        $("#email_err").text("")
    }


    if(pass.length > 12 || pass.length < 8){
        $("#pass_err").text("Length of password should be between 8 and 12")
        valid = false
    }
    else if(reg2.test(pass)){
        $("#pass_err").text("Password is not valid")
        valid = false
    }
    else{
        $("#pass_err").text("")
    }

    if(cpass != pass){
        $("#cpass_err").text("Type same password")
        valid = false
    }
    else{
        $("#cpass_err").text("")
    }


    if(date == ''){
        $("#date_err").text("Enter date please")
        valid = false
    }
    else{
        $("#date_err").text("")
        var today = new Date();
        var dob = new Date(date);
        var age = today.getFullYear() - dob.getFullYear();
        var month = today.getMonth() - dob.getMonth();
        age = age + (month/12);
        $("#age").val(age);
    }


    if(!(male || female)){
        $("#gender_err").text("Please select gender")
        valid = false
    }
    else{        
        $("#gender_err").text("")
    }


    if(!(checkbox1 || checkbox2 || checkbox3)){
        $('#interest_err').text('Please select atleast one interest')
        valid = false
    }
    else{
        $('#interest_err').text("")        
    }


    if(about.trim() == ''){
        $("#about_err").text("This field is required")
        valid = false
    }
    else{
        $("#about_err").text("")
    }

    return valid
}