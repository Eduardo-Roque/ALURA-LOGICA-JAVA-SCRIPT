/* <html>
        <meta charset="UTF-8">
        <canvas width="700" height="500"></canvas>
</html> */

// CRIAR TEXTO NO CANVAS
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.font='20px Georgia';
pincel.fillStyle='black';
pincel.fillText("PALAVRA", 300, 200);

/*-------------------------------------------------------*/    
function desenhaQuadrado(x, y, tamanho, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, tamanho, tamanho);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, tamanho, tamanho);
}

// FUNÇÂO TEXTO NO CANVAS
function desenhaTexto(texto, x , y) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font='20px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    // TEXTO NO CANVAS 
}

desenhaTexto("Qual é a fração?", 50, 30);

var y = 50;
desenhaQuadrado(50, y, 100, 'green');
desenhaQuadrado(150, y, 100, 'green');
desenhaQuadrado(250, y, 100, 'green');
desenhaQuadrado(350, y, 100, 'white');