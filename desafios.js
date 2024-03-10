/**
 * Criar uma função que exibe "Olá, mundo!" no console. 
 */

function exibeMensagem() {
   console.log("Olá, mundo!");
}

exibeMensagem();

/**
 * Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. 
 */

function exibeNome(nome) {
   console.log(`Olá, ${nome}!`);
}

exibeNome("Rafael");
/**
 * Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
 */

function dobraNumero(numero) {
   return numero * 2;
}

let dobrando = dobraNumero(10);
console.log("O valor dobrado equivale a: " + dobrando)

/**
 * Criar uma função que recebe três números como parâmetros e retorna a média deles.
 */

function calcularMedia(numero1, numero2, numero3) {
   return (numero1 + numero2 + numero3) / 3;
}

let numero1 = 10;
let numero2 = 20;
let numero3 = 30;

let media = calcularMedia(numero1, numero2, numero3);
console.log("A média dos números é: " + media);

/**
 * Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
 */

function maiorNumero(num1, num2) {
   return num1 > num2 ? num1 : num2;
}

let maior = maiorNumero(35, 60);
console.log("O maior número é o: " + maior);

/**
 * Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
 */

function multiplicacao(number1) {
   return number1 * number1;
}

let retorno = multiplicacao(15);
console.log("O valor do número multiplicado por ele mesmo é: " + retorno);

/**
 * Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
 */

function calcularIMC(altura, peso) {
   return peso / (altura * altura);
}

let mediaIMC = calcularIMC(175, 90 * 10000);
console.log("A sua média de IMC é: " + mediaIMC.toFixed(2));

/**
 * Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
 */

function calcularFatorial(numeroFatorial) {
   let resultado = 1;
   for(i = 2; i <= numeroFatorial; i++) {
      resultado *= i;
   }
   return resultado;   
}

let resultadoFatorial = calcularFatorial(6);
console.log("O resultado do número fatorial passado é: " + resultadoFatorial)

/**
 * Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
 */

function conversaoMoeda(dolar) {
   return dolar;
}

let valorEmDolar = conversaoMoeda(50);
let cotacaoDolar = 4.80;
let conversao =  valorEmDolar * cotacaoDolar;
console.log("O valor convertido de dólar para real é de: R$" + conversao);

/**
 * Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
 */

function perimetroRetangulo(altura, largura) {
   return (altura + largura) * 2;
}

let calcularPerimetro = perimetroRetangulo(10, 4);
console.log("O cálculo de perímetro do retângulo equivale a: " + calcularPerimetro);

/**
 * Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
 */

function AreaCircunferencia(raio) {
   return raio;
}
const PI = 3.14;
let raio = 4.4;
let resultado = PI * raio * raio;

console.log("A área de perímetro do circulo é de: " + resultado.toFixed(2));

/**
 * Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 */

function tabuada(num) {
   for(contador = 5; contador <= 10; contador++) {
      let resultadoTabuada = num * contador;
      console.log(`${num} X ${contador} = ${resultadoTabuada}`)
   }
}

tabuada(10);

/**
 * ARRAYS:
 * Crie uma lista vazia, com o nome listaGenerica.
 */

let listaGenerica = [];

/**
 * ARRAYS:
 * Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
 */

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(linguagensDeProgramacao[3]);

/**
 * ARRAYS:
 * Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
 */

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

/**
 * ARRAYS:
 * Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
 */

let listaDeNomes = ['Pedro', 'Rafael', 'João'];
console.log(listaDeNomes[0]);

/**
 * ARRAYS:
 * Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
 */

let listaNomes = ['Carolina', 'Fernanda', 'Marcela'];
console.log(listaNomes[1]);

/**
 * ARRAYS:
 * Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
 */

let nomes = ['Julia', 'Helena', 'Luiz'];
console.log(nomes[2]);