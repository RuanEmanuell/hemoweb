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

    let user = localStorage.getItem(userCpf);

    if (user == null) {
        alert("CPF não registrado.");
    } else {
        if (JSON.parse(user).password != userPassword) {
            alert("Senha incorreta!");
        } else {
            saveUserCredencials(user);
            document.location.href = "/pages/system/posts.html";
        }
    }
}


function createAccount() {
    let userName = document.querySelector("#nameInput").value;
    let userCpf = document.querySelector("#cpfInput").value;
    let userEmail = document.querySelector("#emailInput").value;
    let userPassword = document.querySelector("#passwordInput").value;
    let userAdress = document.querySelector("#adressInput").value;
    let userBirthday = document.querySelector("#birthdayInput").value;
    let userBloodType = document.querySelector("#bloodTypeInput").value;
    let userBoneMarrowDonator = document.querySelector("#boneMarrowInput").value;

    let user = {
        name: userName,
        cpf: userCpf,
        email: userEmail,
        password: userPassword,
        adress: userAdress,
        birthday: userBirthday,
        bloodType: userBloodType,
        boneMarrowDonator: userBoneMarrowDonator
    }

    if (localStorage.getItem(userCpf) == null) {
        localStorage.setItem(userCpf, JSON.stringify(user));
        saveUserCredencials(JSON.stringify(user))
        document.location.href = "/pages/system/posts.html";
    } else {
        alert("CPF já registrado");
    }
}

function saveUserCredencials(user){
    localStorage.setItem("loggedUser", user);
}

function loggoutUser(){
    localStorage.removeItem("loggedUser");
    document.location.href = "/pages/login/login.html";
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

