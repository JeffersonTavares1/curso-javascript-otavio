const nome = "Jefferson Tavares";
const sobrenome = "Santos";
const idade = 25;
const peso = 84;
const altura = 1.8;
let imc;
let nascimento;

imc = peso / (altura * altura);
nascimento = 2024 - idade;

console.log(nome, sobrenome, "Seu IMC e ", imc, "Voce nasceu em ", nascimento);
