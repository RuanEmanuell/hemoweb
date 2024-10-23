let passwordVisible = false;

function changePasswordVisibility() {
    passwordVisible = !passwordVisible;
    let passwordInput = document.querySelector("#passwordInput");

    if (passwordVisible) {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}

function login() {
    let userCpf = document.querySelector("#cpfInput").value;
    let userPassword = document.querySelector("#passwordInput").value;
    //let isKeepingLogged = document.querySelector("#loggedCheckbox").checked;

    let user = localStorage.getItem(userCpf);

    if (user == null) {
        alert("CPF não registrado.");
    } else {
        if (JSON.parse(user).userPassword != userPassword) {
            alert("Senha incorreta!");
        } else {
            saveUserCredencials(user);
            document.location.href = "/pages/system/system.html";
        }
    }
}


function createAccount() {
    let userName = document.querySelector("#nameInput").value;
    let userCpf = document.querySelector("#cpfInput").value;
    let userEmail = document.querySelector("#emailInput").value;
    let userPassword = document.querySelector("#passwordInput").value;

    let user = {
        name: userName,
        userCpf: userCpf,
        userEmail: userEmail,
        userPassword: userPassword
    }

    if (localStorage.getItem(userCpf) == null) {
        localStorage.setItem(userCpf, JSON.stringify(user));
        saveUserCredencials(JSON.stringify(user))
        alert("Conta criada!");
        document.location.href = "/pages/system/system.html";
    } else {
        alert("CPF já registrado");
    }
}

function saveUserCredencials(user){
    localStorage.setItem("loggedUser", user);
}

if (document.querySelector("#loginForm")) {
    document.querySelector("#loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        if (document.querySelector("#loginForm").checkValidity()) {
            login();
        }
    })
}

if (document.querySelector("#createAccountForm")) {
    document.querySelector("#createAccountForm").addEventListener("submit", function (event) {
        event.preventDefault();

        if (document.querySelector("#createAccountForm").checkValidity()) {
            createAccount();
        }
    })
}