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
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');

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
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        // for 'exit' button in modal 
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Exit';
        closeButtonElement.addEventListener('click', hideModal);

        //for content inside modal
        let modalName = document.createElement('h1');
        modalName.innerText = `Name: ${title}`;

        let modalIdNumber = document.createElement('p');
        modalIdNumber.innerText = `Identification Number: ${identificationNumber}`;

        let modalHeight = document.createElement('p');
        modalHeight.innerText = `Height: ${height}"`;

        let modalTypes = document.createElement('p');
        modalTypes.innerText = `Types: ${types}`;

        let modalImg = document.createElement('img');
        modalImg.src = `${img}`

        let modalImgBack = document.createElement('img');
        modalImgBack.src = `${imgBack}`


        modal.appendChild(closeButtonElement);
        modal.appendChild(modalName);
        modal.appendChild(modalIdNumber);
        modal.appendChild(modalHeight);
        modal.appendChild(modalTypes);
        modal.appendChild(modalImg);
        modal.appendChild(modalImgBack);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
  }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
  }

  //to close modal via Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
        }
  });
  
  //to close modal via clicking out
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if(target === modalContainer) {
        hideModal();
        }
    });

    ///shows pokemon details in log console
    function showDetails(pokemon){  
        pokemonRepository.loadDetails(pokemon).then(function(){
            showModal(
                pokemon.name, 
                pokemon.identificationNumber, 
                pokemon.height, 
                pokemon.types, 
                pokemon.imgUrl,
                pokemon.imgUrlBack
            );
        });  
    };
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal,
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

