function verifyUser(){
    if(localStorage.getItem("loggedUser") == null){
        document.location.href = "../../pages/login/login.html";
    } 
}

function loggoutUser(){
    localStorage.removeItem("loggedUser");
    document.location.href = "../../pages/login/login.html";
}
