//<html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var paleta = document.querySelector('input'); // paleta de cor.

var desenha = false;

function desenhaCirculo(evento) {

  if (desenha) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = paleta.value; // sempre pega o valor atual da paleta!

    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14); // círuculo.
    pincel.fill();
  }

  // console.log(x + ',' + y);
}

tela.onmousemove = desenhaCirculo;

// atribuindo diretamente a função anônima
tela.onmousedown = function() {
  desenha = true;
}
  
// atribuindo diretamente a função anônima
tela.onmouseup = function() {
desenha = false;
}