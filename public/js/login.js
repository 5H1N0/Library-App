

function emailvalidate(){
    let email = document.getElementById("email");
    let error = document.getElementById("error");
    
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regexp.test(email.value)){
        error.innerHTML = "Valid Email address";
        error.style.color = "green";
        return true;
    }
    else{
        error.innerHTML = "Invalid email address";
        error.style.color = "red";
        return false;
    }
}



function pwdvalidate(){
    var pwd = document.getElementById("pwd");
    var progress = document.getElementById("progress");
    var pwdstrength = document.getElementById("pwdstrength");

    var strength = 0;
    var pwdvalue = pwd.value;

    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const specialchar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightchar = new RegExp('(?=.{8,})');

    if(eightchar.test(pwdvalue)){
        strength +=1;
    }
    if(lowercase.test(pwdvalue)){
        strength +=1;
    }
    if(uppercase.test(pwdvalue)){
        strength +=1;
    }
    if(number.test(pwdvalue)){
        strength +=1;
    }
    if(specialchar.test(pwdvalue)){
        strength +=1;
    }

    if(strength == 0){

        progress.style.background = "none";
        pwdstrength.innerHTML = "<span><strong>Enter password</strong></span>";
        pwdstrength.style.color = "red";
    }
    if(strength == 1){
        progress.style.width ="20%";
        progress.style.background = "darkred";
        pwdstrength.innerHTML = "Password Strength: <span><strong>Poor</strong></span>";
        pwdstrength.style.color = "darkred";
    }
    if(strength == 2){
        progress.style.width ="40%";
        progress.style.background = "orangered";
        pwdstrength.innerHTML = "Password Strength: <span><strong>Weak</strong></span>";
        pwdstrength.style.color = "orangered";
    }
    if(strength == 3){
        progress.style.width = "60%";
        progress.style.background = "orange";
        pwdstrength.innerHTML = "Password Strength: <span><strong>Medium</strong></span>";
        pwdstrength.style.color = "orange";
    }
    if(strength == 4){
        progress.style.width = "80%";
        progress.style.background = "lime";
        pwdstrength.innerHTML = "Password Strength: <span><strong>Strong</strong></span>";
        pwdstrength.style.color = "lime";
    }
    if(strength == 5){
        progress.style.width = "100%";
        progress.style.background = "green";
        pwdstrength.innerHTML = "Password Strength: <span><strong>Very Strong</strong></span>";
        pwdstrength.style.color = "green";
    }

    if(strength==5){
        return true
    }
    
}


function phnvalidate(){
    let phone = document.getElementById("phone");
    let perror = document.getElementById("perror");

    let regexp1 =/^([0-9]{10})$/;
    let regexp2 =/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let regexp3 =/^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let regexp4 =/^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    
    let phoneval = phone.value;

    if(regexp1.test(phoneval)){
        perror.innerHTML = "Valid Phone number";
        perror.style.color = "green";
        return true;
    }
    else if(regexp2.test(phoneval)){
        perror.innerHTML = "Valid Phone number";
        perror.style.color = "green";
        return true;
    }

    else if(regexp3.test(phoneval)){
        perror.innerHTML = "Valid Phone number";
        perror.style.color = "green";
        return true;
    }
    else if(regexp4.test(phoneval)){
        perror.innerHTML = "Valid Phone number";
        perror.style.color = "green";
        return true;
    }
    else{
        perror.innerHTML = "Invalid Phone number";
        perror.style.color = "red";
        return false;
    }

}

function validatesignup(){
    let a = emailvalidate();
    let b = pwdvalidate();
    let c = phnvalidate();

    if(a&&b&&c){
        return true;
    }
    else{
        return false;
    }
}

function validatelogin(){
    let d = emailvalidate();
    let e = pwdvalidate();

    if(d&&e){
        return true;
    }
    else{
        return false;
    }
}
