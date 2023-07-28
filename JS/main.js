function login(){
var user,pass;
    user=document.getElementById("usuario").value;
    pass=document.getElementById("password").value;	
if (user == user){
    window.location="ingreso.html"
}
else{
    document.write("Usuario o Contraseña incorrectos");
    
}

}
function registers(){
   user=document.getElementById("usuario");
   pass=document.getElementById("password");
}
