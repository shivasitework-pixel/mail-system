function login(){

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

if(email==="" || password===""){
document.getElementById("msg").innerHTML="Please fill all fields";
return;
}

document.getElementById("msg").innerHTML="Login Successful (Demo)";
}
