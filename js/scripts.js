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

{name: "Snorlax", 
identificationNumber: 143,
height: 6.11,
types: ["normal"]},

{name: "Swinub",
identificationNumber: 220,
height: 1.04,
types: ["ice", "ground"]},


{name: "Wingull",
identificationNumber: 278, 
height: 2,
types: ["water", "flying"]},

{name: "Wailord",
identificationNumber: 321,
height: 47.07,
types: ["water"]},

{name: "Klefki",
identificationNumber: 707,
height: 0.08,
types: ["steel", "fairy"]}


];

//basic loop structure for listing pokemon:

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write("<p>" + pokemonList[i].name + " - " + pokemonList[i].height + "</p>");
// }

//adds conditional to basic loop above

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 2 && pokemonList[i].height <= 4) {
        document.write("<li>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a regular sized pokemon. </li>");
    } else if (pokemonList[i].height < 2) {
        document.write("<li>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a tiny pokemon! </li>");
    } else if (pokemonList[i].height > 4 && pokemonList[i].height < 30) {
        document.write("<li>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a big pokemon! </li>");
    } else {
        document.write("<li>" + pokemonList[i].name + ", (height: " + pokemonList[i].height + " feet)" +  " - That's a giant pokemon! </li>");

    }
}