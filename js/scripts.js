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
        if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
    } else {
        console.log("New pokemon entry not correct data type.");
    }}

    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        //eventListener for clicking each pokemon box on DOM
        button.addEventListener('click', function (event) {
            console.log(pokemon);
        });  
    }
    
    ///shows pokemon details in log console
    function showDetails(pokemon){    
        console.log();
    };


    // function buttonListener (button, pokemon) {     
    //     passed variables need to go here
        
    //     button.addEventListener('click', function (event){
    //         console.log(showDetails(button, pokemon));
    //     })
    // };

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        // buttonListener: buttonListener
    };
}) 
();

///function below accesses the array list from the empty function
pokemonRepository.getAll().forEach(function(pokemon) {
    ///function below creates button for each object in pokemon-list array
    pokemonRepository.addListItem(pokemon);
    /// function below allows to access ShowDetails function, which logs pokemon-list object in console.log when clicked
    pokemonRepository.showDetails(pokemon);


    ///function below would allow access to buttonListener function, which is where the event listener code is held
    // pokemonRepository.buttonListener(pokemon);
});

