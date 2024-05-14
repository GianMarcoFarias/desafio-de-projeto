//Desafio Classificador Nível de Herói DIO - GianMarcoFarias

let nomeHeroi = "Galaxy"
let xp = 12000
let nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (xp < 1000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[0]);
} else if (xp < 2001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[1]);
} else if (xp < 5001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[2]);
} else if (xp < 7001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[3]);
} else if (xp < 8001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[4]);
} else if (xp < 9001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[5]);
} else if (xp < 10001) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[6]);
} else {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi[7]);
}