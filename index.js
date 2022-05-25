
let search = document.getElementById('searchBtn').addEventListener('click', (e) => {
    e.preventDefault()
    fetchPokemonData()
})

async function fetchPokemonData(){
    let input = document.getElementById('input-search');
    let pokeImage = document.getElementById('pokemon-image');
    let pokemonName = document.getElementById('pokemon-name');

    input = input.value;
    let pokemonApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    let pokemon = await pokemonApi.json();
    console.log(pokemon.sprites.other.home.front_default);
    console.log(pokemon);
    pokeImage.setAttribute('src', pokemon.sprites.other.home.front_default)
    pokemonName.innerHTML = pokemon.name;




}


