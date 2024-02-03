/* Recebendo oque está dentro do input */
const searchInput = document.getElementById("search-input")

/* Vai receber a parte que está mostrando os cards */
const resultsArtist = document.getElementById("result-artist")

/* Constante usada para manipular quando as playlist irão ser ocultadas */
const resultPlaylist = document.getElementById("result-playlists")

/* Consumindo a API */
function requestApi(searchTerm) {
    /* Usado para fazer requisições de API */
    const url = 'http://localhost:3000/artists?name_like=${searchTerm}'
    fetch(url)
        /* Metodo usado para escutar a URL e responder */
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

/* Para quando algo for digitado, aparecer as informações do que foi pesquisado */
function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });
    resultsArtist.classList.remove('hidden');
}


/* Esta escutando os "eventos", para quando esta ação acontecer,
irá acontece esta lógica*/
document.addEventListener("input", function() {
    /* Aqui dentro é onde estára a função do input 
    - toLoweCase deixa tudo minúsculo*/
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add("hidden");
        resultsArtist.classList.remove("hidden");
        return;
    }
    requestApi(searchTerm);
});