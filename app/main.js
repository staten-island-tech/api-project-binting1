import "./style.css";

const DOMSelectors = { 
    container: document.querySelector(".container"), 
}

async function getData () {
    try {
        
        const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40'); 

        
        if(response.status !== 200) {
            throw new Error("Failed to fetch data");
        }
            
            const data = await response.json();
            console.log(data);
            data.forEach((character) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
                `<div class="card-body border-2 rounded-xl"> 
                    <h1 class="card-title">${character.name}</h1>
                    <h2 class="text-base">Gender: ${character.gender}</h2>
                    <h2 class="text-base">Living Status: ${character.status}</h2>
                    <img class="object-cover w-64 h-80 justify-center items-center" src="${character.photo}" alt="${character.name}" />
                    <button class="btn hover:bg-red-700 hover:text-white" data-character="${character.name}">more info</button>
                </div>` 
            ));
          
            document.querySelectorAll(".btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const characterName = button.getAttribute("data-character"); 
                    const character =  data.find((char) => char.name === characterName); 
                    showMoreInfo(character); 

                });
            });

        } catch (error) {
        alert("Hey, I could not find that agent.");
    }

};


function showMoreInfo(character) {
    if (!character) {
        alert("Character not found.");
        return;
    } else {
       DOMSelectors.container.innerHTML = ""; 


        DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card-body rounded-xl border-2 w-max justify-center items-center"> 
            <h1 class="card-title">${character.name}</h1>
            <h2 class="text-base">Gender: ${character.gender}</h2>
            <h2 class="text-base">Living Status: ${character.status}</h2>
            <h2 class="text-base">Residence: ${character.residence}</h2>
            <h2 class="text-base">Birth Year: ${character.born}</h2>
            <img class="flex justify-center w-80"src="${character.photo}" alt="${character.name}"/>
            <button class="back-btn w-64 font-medium border-solid border-2 rounded-xl hover:bg-red-700 hover:text-white">Go Back</button>
        </div>`
    ); 
    }
    
    document.querySelector(".back-btn").addEventListener("click", function () {
        DOMSelectors.container.innerHTML = "";
        getData(character);
    })
};

getData();
