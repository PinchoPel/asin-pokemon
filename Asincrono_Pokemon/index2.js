let randomNumber = Math.floor(Math.random()*151 )+ 1; 

fetch("https://pokeapi.co/api/v2/pokemon-form/" + randomNumber, { 
    method: "GET"
}).then(res => res.json())
.then(pokemon => { 
let image = document.querySelector("img");
let h4 = document.createElement("h4");

h4.textContent = pokemon.name;
image.alt = pokemon.name;
image.src = pokemon.sprites.front_default;
document.body.append(image);
document.body.append(h4);
})
.catch(error => 
    alert("Ha ocurrido un error:" + error.message))