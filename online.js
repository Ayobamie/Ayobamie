let u_name = document.getElementById("username");
let pass = document.getElementById("password");
let c_password = document.getElementById("confirmPassword")
let btn = document.getElementById("submit");
let signUpContainer = document.querySelector(".signUpContainer");
let btnn = document.querySelector(".sign_up");
let btnu = document.querySelector(".close");
let lodin_btn = document.querySelector(".log_in");
let view_login = document.querySelector(".view_login");

btn.addEventListener(onclick,checkInput);
login_btn.addEventListener(onclick,login_check);
let correct_username = "";
let correct_password = "";
let correct_confirmPassword = "";

function sign_up(){
    signUpContainer.style.display ="block";
    
}
function close(){
    signUpContainer.style.display ="none";
}
function login(checkInput){
    view_login.style.display="block";

}

   

function newPage(){

}

function checkInput(signUpContainer){
    let username = u_name.value;
    let password = pass.value;
    let co_password = c_password.value;
    if (password == co_password){
        return login_
        
            successfully
    }else{
        return(signUpContainer);
        }
}    

function login_check(){
    let username = u_name.value;
    let password = pass.value;
    if (u_name ==correct_password){
        window.alert("login successfully");
    }
    else{    window.alerts("wrong details");}
}
       


        
        

      