window.onload = () => {
  const btnAnterior = document.getElementById("rbleft-botton");
  const btnSiguiente = document.getElementById("rbrigth-botton");
  const imagePokemon = document.getElementById("pokemon");
  const namePokemon = document.getElementById("name");
  const music = document.getElementById("music");
  const tecla = document.getElementById("tecla");
  let idPpokemon = 0;

  //configuración para la petición POST
  let requestOptions = {
    method: "POST",
    body: JSON.stringify({ _id: `${idPpokemon}` }), //enviamos el id como parametro
    headers: {
      "Content-Type": "application/json",
    },
  };
  music.volume = 0.2;
  music.play();
  //controles para el btn anterior y siguiente
  btnAnterior.addEventListener("click", async () => {
    tecla.play();
    //contador para el numero de pokemon
    idPpokemon--;
    if (idPpokemon < 0) {
      idPpokemon = 151;
    }
    //establecemos el id como parametro de la petición
    requestOptions.body = JSON.stringify({ _id: `${idPpokemon}` });
    request(requestOptions);
  });

  btnSiguiente.addEventListener("click", async () => {
    tecla.play();
    //contador para el numero de pokemon
    idPpokemon++;
    if (idPpokemon > 151) {
      idPpokemon = 1;
    }
    //establecemos el id como parametro de la petición
    requestOptions.body = JSON.stringify({ _id: `${idPpokemon}` });
    request(requestOptions);
  });

  async function request(requestOptions) {
    await fetch("/pokeapi", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        imagePokemon.setAttribute("width", "150");
        imagePokemon.src = data.imageUrl;
        namePokemon.innerText = data.name;
      })
      .catch((error) => console.log(error));
  }
};
