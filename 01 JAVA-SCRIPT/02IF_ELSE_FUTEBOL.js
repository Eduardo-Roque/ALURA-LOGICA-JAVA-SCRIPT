//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
    
var vitorias = parseInt(prompt("Entre com o número de Vitórias"));
var empates = parseInt(prompt("Entre com o númer de Empates"));

var pontos = (vitorias * 3) + empates;
mostra("Os pontos são: " + pontos + "<br><br>");

// IF-ELSE do Java-Script
if(pontos > 28) {
    mostra("Seu time está melhor do que o ano passado");
} else if(pontos < 29) {
    mostra("Seu time está pior do que o ano passado");
} else if(pontos < 29) {
    mostra("Seu time está igual o ano passado");
}