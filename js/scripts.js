let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

    function add(pokemon) {
        if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
    } else {
        console.log('New pokemon entry not correct.');
    }};

    function getAll() {
        return pokemonList;
    };

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn')
        button.classList.add('btn-secondary')

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);


        //eventListener for clicking each pokemon box on DOM
        buttonListener(button, pokemon);
    };

    //event listener method 
    function buttonListener(button, pokemon) {     
        button.addEventListener('click', function (){
            showDetails(pokemon)
        })
    };

    function loadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e){
            console.log(e);
        })
    };

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            //Add details you want displayed to the item
            item.imgUrl= details.sprites.front_default;
            item.imgUrlBack = details.sprites.back_default;
            item.identificationNumber = details.id;
            item.height = details.height;
            //this changes the array into a string to add to the DOM
            item.types = details.types.map(type => type.type.name).join(", ");
        }).catch(function (e){
            console.log(e);
        });
    };

    function showModal(title, identificationNumber, height, types, img, imgBack) {
   let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");

        modalTitle.empty();
        modalBody.empty();

        // content inside modal window
        let modalName = $("<h1>" + item.name + "</h1>");
        let modalIdNumber = $("<p>" + item.identificationNumber + "</p>");
        let modalHeight = $("<p>" + item.height + "</p>");
        let modalTypes = $("<p>" + item.types + "</p>");

        //modal images
        let modalImg = $('<img class="modal-img" style="width:50%">');
        modalImg.attr("src", item.imgUrl);

        let modalImgBack = $('<img class="modal-img" style="width:50%">');
        modalImgBack.attr("src", item.imgUrlBack);

        modalTitle.appendChild(modalName);
        modalBody.appendChild(modalIdNumber);
        modalBody.appendChild(modalHeight);
        modalBody.appendChild(modalTypes);
        modalBody.appendChild(modalImg);
        modalBody.appendChild(modalImgBack);

  }

    ///shows pokemon details in log console
    function showDetails(pokemon){  
        pokemonRepository.loadDetails(pokemon).then(function(){
            // showModal(
            //     pokemon.name, 
            //     pokemon.identificationNumber, 
            //     pokemon.height, 
            //     pokemon.types, 
            //     pokemon.imgUrl,
            //     pokemon.imgUrlBack
            // );
            console.log(pokemon);
        });  
    };
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        showDetails: showDetails
    };

}) 
();

pokemonRepository.loadList().then(function(){
///function below accesses the array list from the empty function, a .getAll function expects a callback function
    pokemonRepository.getAll().forEach(function(pokemon) {
        ///function below creates button for each object in pokemon-list array
        pokemonRepository.addListItem(pokemon);
        /// function below allows to access ShowDetails function, which logs pokemon-list object in console.log when clicked
})
});

