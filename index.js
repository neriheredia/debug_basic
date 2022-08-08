const carta = "bici coche balón _playstation bici  coche   peluche";

function listGifts(letter) {
  const arrCarta = letter.split(" ");
  return arrCarta
    .filter((regalo) => {
      let value = regalo.startsWith("_");
      if (value !== true && regalo !== "") return regalo !== value;
    })
    .reduce((contador, regalo) => {
      contador[regalo] = (contador[regalo] || 0) + 1;
      return contador;
    }, {});
}

console.log(listGifts(carta));
