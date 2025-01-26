/* const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerWidth = 50;
let playerHeight = 20;
let playerSpeed = 10;
let playerX;
let playerY;

let fallingObjectWidth = 30;
let fallingObjectHeight = 30;
let fallingObjects = [];
let objectSpeed = 2;
let score = 0;

let rightPressed = false;
let leftPressed = false;

// Ajuste de tamaño del canvas según el tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 1;
    playerWidth = canvas.width / 5;
    playerHeight = canvas.height / 5;
    playerX = (canvas.width - playerWidth) / 2;
    playerY = canvas.height - playerHeight - 0;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();  // Inicializamos el tamaño al cargar

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function createFallingObject() {
    let x = Math.random() * (canvas.width - fallingObjectWidth);
    let type = Math.random() > 0.5 ? "positive" : "negative"; // 50% de chance para bolas positivas o negativas
    let points = 1; // Por defecto, la bola es de 1 punto

    // Determinar tipo de bola
    if (type === "positive") {
        let randomValue = Math.random();
        if (randomValue < 0.2) points = 10;
        else if (randomValue < 0.4) points = 20;
        else if (randomValue < 0.6) points = 30;
    } else { // bolas negativas
        let randomValue = Math.random();
        if (randomValue < 0.2) points = -10;
        else if (randomValue < 0.4) points = -20;
        else if (randomValue < 0.6) points = -30;
    }

    fallingObjects.push({ x: x, y: 0, points: points, type: type });
}

function updatePlayer() {
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    }
    if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
}

function updateFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        fallingObjects[i].y += objectSpeed;

        // Detectar si la bola toca la bolsa
        if (fallingObjects[i].y + fallingObjectHeight > canvas.height) {
            if (fallingObjects[i].x > playerX && fallingObjects[i].x < playerX + playerWidth) {
                // Si el jugador toca la bola, se agrega o resta puntos
                score += fallingObjects[i].points;
            }
            // Eliminar la bola del arreglo y ajustar el índice
            fallingObjects.splice(i, 1);
            i--; // Ajustar índice después de eliminar para evitar errores de desplazamiento
        }
    }
}

let playerImage = new Image();
playerImage.src = 'imgGame/bolsa.png';

playerImage.onload = function() {
    const aspectRatio = playerImage.width / playerImage.height;
    playerHeight = playerWidth / aspectRatio;

    gameStart(); // Iniciar el juego después de que la imagen se haya cargado
};

function drawPlayer() {
    ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);
}

let bolademenos10pts = new Image();
bolademenos10pts.src = "imgGame/bolaMal01.png";

let bolademenos20pts = new Image();
bolademenos20pts.src = "imgGame/bolaMal03.png";

let bolademenos30pts =  new Image();
bolademenos30pts.src = "imgGame/bolaMal04.png";

let bolademas1pts =  new Image();
bolademas1pts.src = "imgGame/bolaOK01.png";

let bolademas10pts =  new Image();
bolademas10pts.src = "imgGame/bolaOK02.png";

let bolademas20pts =  new Image();
bolademas20pts.src = "imgGame/bolaOK03.png";

let bolademas30pts =  new Image();
bolademas30pts.src = "imgGame/bolaOK04.png";

// Dibuja las bolas dependiendo del tipo
function drawFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        let ball = fallingObjects[i];

        if (ball.type === "positive") {
            // Dibujar bola positiva (verde)
            switch (ball.points) {
                case 10:
                    ctx.drawImage(bolademas10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 20:
                    ctx.drawImage(bolademas20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 30:
                    ctx.drawImage(bolademas30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                default:
                    ctx.drawImage(bolademas1pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        } else { // bolas negativas (rojo)
            switch (ball.points) {
                case -10:
                    ctx.drawImage(bolademenos10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -20:
                    ctx.drawImage(bolademenos20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -30:
                    ctx.drawImage(bolademenos30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Puntaje: " + score, 8, 20);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    updateFallingObjects();
    drawPlayer();
    drawFallingObjects();
    drawScore();

    requestAnimationFrame(gameLoop);
}

function gameStart() {
    setInterval(createFallingObject, 1000); // Crear objeto cada segundo
    gameLoop(); // Iniciar ciclo de juego
}
 */

