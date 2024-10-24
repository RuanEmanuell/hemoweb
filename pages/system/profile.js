let passwordVisible = false;
let editMode = false;

function changePasswordVisibility() {
    passwordVisible = !passwordVisible;
    let passwordInput = document.querySelector("#passwordInput");

    if (passwordVisible) {
        passwordInput.type = "text"
    } else {
        passwordInput.type = "password"
    }
}

function getUserInfo() {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    document.querySelector("#nameInput").value = user.name;
    document.querySelector("#cpfInput").value = user.cpf;
    document.querySelector("#emailInput").value = user.email;
    document.querySelector("#passwordInput").value = user.password;
    document.querySelector("#adressInput").value = user.adress;
    document.querySelector("#birthdayInput").value = user.birthday;
    document.querySelector("#bloodTypeInput").value = user.bloodType;
    document.querySelector("#boneMarrowInput").value = user.boneMarrowDonator;
}

function saveUserInfo() {
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

    localStorage.setItem(userCpf, JSON.stringify(user));
    localStorage.setItem("loggedUser", JSON.stringify(user));

    console.log(localStorage.getItem("loggedUser"));

    alert("Informações salvas!");

    setEditMode();
}

function revertUserInfo(){
    getUserInfo();
    setEditMode();
}

function loggoutUser() {
    localStorage.removeItem("loggedUser");
    document.location.href = "/pages/login/login.html";
}

function setEditMode() {
    editMode = !editMode;
    let disabled = !editMode;

    document.querySelector("#emailInput").disabled = disabled;
    document.querySelector("#passwordInput").disabled = disabled;
    document.querySelector("#adressInput").disabled = disabled;
    document.querySelector("#birthdayInput").disabled = disabled;
    document.querySelector("#bloodTypeInput").disabled = disabled;
    document.querySelector("#boneMarrowInput").disabled = disabled;

    if (editMode) {
        document.querySelector("#editButton").classList.add("hidden");
        document.querySelector("#saveAndCancelBox").classList.remove("hidden");
    } else {
        document.querySelector("#editButton").classList.remove("hidden");
        document.querySelector("#saveAndCancelBox").classList.add("hidden");
    }
}

getUserInfo();