function verifyUser(){
    if(localStorage.getItem("loggedUser") == null){
        document.location.href = "/pages/login/login.html";
    } 
}
