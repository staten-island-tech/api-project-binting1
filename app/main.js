import "./style.css";
async function getData () {
    try {
       //returns a promise
    const response = await fetch ('https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40'); 
        //gaurd clause
    if(response.status != 200) {
        throw new Error(response);
    } else {
        //converts promise to json
    const data = await response.json();
    console.log(data)
    data.forEach((character) => document.querySelector("div.container").insertAdjacentHTML("beforeend", 
        `<div class="card-body border-2 rounded-xl "> 
            <h1 class="card-title">${character.name}</h1>
            <h2 class="text-base">${character.gender}</h2>
            <h2 class="text-base">${character.status}</h2>
            <img src="${character.photo}"></img>
        </div>`));
    }
    //this is unique to this API
    // data.data.forEach((agent) => console.log(agent.name))
    } catch (error) {
        alert ("hey i could not find that agent"
        )
    }
};
 getData ();

 //second api: https://stranger-things-api.fly.dev/api/v1/characters/?perPage=40/?gender=Female