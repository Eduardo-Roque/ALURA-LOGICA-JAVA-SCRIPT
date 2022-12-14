//<html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400); // limpa o Rect
}

var x = 20;
var sentido = 1;

function atualizaTela() {
    limpaTela();

    if (x > 600) {
        sentido = -1;
    } else if (x < 0) {
        sentido = 1;
    }

    desenhaCirculo(x, 20, 10);
    x = x + sentido;
}

setInterval(atualizaTela, 10); // intervalo de tempo (função, tempo).