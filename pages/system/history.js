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

let historySection = document.querySelector("#historySection");


function getSchedules() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('schedule:'));
    const schedules = keys.map(key => JSON.parse(localStorage.getItem(key)));

    for (let i = 0; i < schedules.length; i++) {
        historySection.insertAdjacentHTML("beforeend",
            `<div class="bg-white w-11/12 max-w-2xl h-fit rounded-lg mb-10 flex flex-col justify-center pl-2 mx-auto pb-4">
                <div class="w-full flex justify-between items-center p-2">
                            <span></span>
                            <h3 class="text-[#075091] text-xl text-center font-bold">Agendamento ${i + 1}</h3>
                            <button onclick="deleteSchedule(${schedules[i].id})">🗑️</button>
                </div>
                <div class="text-[#075091]">
                    <b class="font-bold text-[#075091]">Dia: </b> ${schedules[i].date}
                </div>
                <div class="text-[#075091]">
                    <b class="font-bold text-[#075091]">Horário: </b> ${schedules[i].hour}
                </div>
                <div class="text-[#075091]">
                    <b class="font-bold text-[#075091]">Local: </b> ${schedules[i].location}
                </div>
            </div>`)
    }
}

function deleteSchedule(i) {
    localStorage.removeItem(`schedule:${i}`);
    historySection.innerHTML = "";
    getSchedules();
}

getSchedules();