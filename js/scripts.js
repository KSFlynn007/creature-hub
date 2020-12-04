let pokemonRepository = (function () {
    let pokemonList = [
        {name: "Vulpix",
        identificationNumber: 037,
        height: 2,
        types: "fire"},

        {name: "Wigglytuff",
        identificationNumber: 040,
        height: 3.03,
        types: ["normal", "fairy"]},

        {name: "Oddish",
        identificationNumber: 043,
        height: 1.08,
        types: ["grass", "poison"]},

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

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };
}) 
();

document.write(pokemonRepository.getAll());
document.write(pokemonRepository.add("<p>Evee</p>"))
document.write(pokemonRepository.getAll());





//forEach Loop:

// pokemonList.forEach(function(pokemon) {
//     if (pokemon.height >= 2 && pokemon.height <= 4) {
//         document.write("<li>" + pokemon.name + ", (height: " + pokemon.height + " feet)" +  " - That's a regular sized pokemon. </li>");
//     } else if (pokemon.height < 2) {
//         document.write("<li>" + pokemon.name + ", (height: " + pokemon.height + " feet)" +  " - That's a tiny sized pokemon! </li>");
//     } else if (pokemon.height > 4 && pokemon.height < 30) {
//         document.write("<li>" + pokemon.name + ", (height: " + pokemon.height + " feet)" +  " - That's a pretty big pokemon. </li>");
//     } else {
//         document.write("<li>" + pokemon.name + ", (height: " + pokemon.height + " feet)" +  " - That's a giant pokemon! </li>");

//     }
// })
