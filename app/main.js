import "./style.css";
async function getData () {
    try {
       //returns a promise
    const response = await fetch ('https://api.disneyapi.dev/character'); 
        //gaurd clause
    if(response.status != 200) {
        throw new Error(response);
    } else {
        //converts promise to json
    const data = await response.json();
    console.log(data.data)
    //this is unique to this API
    // data.data.forEach((agent) => console.log(agent.name));
    data.data.forEach((character) => document.querySelector("div.container").insertAdjacentHTML("beforeend", 
        `<div class="card-body"> 
            <h1 class="card-title">${character.name}</h1>
        </div>`));
};

    } catch (error) {
        alert ("hey i could not find that agent"
        )
    }
}

getData ();
