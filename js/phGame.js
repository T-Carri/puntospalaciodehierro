
var element = document.getElementById('ground04');
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width;
var height = positionInfo.height;
var factor = 1;
console.log("ancho - alto ", width + " - " + height)
if ( width<1200 || height<700 ) {
      var factorW = width/1280;
      var factorH = height/700;
      factor = factorW<factorH?factorW:factorH;
      console.log("ancho - alto ", factorW + " - " + factorH);
}

const canvas = document.querySelector('canvas');
canvas.width = width * factor;
canvas.height = height * factor;
//ctx = canvas.getContext("2d").scale(factor, factor);
ctx = canvas.getContext("2d");
console.log("canvas.width - canvas.height ", canvas.width + " - " + canvas.height);

var background = new Image();
background.src = "imgGame/fondo04.png";

var spriteBolsa = {
      x: 0,
      y: 0,
      width: 198,
      height: 115,
}

var spriteBola = {
      id: 0,
      x: 0,
      y: 0,
      width: 116,
      height: 116,
      tipoBola: 0,
      puntaje: 0,
      tamanio: 116,
}

var bolsaObj = Object.create(spriteBolsa);
bolsaObj.x = (width - 198)/2;
bolsaObj.y = (height - 115);
var Xspeed = 0;
var Yspeed = 0;
var moveLeft = false;
var moveRight = false;

var bolaPos1Obj = Object.create(spriteBola);
bolaPos1Obj.puntaje= 1;

var bolaPos2Obj = Object.create(spriteBola);
bolaPos2Obj.puntaje= 10;

var bolaPos2Obj = Object.create(spriteBola);
bolaPos2Obj.puntaje= 20;

var bolaPos3Obj = Object.create(spriteBola);
bolaPos3Obj.puntaje= 30;

var bolaNeg1Obj = Object.create(spriteBola);
bolaNeg1Obj.puntaje= -10;

var bolaNeg2Obj = Object.create(spriteBola);
bolaNeg2Obj.puntaje= -10;

var bolaNeg2Obj = Object.create(spriteBola);
bolaNeg2Obj.puntaje= -20;

var bolaNeg3Obj = Object.create(spriteBola);
bolaNeg3Obj.puntaje= -30;



var contador = 0;
var contador2 = 0;
var puntaje = 0;
var timer = 30;

var bolsaImg = new Image();
bolsaImg.addEventListener("load", loadHandler, false);
bolsaImg.src = "imgGame/bolsa.png";

var bola1img = new Image();
bola1img.src = "imgGame/bolaOK01.png";

var bola2img = new Image();
bola2img.src = "imgGame/bolaOK02.png";

var bola3img = new Image();
bola3img.src = "imgGame/bolaOK03.png";

var bola4img = new Image();
bola4img.src = "imgGame/bolaOK04.png";

var bola5img = new Image();
bola5img.src = "imgGame/bolaMal01.png";

var bola6img = new Image();
bola6img.src = "imgGame/bolaMal02.png";

var bola7img = new Image();
bola7img.src = "imgGame/bolaMal03.png";

var bola8img = new Image();
bola8img.src = "imgGame/bolaMal04.png";

bolasJuego = [];
bolasArr = [];
tipoBolaTmp = 1;
contBolas = 0;
tamanioTmp=116;
for ( let i=0; i<150; i++ ) {
      bolaTmp = Object.create(spriteBolsa);
      bolaTmp.x = Math.floor(Math.random() * (canvas.width-116));
      bolaTmp.y = 0;
      switch ( contBolas % 6 ) {
            case 0:
            case 4:
                  tipoBolaTmp = 0;
                  break;
            case 2:
                  var num = Math.floor(Math.random()*6);
                  switch ( num ) {
                        case 0:
                        case 2:
                        case 4:
                              tipoBolaTmp = 1;
                              break;
                        case 1:
                        case 3:
                              tipoBolaTmp = 2;
                              break;
                        case 5:
                              tipoBolaTmp = 3;
                              break;
                  }
                  break;
            case 1:
            case 3:
            case 5:
                  tipoBolaTmp = Math.floor(Math.random()*4) + 4;
                  break;
      }
      bolaTmp.tipoBola = tipoBolaTmp;

      bolaTmp.id = ++contBolas;
      bolaTmp.tamanio = tamanioTmp;
      tamanioTmp =  Math.floor(Math.random()*40)+76;
      switch (bolaTmp.tipoBola) {
            case 0:
                  bolaTmp.puntaje=1;
                  break;
            case 1:
                  bolaTmp.puntaje=10;
                  break;
            case 2:
                  bolaTmp.puntaje=20;
                  break;
            case 3:
                  bolaTmp.puntaje=30;
                  break;
            case 4:
                  bolaTmp.puntaje=-10;
                  break;
            case 5:
                  bolaTmp.puntaje=-10;
                  break;
            case 6:
                  bolaTmp.puntaje=-20;
                  break;
            case 7:
                  bolaTmp.puntaje=-30;
                  break;
      }
      bolasArr.push(bolaTmp);
}
console.log("bola1img:", bola1img);
console.log("bolasArr:", bolasArr);


background.onload = function(){
      render();
}

