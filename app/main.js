import "./style.css";
async function getData () {
    try {
       //returns a promise
    const response = await fetch ('https://api.potterdb.com/v1/characters'); 
        //gaurd clause
    if(response.status != 200) {
        throw new Error(response);
    } else {
        //converts promise to json
    const data = await response.json();
    console.log(data.data)
    //this is unique to this API
    // data.data.forEach((agent) => console.log(agent.name));
    data.data.forEach((smtg) => document.querySelector("div").insertAdjacentHTML("beforeend", `<h1>${smtg.attributes}</h1>`));
}

    } catch (error) {
        alert ("hey i could not find that agent"
        )
    }
}

getData ();
