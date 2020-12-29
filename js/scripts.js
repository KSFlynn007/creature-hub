let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        // !Array.isArray is added because "typeof" will return "object" for arrays
        if (typeof pokemon === 'object' && !Array.isArray(pokemon)) {
        pokemonList.push(pokemon);
    } else {
        console.log('New pokemon entry not correct.');
    }}

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn')
        button.classList.add('btn-secondary')
        $('.btn').attr('data-toggle','modal');
        $('.btn').attr('data-target', '#pokemonModalCenter');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);


        //eventListener for clicking each pokemon box on DOM
        buttonListener(button, pokemon);
    }

    //event listener method 
    function buttonListener(button, pokemon) {     
        button.addEventListener('click', function (){
            showDetails(pokemon)
        })
    }

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
    }

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
            item.types = details.types.map(type => type.type.name).join(', ');
        }).catch(function (e){
            console.log(e);
        });
    }

    function showModal(item) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalTitle.empty();
        modalBody.empty();

        // content inside modal window
        let modalName = $('<h1>' + item.name + '</h1>');
        let modalIdNumber = $('<p>Identification Number: ' + item.identificationNumber + '</p>');
        let modalHeight = $('<p>Height: ' + item.height + '&apos;</p>');
        let modalTypes = $('<p>Types: ' + item.types + '</p>');

        //modal images
        let modalImg = $('<img alt="pokemon-img-front" class="modal-img">');
        modalImg.attr('src', item.imgUrl);

        let modalImgBack = $('<img alt="pokemon-img-back" class="modal-img">');
        modalImgBack.attr('src', item.imgUrlBack);

        modalTitle.append(modalName);
        modalBody.append(modalIdNumber);
        modalBody.append(modalHeight);
        modalBody.append(modalTypes);
        modalBody.append(modalImg);
        modalBody.append(modalImgBack);
  }

    ///shows pokemon details in log console
    function showDetails(pokemon){  
        pokemonRepository.loadDetails(pokemon).then(function(){
            showModal(pokemon);
        });  
    }
    
    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showModal,
        showDetails
    };
    
})();

pokemonRepository.loadList().then(function(){
///function below accesses the array list from the empty function, a .getAll function expects a callback function
    pokemonRepository.getAll().forEach(function(pokemon) {
        ///function below creates button for each object in pokemon-list array
        pokemonRepository.addListItem(pokemon);
        /// function below allows to access ShowDetails function, which logs pokemon-list object in console.log when clicked
})
});

