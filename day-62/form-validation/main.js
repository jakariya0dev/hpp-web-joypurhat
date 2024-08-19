
function checkFormData(){

    let userEmail = document.getElementById('emailField').value;
    let userPassword = document.getElementById('passwordField').value;

    if(userEmail == ""){
        alert('Please enter your mail');
    }
    else if(!userEmail.include("@") && !userEmail.include(".") ){

    }
    else if(userPassword == ""){
        alert('Please enter your password');
    }
    else if(userPassword.length < 6){
        alert('Password cant less than 6 charecter');
    }
    else{
        alert('Successfully logged in');
    }
}