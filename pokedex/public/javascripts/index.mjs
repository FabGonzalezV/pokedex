const btnAnterior = document.getElementById("rbleft-botton");
const btnSiguiente = document.getElementById("rbrigth-botton");
const pokedexScreen = document.getElementById("pokedex-screen");
const imagePokemon = document.getElementById("pokemon");
let idPpokemon = 0;
let requestOptions = {
  method: "POST",
  body: JSON.stringify({ _id: `${idPpokemon}` }),
  headers: {
    "Content-Type": "application/json",
  },
};

btnAnterior.addEventListener("click", async () => {
  idPpokemon--;
  if (idPpokemon < 0) {
    idPpokemon = 151;
  }

  requestOptions.body = JSON.stringify({ _id: `${idPpokemon}` });
  await fetch("/pokeapi", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

btnSiguiente.addEventListener("click", async () => {
  idPpokemon++;
  if (idPpokemon > 151) {
    idPpokemon = 1;
  }

  requestOptions.body = JSON.stringify({ _id: `${idPpokemon}` });
  await fetch("/pokeapi", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      imagePokemon.setAttribute("width", "150");
      imagePokemon.src = data;
    })
    .catch((error) => console.log(error));
});
