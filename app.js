alert("Olá, tudo bem? Boas vindas ao nosso Site!");
let numeroMaximo = prompt("Informe o maior número do intervalo para adivinhar");
let numeroSecreto = Math.floor(Math.random()* numeroMaximo);
console.log(numeroSecreto);
let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
let tentativas = 1;
while(numeroSecreto != chute){
    alert("Você errou o número secreto!"); 
    if(chute > numeroSecreto){
        alert(`O número secreto é menor do que ${chute}` );
    } else{
        alert(`O número secreto é Maior do que ${chute}` );
    }
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //tentativas = tentativas + 1;
    tentativas++; 
    //console.log('Você acertou o número secreto!')
} 
//Template_String
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);    
