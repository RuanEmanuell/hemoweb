verifyUser();

let notifications = [
    {
        userName: "Hemominas (Sede Juiz de Fora)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        notificationDays: 1,
        notificationDescription: "Está quase na hora de doar de novo! Que tal fazer um novo agendamento?",
        read: false
    },
    {
        userName: "Hemominas (Juiz de Fora)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        notificationDays: 2,
        notificationDescription: "Os atendimentos no Hemocentro Regional de Juiz de Fora serão realizados de segunda a sexta-feira, das 7 às 18 horas; e aos sábados, das 7 às 11 horas.",
        read: false
    },
    {
        userName: "Hemominas (Uberaba)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        notificationDays: 5,
        notificationDescription: "Estamos com estoques baixos de sangue tipo O-. Que tal nos ajudar e marcar uma doação?",
        read: false
    },
    {
        userName: "Hemominas (Uberlândia)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        notificationDays: 7,
        notificationDescription: "Sabia que uma única doação pode salvar até 4 vidas? Sua ajuda faz toda a diferença.",
        read: false
    },
]

let notificationsSection = document.querySelector("#notificationsSection");

function readNotification(i) {
    notifications[i].read = true;
    localStorage.setItem("notifications", JSON.stringify(notifications));
    notificationsSection.innerHTML = "";
    getNotifications();
}

function getNotifications() {
    if (localStorage.getItem("notifications") == null) {
        localStorage.setItem("notifications", JSON.stringify(notifications));
    } else {
        notifications = JSON.parse(localStorage.getItem("notifications"));
    }

    for (var i = 0; i < notifications.length; i++) {
        notificationsSection.insertAdjacentHTML("beforeend",
            `<div class = "${notifications[i].read ? 'bg-white' : 'bg-blue-300'} flex flex-col w-11/12 lg:w-2/3 max-w-lg mx-auto rounded-xl my-10 py-4">
                                                        <div class ="flex flex-row px-4">
                                                            <div class="flex flex-row w-full">
                                                                <img src="${notifications[i]['userImage']}" class="w-16 h-auto border-2 border-[#075091] rounded-full">
                                                                <h4 class="text-[#075091] font-bold ml-2">${notifications[i]['userName']}</h4>
                                                                <h4 class="text-gray-500 font-bold ml-2">• ${notifications[i]['notificationDays']}d</h4>
                                                            </div>
                                                            <div class="${notifications[i].read ? 'hidden' : 'flex'} justify-end"> 
                                                               <div class="bg-red-500 rounded-full w-5 h-5"></div>
                                                            </div>
                                                        </div>
                                                        <p class="my-2 px-4">${notifications[i]["notificationDescription"]}</p>
                                                        <div class="w-full ${notifications[i].read ? 'hidden' : 'flex'} justify-end">
                                                            <button class="bg-[#075091] h-10 w-48 xl:w-56 text-white font-bold rounded-full hover:bg-[#063d73] mx-2 " onclick="readNotification(${i})">MARCAR COMO LIDO</button>
                                                        </div>
                                                    </div>`)
    }
}

getNotifications();

function verifyUser() {
    if (localStorage.getItem("loggedUser") == null) {
        document.location.href = "../../pages/login/login.html";
    }
}

function loggoutUser() {
    localStorage.removeItem("loggedUser");
    document.location.href = "../../pages/login/login.html";
}
