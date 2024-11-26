import "./style.css";

const DOMSelectors = { 
    container: document.querySelector(".container"), 
    secContainer: document.querySelector(".apple"),
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

            // function getDetails (){
            //     document.querySelector(".btn").addEventListener("click", function () {
            //         DOMSelectors.container.innerHTML = "";
            //         data.forEach((character) => DOMSelectors.secContainer.insertAdjacentHTML("beforeend", 
            //             `<div class="card-body border-2 rounded-xl"> 
            //                 <h1 class="card-title">${character.name}</h1>
            //                 <h2 class="text-base">${character.gender}</h2>
            //                 <h2 class="text-base">${character.status}</h2>
            //                 <img src="${character.photo}" alt="${character.name}" />
            //             </div>`));
            //     })
            // }

            // getDetails ();
        }
        } catch (error) {
        alert("Hey, I could not find that agent.");
    }
};

getData();


async function getDetails () {
    try {
        // Fetch data from the API
        const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40/?gender=Female'); 

        // Guard clause for unsuccessful response
        if(response.status !== 200) {
            throw new Error("Failed to fetch data");
        } else {
            // Convert the response to JSON
            const data = await response.json();
            console.log(data);
            DOMSelectors.container.innerHTML = "";
            data.forEach((character) => DOMSelectors.secContainer.insertAdjacentHTML("beforeend", 
                `<div class="card-body border-2 rounded-xl"> 
                    <h1 class="card-title">${character.name}</h1>
                    <h2 class="text-base">${character.gender}</h2>
                    <h2 class="text-base">${character.status}</h2>
                    <img src="${character.photo}" alt="${character.name}" />
                </div>`
            )); 
        } 
    }   catch (error) {
        alert("Hey, I could not find that agent.");
    }
};

getDetails ();

