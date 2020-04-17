(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.

    async findNames(n) {
      let array = [];

       let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
                        .then(
                          // put methods here for map
                         response => response.json()
                        ).then((json) => {
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

    async findUnderWeight(weight) {
      let array = [];
      
      let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
                        .then(
                          // put methods here for map
                          response => response.json()
                        ).then((json) => {
                          for(let key in json) {
                            if(key === "results") {
                              // json[key].map((pokemonObject)=>{
                              // if (array.length===4){
                              //     return array;
                              //   }
                              // if (pokemonObject["weight"]< weight){
                              //     array.push(pokemonObject["name"])
                              //   }
                              // })
                              //
                              // USE .filter() ! ! ! ! ! 
                              // hey Tam! Here's what I wrote out below. I can't run the tests unfortunately. I hope it works!!!
                              json[key].filter((pokemonObject)=>{
                                console.log(pokemonObject);
                                if(array.length===4){
                                  return array;
                                }

                               console.log(pokemonObject["url"]);

                                fetch(pokemonObject["url"]).then(
                                 (pokemon) => {
                                   console.log(pokemon);
                                 } 
                                )

                                // if (pokemonObject["weight"]<weight){
                                //   array.push(pokemonObject["name"]);
                                // }
                              })
                            }
                          }
                        }).catch(err => console.log(err));
      
      return array;
    }
  }

  window.Pokemonager = Pokemonager;
})();


/*

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });

*/

/*

{
  "id": 12,
  "name": "butterfree",
  "base_experience": 178,
  "height": 11,
  "is_default": true,
  "order": 16,
  "weight": 320,
  "abilities": [
    {
      "is_hidden": true,
      "slot": 3,
      "ability": {
        "name": "tinted-lens",
        "url": "https://pokeapi.co/api/v2/ability/110/"
      }
    }
  ],
  "forms": [
    {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon-form/12/"
    }
  ],
  "game_indices": [
    {
      "game_index": 12,
      "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
      }
    }
  ],
  "held_items": [
    {
      "item": {
        "name": "silver-powder",
        "url": "https://pokeapi.co/api/v2/item/199/"
      },
      "version_details": [
        {
          "rarity": 5,
          "version": {
            "name": "y",
            "url": "https://pokeapi.co/api/v2/version/24/"
          }
        }
      ]
    }
  ],
  "location_area_encounters": [
    {
      "location_area": {
        "name": "kanto-route-2-south-towards-viridian-city",
        "url": "https://pokeapi.co/api/v2/location-area/296/"
      },
      "version_details": [
        {
          "max_chance": 10,
          "encounter_details": [
            {
              "min_level": 7,
              "max_level": 7,
              "condition_values": [
                {
                  "name": "time-morning",
                  "url": "https://pokeapi.co/api/v2/encounter-condition-value/3/"
                }
              ],
              "chance": 5,
              "method": {
                "name": "walk",
                "url": "https://pokeapi.co/api/v2/encounter-method/1/"
              }
            }
          ],
          "version": {
            "name": "heartgold",
            "url": "https://pokeapi.co/api/v2/version/15/"
          }
        }
      ]
    }
  ],
  "moves": [
    {
      "move": {
        "name": "flash",
        "url": "https://pokeapi.co/api/v2/move/148/"
      },
      "version_group_details": [
        {
          "level_learned_at": 0,
          "version_group": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/"
          },
          "move_learn_method": {
            "name": "machine",
            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
          }
        }
      ]
    }
  ],
  "species": {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon-species/12/"
  },
  "sprites": {
    "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
    "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
    "back_default": "http://pokeapi.co/media/sprites/pokemon/back/12.png",
    "front_female": "http://pokeapi.co/media/sprites/pokemon/female/12.png",
    "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
    "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
    "front_default": "http://pokeapi.co/media/sprites/pokemon/12.png",
    "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/12.png"
  },
  "stats": [
    {
      "base_stat": 70,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ]
}
*/