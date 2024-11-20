verifyUser();

function verifyUser() {
    if (localStorage.getItem("loggedUser") == null) {
        document.location.href = "../../pages/login/login.html";
    }
}

function loggoutUser() {
    localStorage.removeItem("loggedUser");
    document.location.href = "../../pages/login/login.html";
}

let availableSection = document.querySelector("#availableSchedules");

let baseHour = 7;
let baseMinutes = '30';
let userSelectedHour = undefined;

function selectHour(i){
    let hourButtons = document.querySelectorAll(".hourButton");
    for(var j = 0; j<hourButtons.length; j++){
        if(j != i){
            hourButtons[j].classList.remove('bg-[#dc4e4f]');
        }
    }

    hourButtons[i].classList.add('bg-[#dc4e4f]');
    userSelectedHour = hourButtons[i].textContent;
}

for (var i = 0; i < 12; i++) {
    i % 2 == 0 ? baseHour++ : false;
    i % 2 == 0 ? baseMinutes = '00' : baseMinutes = '30';

    if(baseHour == 11 && baseMinutes == "30"){
        baseHour += 2;
    }

    availableSection.insertAdjacentHTML("beforeend",
        `<button class="hourButton bg-[#075091] w-10/12 h-16 mx-auto my-2 flex justify-center items-center cursor-pointer hover:bg-[#dc4e4f] rounded" onclick="selectHour(${i})">
            <h3 class="text-white font-bold text-center">${baseHour < 10 ? 0 : ''}${baseHour}:${baseMinutes}</h3>
        </button>`)
}


function submitSchedule(){
    let selectedDate = document.querySelector("#dateInput").value;
    let selectedHour = userSelectedHour;
    let selectedLocation = document.querySelector("#locationInput").value;

    if(selectedHour != undefined && selectedDate){
        let schedule = {
            date: selectedDate,
            hour: selectedHour,
            location: selectedLocation
        }

        const keys = Object.keys(localStorage).filter(key => key.startsWith('schedule:'));
        const schedules = keys.map(key => JSON.parse(localStorage.getItem(key)));

        localStorage.setItem(`schedule:${schedules.length}`, JSON.stringify(schedule));
    } else {
        alert("Escolha um mês/dia e um horário!");
    }
}


