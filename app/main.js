import "./style.css";
async function getData () {
    try {
       //returns a promise
    const response = await fetch ('https://gsi.fly.dev/characters'); 
        //gaurd clause
        // https://api.potterdb.com/v1/characters
    if(response.status != 200) {
        throw new Error(response);
    } else {
        //converts promise to json
    const data = await response.json();
    console.log(data.results);
    //this is unique to this API
    // data.data.forEach((agent) => console.log(agent.name));
    data.results.forEach((result) => document.querySelector("div").insertAdjacentHTML("beforeend,", `<h1>${result.name}</h1>`));
}

    } catch (error) {
        alert ("hey i could not find that agent"
        )
    }
}

getData ();
