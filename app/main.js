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
                    <button class="btn">more info</button>
                </div>` 
            ));
            };  
          
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

// Function to show more information about the character
function showMoreInfo(character) {
    DOMSelectors.container.innerHTML = ""; // Clear the container

    // Render the detailed info for the selected character
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card-body border-2 rounded-xl"> 
            <h1 class="card-title">${character.name}</h1>
            <h2 class="text-base">${character.gender}</h2>
            <h2 class="text-base">${character.status}</h2>
            <img src="${character.photo}" alt="${character.name}" />
            <p>Additional information about ${character.name}</p>
        </div>`
    );
};

getData();




