window.addEventListener('load', main, false);
function main(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2-100;
var y = canvas.height-30;
var dx = 0.8;
var dy = -0.8;
var bRadius = 0;
var pHeight = 10;
var pWidth = 0;
var pX = 0;
var pY = 0;
var right = false;
var left = false;
var up = false;
var down = false;
var brRows = 0;
var brColumns = 0;
var brWidth = 0;
var brHeight = 0;
var brPadding = 0;
var brOffsetTop = 0;
var brOffsetLeft = 0;
var score = 0;
var br = [];
var st = 2;
var vp = 0;
var sc1 = 0;
var xx = 0;



function welcome(){
  ctx.fillStyle = "black";
  ctx.font = '20px sans-serif';
  var textString = "Добро пожаловать в игру";
  textWidth = ctx.measureText(textString ).width;
  ctx.fillText(textString , (canvas.width/2) - (textWidth / 2), (canvas.height/2)-20);
  var textString1 = "Управление осуществляется стрелками";
  textWidth1 = ctx.measureText(textString1 ).width;
  ctx.fillText(textString1 , (canvas.width/2) - (textWidth1 / 2), (canvas.height/2));
  var textString2 = "Чтобы начать, выберите уровень сложности";
  textWidth2 = ctx.measureText(textString2 ).width;
  ctx.fillText(textString2 , (canvas.width/2) - (textWidth2 / 2), (canvas.height/2)+20);
}
welcome();

function randomSpeed() {
  xx = Math.random();
  if (xx < 1/4){
    console.log(1);
    dx = 0.8;
    dy = -0.8;
  }
  else if (xx >= 1/4 && xx < 1/2) {
    console.log(2);
    dx = 0.8;
    dy = 0.8;
  }
  else if (xx >= 1/2 && xx < 3/4) {
    console.log(3);
    dx = -0.8;
    dy = -0.8;
  }
  else if (xx >= 3/4) {
    console.log(4);
    dx = -0.8;
    dy = 0.8;
  }
}

b1.onclick = function() {
  music1.play();
  document.getElementById('myCanvas').height = 400;
  document.getElementById('myCanvas').width = 600;
  st = 1;
  sc1 = 19;
  bRadius = 12;
  pWidth = 120;
  brRows = 3;
  brColumns = 6;
  brWidth = 80;
  brHeight = 20;
  brPadding = 10;
  brOffsetTop = 30;
  brOffsetLeft = 30;
  pY = (canvas.height-pHeight);
  pX = (canvas.width-pWidth)/2;
  randomSpeed();
  mainFunction();
  vP = 3;
}

b2.onclick = function() {
  music1.play();
  document.getElementById('myCanvas').height = 400;
  document.getElementById('myCanvas').width = 800;
  st = 2;
  bRadius = 10;
  pWidth = 100;
  brRows = 5;
  brColumns = 10;
  brWidth = 66;
  brHeight = 10;
  brPadding = 8;
  brOffsetTop = 30;
  brOffsetLeft = 30;
  pY = (canvas.height-pHeight);
  pX = (canvas.width-pWidth)/2;
  randomSpeed();
  mainFunction();
  vP = 3;
  sc1 = 35;
}

b3.onclick = function() {
  music1.play();
  document.getElementById('myCanvas').height = 400;
  document.getElementById('myCanvas').width = 800;
  st = 2;
  bRadius = 8;
  pWidth = 100;
  brRows = 10;
  brColumns = 10;
  brWidth = 66;
  brHeight = 10;
  brPadding = 8;
  brOffsetTop = 30;
  brOffsetLeft = 30;
  pY = (canvas.height-pHeight);
  pX = (canvas.width-pWidth)/2;
  randomSpeed();
  mainFunction();
  vP = 3;
  sc1 = 70;
}


function mainFunction() {

y = (canvas.height*4/5+brOffsetTop+brRows*(brPadding+brHeight))/2;
x = canvas.width/2;

for(var c=0; c<brColumns; c++) {
    br[c] = [];
    for(var r=0; r<brRows; r++) {
        br[c][r] = { x: 0, y: 0, status: st };
    }
  }

function drawBr() {
    for(var c=0; c<brColumns; c++) {
        for(var r=0; r<brRows; r++) {
            if(br[c][r].status > 0) {
                var brX = (c*(brWidth+brPadding))+brOffsetLeft;
                var brY = (r*(brHeight+brPadding))+brOffsetTop;
                br[c][r].x = brX;
                br[c][r].y = brY;
                ctx.beginPath();
                ctx.rect(brX, brY, brWidth, brHeight);
                if (br[c][r].status == 2){
                ctx.fillStyle = "red";}
                else {
                  ctx.fillStyle = "green";
              }
                ctx.fill();
                ctx.closePath();
            }
          }
        }
      }

function drawB() {
ctx.beginPath();
ctx.arc(x, y, bRadius, 0, Math.PI*2, false);
if (score < sc1) {
ctx.fillStyle = "green";
}
else {
  ctx.fillStyle = "red";
  if (dy < 0 && dx < 0){
    dy = -1;
    dx = -1;
  }
  else if (dy < 0 && dx > 0) {
    dy = -1;
    dx = 1;
  }
  else if (dy > 0 && dx < 0) {
    dy = 1;
    dx = -1;
  }
  else if (dy > 0 && dx > 0) {
    dy = 1;
    dx = 1;
  }
}

ctx.fill();
ctx.closePath();

if( y + dy < bRadius) {
    dy = -dy;
}

else if(y + dy > pY - pHeight && y + dy < pY){
  if(x > pX && x < pX + pWidth){
    dy = -dy;
  }
}

if(x + dx > canvas.width - bRadius || x + dx < bRadius) {
    dx = -dx;
}

if(y+dy > canvas.height - bRadius){
  music1.pause();
  music3.play();
  alert("Game Over");
  document.location.reload();
  clearInterval(interval);
  }
}

function drawP() {
    ctx.beginPath();
    ctx.rect(pX, pY, pWidth, pHeight);
    if (score < sc1) {
    ctx.fillStyle = "green";
    }
    else {
      ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
  ctx.fillText ("Score: "+score, 8, 20);
  if (score > sc1){
      ctx.fillStyle = "red";
      vP = 12;
    ctx.fillText ("Rage mod unlocked", 60, 20);
  }
}

function collisionDetection() {
    for(var c=0; c<brColumns; c++) {
        for(var r=0; r<brRows; r++) {
            var b = br[c][r];
            if (b.status > 1) {
              if(x > b.x && x < b.x+brWidth && y > b.y && y < b.y+brHeight) {
                dy = -dy;
                b.status = b.status - 1;
              }
            }
          else  if(b.status == 1) {
                if(x > b.x && x < b.x+brWidth && y > b.y && y < b.y+brHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brRows*brColumns) {
                      music1.pause();
                      music2.play();
                      alert ("You won. Press OK to start new game.");

                        document.location.reload();
                        clearInterval(interval);
                    }
                  }
                }
              }
            }
          }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawB();
  drawP();
  drawBr();
  collisionDetection();
  drawScore();

  if(right) {
    pX += vP;
    if (pWidth + pX > canvas.width) {
      pX = canvas.width - pWidth
    }
  }
else if(left) {
    pX -= vP;
    if (pX < 0) {
      pX = 0
    }
  }
else if(up) {
    pY -= vP;
    if (pY < 4 * canvas.height / 5){
      pY = 4 * canvas.height / 5
    }
  }
else if(down) {
    pY += vP;
    if (pY + pHeight > canvas.height){
      pY = canvas.height - pHeight
    }
  }
  y+=dy;
  x+=dx;
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
  if(e.key == "ArrowRight") {
      right = true;
  }
  else if(e.key == "ArrowLeft") {
      left = true;
  }
  if(e.key == "ArrowUp") {
        up = true;
    }
    else if(e.key == "ArrowDown") {
        down = true;
    }
  }

function keyUp(e) {
    if(e.key == "ArrowRight") {
        right = false;
  }
    else if(e.key == "ArrowLeft") {
        left = false;
    }
    if(e.key == "ArrowDown") {
        down = false;
    }
    else if(e.key == "ArrowUp") {
        up = false;
    }
  }

    var interval = setInterval(draw, 1);
    interval;
  }
}