/* 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerWidth = 50;
let playerHeight = 20;
let playerSpeed = 10;
let playerX;
let playerY;

let fallingObjectWidth = 60;
let fallingObjectHeight = 60;
let fallingObjects = [];
let objectSpeed = 2;
let score = 0;

let rightPressed = false;
let leftPressed = false;

// Ajuste de tamaño del canvas según el tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 1;
    playerWidth = canvas.width / 5;
    playerHeight = canvas.height / 5;
    playerX = (canvas.width - playerWidth) / 2;
    playerY = canvas.height - playerHeight - 0;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();  // Inicializamos el tamaño al cargar

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function createFallingObject() {
    let x = Math.random() * (canvas.width - fallingObjectWidth);
    let type = Math.random() > 0.5 ? "positive" : "negative"; // 50% de chance para bolas positivas o negativas
    let points = 1; // Por defecto, la bola es de 1 punto

    // Determinar tipo de bola
    if (type === "positive") {
        let randomValue = Math.random();
        if (randomValue < 0.2) points = 10;
        else if (randomValue < 0.4) points = 20;
        else if (randomValue < 0.6) points = 30;
    } else { // bolas negativas
        let randomValue = Math.random();
        if (randomValue < 0.2) points = -10;
        else if (randomValue < 0.4) points = -20;
        else if (randomValue < 0.6) points = -30;
    }

    fallingObjects.push({ x: x, y: 0, points: points, type: type });
}

function updatePlayer() {
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    }
    if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
}

function updateFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        fallingObjects[i].y += objectSpeed;

        // Detectar si la bola toca la bolsa (jugador)
        if (fallingObjects[i].y + fallingObjectHeight >= playerY && 
            fallingObjects[i].x + fallingObjectWidth > playerX && 
            fallingObjects[i].x < playerX + playerWidth) {
            
            // Si la bola toca la bolsa, se agrega o resta puntos
            score += fallingObjects[i].points;
            
            // Eliminar la bola del arreglo
            fallingObjects.splice(i, 1);
            i--; // Ajustar el índice después de la eliminación para evitar errores de desplazamiento
        }
        
        // Si la bola llega al fondo sin tocar la bolsa, se elimina
        else if (fallingObjects[i].y + fallingObjectHeight > canvas.height) {
            fallingObjects.splice(i, 1);
            i--; // Ajustar el índice después de la eliminación para evitar errores de desplazamiento
        }
    }
}

let playerImage = new Image();
playerImage.src = 'imgGame/bolsa.png';

playerImage.onload = function() {
    const aspectRatio = playerImage.width / playerImage.height;
    playerHeight = playerWidth / aspectRatio;

    gameStart(); // Iniciar el juego después de que la imagen se haya cargado
};

function drawPlayer() {
    ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);
}

let bolademenos10pts = new Image();
bolademenos10pts.src = "imgGame/bolaMal01.png";

let bolademenos20pts = new Image();
bolademenos20pts.src = "imgGame/bolaMal03.png";

let bolademenos30pts =  new Image();
bolademenos30pts.src = "imgGame/bolaMal04.png";

let bolademas1pts =  new Image();
bolademas1pts.src = "imgGame/bolaOK01.png";

let bolademas10pts =  new Image();
bolademas10pts.src = "imgGame/bolaOK02.png";

let bolademas20pts =  new Image();
bolademas20pts.src = "imgGame/bolaOK03.png";

let bolademas30pts =  new Image();
bolademas30pts.src = "imgGame/bolaOK04.png";

// Dibuja las bolas dependiendo del tipo
function drawFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        let ball = fallingObjects[i];

        if (ball.type === "positive") {
            // Dibujar bola positiva (verde)
            switch (ball.points) {
                case 10:
                    ctx.drawImage(bolademas10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 20:
                    ctx.drawImage(bolademas20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 30:
                    ctx.drawImage(bolademas30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                default:
                    ctx.drawImage(bolademas1pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        } else { // bolas negativas (rojo)
            switch (ball.points) {
                case -10:
                    ctx.drawImage(bolademenos10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -20:
                    ctx.drawImage(bolademenos20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -30:
                    ctx.drawImage(bolademenos30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        }
    }
}

function drawScore() {
    ctx.font = " Verdana";
    ctx.fillStyle = "#FFCD00";
    ctx.fillText("Puntaje: " + score, 8, 20);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    updateFallingObjects();
    drawPlayer();
    drawFallingObjects();
    drawScore();

    requestAnimationFrame(gameLoop);
}

function gameStart() {
    setInterval(createFallingObject, 1000); // Crear objeto cada segundo
    gameLoop(); // Iniciar ciclo de juego
}
 */


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerWidth = 50;
let playerHeight = 20;
let playerSpeed = 10;
let playerX;
let playerY;

