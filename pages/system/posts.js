verifyUser();

function verifyUser(){
    if(localStorage.getItem("loggedUser") == null){
        document.location.href = "../../pages/login/login.html";
    } 
}

function loggoutUser(){
    localStorage.removeItem("loggedUser");
    document.location.href = "../../pages/login/login.html";
}


let posts = [
    {
        userName: "Hemominas (Sede Juiz de Fora)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        postDays: 1,
        postDescription: "A Prefeitura de Juiz de Fora, através do projeto “Bem Comum”, da Secretaria de Comunicação Social (SCS) é mais uma vez parceira da Fundação Hemominas, na campanha de conscientização sobre a importância da doação de sangue..",
        postImage: "https://www.pjf.mg.gov.br/noticias/arquivo/1501BEMCOMUM_175542.jpg",
        postLikes: 123,
        postLiked: false
    },
    {
        userName: "Hemominas (Sede Belo Horizonte)",
        userImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak1MleIgg2unZQLw4EB0VVMAudvkseQPuLg&s",
        postDays: 1,
        postDescription: "Os atendimentos no Hemocentro Regional de Belo Horizonte são realizados de segunda a sexta-feira, das 7 às 18 horas; e aos sábados, das 7 às 11 horas.",
        postImage: "https://s2-g1.glbimg.com/4Xq8Hwk7O5p2MHa7BPOMdUfq2ag=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/8597231.jpg",
        postLikes: 299,
        postLiked: false
    },
]

if (localStorage.getItem("posts") == null) {
    localStorage.setItem("posts", JSON.stringify(posts));
} else {
    posts = JSON.parse(localStorage.getItem("posts"));
}

let postsPage = document.querySelector("#postsPage");

for (var i = 0; i < posts.length; i++) {
    postsPage.insertAdjacentHTML("beforeend",
                                                `<div class = "bg-white flex flex-col w-11/12 lg:w-2/3 max-w-lg mx-auto rounded-xl my-10 py-4">
                                                    <div class ="flex flex-row px-4">
                                                        <img src="${posts[i]['userImage']}" class="w-16 h-auto border-2 border-[#075091] rounded-full">
                                                        <h4 class="text-[#075091] font-bold ml-2">${posts[i]['userName']}</h4>
                                                        <h4 class="text-gray-500 font-bold ml-2">• ${posts[i]['postDays']}d</h4>
                                                    </div>
                                                    <p class="my-2 px-4">${posts[i]["postDescription"]}</p>
                                                    <img src="${posts[i]["postImage"]}" class="h-96 w-auto object-cover">
                                                    <button class="flex flex-row items-center mt-4 ml-4 cursor-pointer" onclick="likePost(${i})">
                                                        <img id="liked${i}" src=${posts[i]["postLiked"] ? "../../public/icons/water_liked.png" : "../../public/icons/water.png"} class="h-8 w-8">
                                                        <p id="likes${i}">${posts[i]["postLikes"]}</p>
                                                    </button>
                                                </div>`)
}

function likePost(index) {
    if (posts[index]["postLiked"] == false) {
        posts[index]["postLikes"] += 1;
        document.querySelector(`#liked${index}`).src = "../../public/icons/water_liked.png";
    } else {
        posts[index]["postLikes"] -= 1;
        document.querySelector(`#liked${index}`).src = "../../public/icons/water.png";
    }

    posts[index]["postLiked"] = !posts[index]["postLiked"];
    document.querySelector(`#likes${index}`).textContent = posts[index]["postLikes"];

    localStorage.setItem("posts", JSON.stringify(posts));
}