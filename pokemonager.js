(() => {
  class Pokemonager {

    async findNames(n) {
      let array = [];

      await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
                        .then(response => response.json())
                        .then((json) => {
                          for(let key in json) {
                            if(key === "results") {
                              json[key].map((pokemonObject)=>{
                              if (array.length===n){
                                  return array;
                              }
                                array.push(pokemonObject["name"])
                              })
                            }
                          }
                        }).catch(err => console.log(err));
      return array;
    }

    findUnderWeight(weight) {
      let arrayURL = [];
      
      return fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
                     .then(response => response.json())
                     .then((json) => {
                       for(let key in json) {
                         if(key === "results") {
                           json[key].map((pokemonObject)=>{
                             arrayURL.push(pokemonObject["url"]);
                           })
                         }
                       }
                       return arrayURL;
                     })
                     .then((pokemonURL) => {
                       return Promise.all(pokemonURL.map((url) => fetch(url)));
                     })
                     .then((pokemonObjects) => {
                      return Promise.all(
                        pokemonObjects.map((pokemonObject) => pokemonObject.json())
                      );
                     })
                     .then((pokemon) => {
                       return pokemon.filter((singlePokemon) => singlePokemon["weight"] < weight)})
                     .catch(err => console.log(err));
      }
  }

  window.Pokemonager = Pokemonager;
})();