let fallingObjectWidth = 60;
let fallingObjectHeight = 60;
let fallingObjects = [];
let objectSpeed = 2;
let score = 0;

let rightPressed = false;
let leftPressed = false;
let gameTime = 30; // 30 segundos de duración del juego
let timerInterval;
let gameOver = false;

// Ajuste de tamaño del canvas según el tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 1;
    playerWidth = canvas.width / 5;
    playerHeight = canvas.height / 5;
    playerX = (canvas.width - playerWidth) / 2;
    playerY = canvas.height - playerHeight - 0;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();  // Inicializamos el tamaño al cargar

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}



// Agregar los event listeners para el touch
document.addEventListener("touchstart", touchStartHandler, false);
document.addEventListener("touchend", touchEndHandler, false);
document.addEventListener("touchmove", touchMoveHandler, false);

// Variables para almacenar las posiciones táctiles
let startX = 0;
let touchMoveX = 0;

function touchStartHandler(e) {
    // Guardar la posición inicial del toque
    startX = e.touches[0].clientX;
}

function touchEndHandler(e) {
    // Cuando el toque termina, se resetean las direcciones
    rightPressed = false;
    leftPressed = false;
}

function touchMoveHandler(e) {
    // Detectar el movimiento del toque
    touchMoveX = e.touches[0].clientX;

    // Si el toque se mueve a la derecha
    if (touchMoveX > startX + 30) { // 30px para evitar el "ruido" de pequeños movimientos
        rightPressed = true;
        leftPressed = false;
    }
    // Si el toque se mueve a la izquierda
    else if (touchMoveX < startX - 30) {
        leftPressed = true;
        rightPressed = false;
    } else {
        // Si el toque está centrado, desactivamos ambos
        rightPressed = false;
        leftPressed = false;
    }
}




function createFallingObject() {
    let x = Math.random() * (canvas.width - fallingObjectWidth);
    let type = Math.random() > 0.5 ? "positive" : "negative"; // 50% de chance para bolas positivas o negativas
    let points = 1; // Por defecto, la bola es de 1 punto

    // Determinar tipo de bola
    if (type === "positive") {
        let randomValue = Math.random();
        if (randomValue < 0.2) points = 10;
        else if (randomValue < 0.4) points = 20;
        else if (randomValue < 0.6) points = 30;
    } else { // bolas negativas
        let randomValue = Math.random();
        if (randomValue < 0.2) points = -10;
        else if (randomValue < 0.4) points = -20;
        else if (randomValue < 0.6) points = -30;
    }

    fallingObjects.push({ x: x, y: 0, points: points, type: type });
}

function updatePlayer() {
    if (rightPressed && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    }
    if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
}

function updateFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        fallingObjects[i].y += objectSpeed;

        // Detectar si la bola toca la bolsa (jugador)
        if (fallingObjects[i].y + fallingObjectHeight >= playerY && 
            fallingObjects[i].x + fallingObjectWidth > playerX && 
            fallingObjects[i].x < playerX + playerWidth) {
            
            // Si la bola toca la bolsa, se agrega o resta puntos
            score += fallingObjects[i].points;
            
            // Eliminar la bola del arreglo
            fallingObjects.splice(i, 1);
            i--; // Ajustar el índice después de la eliminación para evitar errores de desplazamiento
        }
        
        // Si la bola llega al fondo sin tocar la bolsa, se elimina
        else if (fallingObjects[i].y + fallingObjectHeight > canvas.height) {
            fallingObjects.splice(i, 1);
            i--; // Ajustar el índice después de la eliminación para evitar errores de desplazamiento
        }
    }
}

let playerImage = new Image();
playerImage.src = 'imgGame/bolsa.png';

playerImage.onload = function() {
    const aspectRatio = playerImage.width / playerImage.height;
    playerHeight = playerWidth / aspectRatio;

    gameStart(); // Iniciar el juego después de que la imagen se haya cargado
};

function drawPlayer() {
    ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);
}

let bolademenos10pts = new Image();
bolademenos10pts.src = "imgGame/bolaMal01.png";

let bolademenos20pts = new Image();
bolademenos20pts.src = "imgGame/bolaMal03.png";

let bolademenos30pts =  new Image();
bolademenos30pts.src = "imgGame/bolaMal04.png";

let bolademas1pts =  new Image();
bolademas1pts.src = "imgGame/bolaOK01.png";

let bolademas10pts =  new Image();
bolademas10pts.src = "imgGame/bolaOK02.png";

let bolademas20pts =  new Image();
bolademas20pts.src = "imgGame/bolaOK03.png";

let bolademas30pts =  new Image();
bolademas30pts.src = "imgGame/bolaOK04.png";

// Dibuja las bolas dependiendo del tipo
function drawFallingObjects() {
    for (let i = 0; i < fallingObjects.length; i++) {
        let ball = fallingObjects[i];

        if (ball.type === "positive") {
            // Dibujar bola positiva (verde)
            switch (ball.points) {
                case 10:
                    ctx.drawImage(bolademas10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 20:
                    ctx.drawImage(bolademas20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case 30:
                    ctx.drawImage(bolademas30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                default:
                    ctx.drawImage(bolademas1pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        } else { // bolas negativas (rojo)
            switch (ball.points) {
                case -10:
                    ctx.drawImage(bolademenos10pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -20:
                    ctx.drawImage(bolademenos20pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
                case -30:
                    ctx.drawImage(bolademenos30pts, ball.x, ball.y, fallingObjectWidth, fallingObjectHeight);
                    break;
            }
        }
    }
}

function drawScore() {
    document.querySelector('.puntuaje').textContent = "Puntaje: " + score; // Actualizar el puntaje
    ctx.font = " Verdana";
    ctx.fillStyle = "#FFCD00";
     /* ctx.fillText("Puntaje: " + score, 8, 20);  */
}

function drawTimer() {
    document.querySelector('.timer').textContent = "Tiempo: " +gameTime; // Actualizar el tiempo
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    /* ctx.fillText("Tiempo: " + gameTime, canvas.width - 100, 20);  */
}

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer();
    updateFallingObjects();
    drawPlayer();
    drawFallingObjects();
    drawScore();
    drawTimer();

    requestAnimationFrame(gameLoop);
}

function gameStart() {
    setInterval(createFallingObject, 1000); // Crear objeto cada segundo
    startTimer();
    gameLoop(); // Iniciar ciclo de juego
}

function startTimer() {
    timerInterval = setInterval(() => {
        gameTime--;
        if (gameTime <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameOver = true;
    clearInterval(timerInterval);

    if (score >= 200) {
        window.location.href = "juego08.html"; // Redirigir a la página de victoria
    } else {
        window.location.href = "juego10.html"; // Redirigir a la página de derrota
    }
}
