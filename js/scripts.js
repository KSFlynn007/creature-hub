let pokemonList = [
{name: "Vulpix",
identificationNumber: 037,
height: 2,
types: "fire"
},

{name: "Wigglytuff",
identificationNumber: 040,
height: 3.03,
types: ["normal", "fairy"]
},

{name: "Oddish",
identificationNumber: 043,
height: 1.08,
types: ["grass", "poison"],
weakness: []},

{name: "Wingull",
identificationNumber: 278, 
height: 2,
types: ["water", "flying"]},

{name: "Swinub",
identificationNumber: 220,
height: 1.04,
types: ["ice", "ground"]}

];

//basic loop structure for list 

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + pokemonList[i].name + " - " + pokemonList[i].height + "</p>");
// }

//adds conditional to basic loop above

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 2 && pokemonList[i].height <= 3) {
        document.write("<p>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a regular sized pokemon. </p>");
    } else if (pokemonList[i].height < 2) {
        document.write("<p>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a tiny pokemon! </p>");
    } else {
        document.write("<p>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's pretty big pokemon! </p>");

    }
}