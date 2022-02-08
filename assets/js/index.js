function login(){
    var password = document.getElementById("password");
    var user = document.getElementById("user");
    if (password.value==1997 && user.value=='Nando'){ 
        window.location="index.html";
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 