function render() {
//      console.log("renderbolsaObj:", bolsaObj);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(background,0,0);
      ctx.font="32px Verdana";
      ctx.fillStyle = "#FFCD00";
      ctx.fillText("Puntos: " + puntaje, 1000, 55);
//      ctx.fillText("Bolas: " + contador, 550, 55);
//      ctx.fillText("Contador: " + contador2, 550, 100);
      ctx.fillText("Tiempo: " + timer, 70, 55);
      for ( let i=bolasJuego.length-1; i>=0; i--) {
            bolasJuego[i].y += 9;
            if ( bolasJuego[i].y > height+bolasJuego[i].height ) {
                  bolasJuego.splice(i, 1);
                  continue;
            }
            if ( (bolasJuego[i].y+bolasJuego[i].tamanio > height-bolsaObj.height) && (bolasJuego[i].y < height) &&
                  (bolasJuego[i].x+bolasJuego[i].tamanio > bolsaObj.x) && (bolasJuego[i].x < bolsaObj.x+bolsaObj.width) ) {
/*
console.log("id:", bolasJuego[i].id, bolasJuego[i].puntaje, bolasJuego[i].tamanio);
console.log("bolasJuego[i].y+bolasJuego[i].height > height-bolsaObj.height:", bolasJuego[i].y+bolasJuego[i].tamanio, height-bolsaObj.height);
console.log("bolabolasJuego[i].y < height:", bolasJuego[i].y, height);
console.log("bolasJuego[i].x+bolasJuego[i].width > bolsaObj.x:", bolasJuego[i].x+bolasJuego[i].tamanio, bolsaObj.x);
console.log("bolasJuego[i].x < bolsaObj.x+bolsaObj.width:", bolasJuego[i].x, bolsaObj.x+bolsaObj.width);
*/
                  puntaje += bolasJuego[i].puntaje;
                  contador++;
                  bolasJuego.splice(i, 1);;
            } else {
                  switch (bolasJuego[i].tipoBola) {
                        case 0:
                              ctx.drawImage(bola1img, bolasJuego[i].x, bolasJuego[i].y, bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 1:
                              ctx.drawImage(bola2img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 2:
                              ctx.drawImage(bola3img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 3:
                              ctx.drawImage(bola4img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 4:
                              ctx.drawImage(bola5img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 5:
                              ctx.drawImage(bola6img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 6:
                              ctx.drawImage(bola7img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;
                        case 7:
                              ctx.drawImage(bola8img, bolasJuego[i].x, bolasJuego[i].y,  bolasJuego[i].tamanio, bolasJuego[i].tamanio);
                              break;      
                  }      
            }
      }
      ctx.drawImage(bolsaImg, bolsaObj.x, bolsaObj.y, 198, 115);
}

window.addEventListener("keydown", function(e) {
//      console.log("keydown key:", e.key);
//      console.log("keydown Xspeed:", Xspeed);
//      console.log("keydown Yspeed:", Yspeed);

      switch(e.key) {
            case "ArrowLeft":
            case "a":
            case "A":
                  moveLeft = true;
                  break;
            case "ArrowRight":
            case "d":
            case "D":
                  moveRight = true;
                  break;
      }
}, false);

window.addEventListener("keyup", function(e) {
//      console.log("keyup key:", e.key);
//      console.log("keyup Xspeed:", Xspeed);
//      console.log("keyup Yspeed:", Yspeed);

      switch(e.key) {
            case "ArrowLeft":
            case "a":
            case "A":
                  moveLeft = false;
                  break;
            case "ArrowRight":
             case "d":
            case "D":
                  moveRight = false;
                  break;
      }
}, false);

function loadHandler() {
      update();
}

function update() {
//      console.log("update bolsaObj:", bolsaObj);

      window.requestAnimationFrame(update, canvas);
      bolsaObj.x += Xspeed;
      bolsaObj.y += Yspeed;
      if ( moveLeft && !moveRight ) {
            Xspeed = -10;
      }
      if ( moveRight && !moveLeft ) {
            Xspeed = 10;
      }
      if ( !moveRight && !moveLeft ) {
            Xspeed = 0;
      }
      if ( bolsaObj.x < 0 ) {
            Xspeed = 0;
            bolsaObj.x = 0;
      }
      if ( bolsaObj.x > width-bolsaObj.width ) {
            Xspeed = 0;
            bolsaObj.x = width-bolsaObj.width;
      }
      render();
}

termina = 0;
varTimer = setTimeout(timerFunc, 3000);
function timerFunc() {
      timer--;
      render();
//      console.log("Tiempo: ",timer);
      if ( timer <= 0 ) {
console.log("Contador 1: ", contador);
console.log("puntaje 1: ", puntaje);
console.log("termina 1: ", termina);
            clearTimeout(varTimer);
            clearTimeout(varBolas);
            termina++;
            if ( termina == 2 ) {
                  setTimeout(redirige, 4000);   
            }

      } else {
            setTimeout(timerFunc, 1000);
      }
}

IntervaloBolas = 1000;
varBolas = setTimeout(bolasFunc, 3000);
function bolasFunc() {
      bolasJuego.push(bolasArr[contador2]);
      contador2++;
//      console.log("bolasFunc IntervaloBolas", contador2, IntervaloBolas);
      if ( IntervaloBolas > 250 ) {
            IntervaloBolas -=40;
      }
      render();
//      console.log("Tiempo: ",timer);
      if ( timer <= 0 ) {
console.log("Contador 2: ", contador2);
console.log("puntaje 2: ", puntaje);
console.log("termina 2: ", termina);
            clearTimeout(varBolas);
            clearTimeout(varTimer);
            termina++;
            if ( termina == 2 ) {
                  setTimeout(redirige, 4000);
            }
      } else {
            setTimeout(bolasFunc, IntervaloBolas);
      }
}

function redirige() {
      clearTimeout(redirige);
      if ( puntaje  < 200 ) {
            window.location.href = "juego10.html";
      } else {
            window.location.href = "juego08.html";
      }      
}






