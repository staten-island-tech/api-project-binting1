import "./style.css";

const DOMSelectors = { 
    container: document.querySelector(".container"), 
}

async function getData () {
    try {
        // Fetch data from the API
        const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40'); 

        // Guard clause for unsuccessful response
        if(response.status !== 200) {
            throw new Error("Failed to fetch data");
        } else {
            // Convert the response to JSON
            const data = await response.json();
            console.log(data);
            data.forEach((character) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
                `<div class="card-body border-2 rounded-xl"> 
                    <h1 class="card-title">${character.name}</h1>
                    <h2 class="text-base">${character.gender}</h2>
                    <h2 class="text-base">${character.status}</h2>
                    <img src="${character.photo}" alt="${character.name}" />
                </div>`
            )); 
        }
        } catch (error) {
        alert("Hey, I could not find that agent.");
    }
};

getData();

async function getFemale () {
    document.querySelector(".btn").addEventListener("click", async function () {
    DOMSelectors.container.innerHTML = "";
    try { 
        const response = await fetch("https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40/&gender=Female")

    if(response.status !== 200) {
        throw new Error("failed to fetch data"); 
    } else {
        const data = await response.json();
    console.log(data);
    data.forEach((character) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card card-body border-2 rounded-xl"> 
            <h1 class="card-title">${character.name}</h1>
            <h2 class="text-base">${character.gender}</h2>
            <h2 class="text-base">${character.status}</h2>
            <img src="${character.photo}" alt="${character.name}" />
        </div>`
    )); 
    } 
    } catch (error) {
        alert("hey"); 
    }
    })
}
getFemale ();

function moreInfo () {
    document.querySelector("div.card").addEventListener("click", function () {
        DOMSelectors.container.innerHTML -"";
        data.forEach((character) => DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<div class="card-body border-2 rounded-xl"> 
                    <h1 class="card-title">${character.name}</h1>
                    <h2 class="text-base">${character.gender}</h2>
                    <h2 class="text-base">${character.status}</h2>
                    <img src="${character.photo}" alt="${character.name}" />
                </div>`
        ));
    })
}; 

moreInfo ();


