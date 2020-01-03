function Hero(image, top, left, x,y, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.getHeroElement = function(){
    return '<img width="'+ this.x + '"' +
      ' height="'+ this.y + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
  }
  this.moveLeft = function(){
    this.left -= this.speed;
  }
  this.moveUp = function(){
    this.top -= this.speed;
  }
  this.moveDown = function(){
    this.top += this.speed;
  }

}
let inputSpeed = parseInt(prompt(" Nhập Speed "));
let hero = new Hero('darkrai.jpg', 20, 30, 100, 125, inputSpeed );
let marginLeft = hero.left;
let marginRight = window.innerWidth - hero.x;
let marginTop = hero.top;
let marginBottom = window.innerHeight -hero.y;

function moveAround() {
  if(hero.left < marginRight && hero.top <=marginTop){
    hero.moveRight();
  }

  if(hero.top < marginBottom && hero.left >= marginRight){
    hero.moveDown();
  }

  if(hero.left > marginLeft && hero.top >= marginBottom){
    hero.moveLeft();
  }

  if(hero.top > marginTop && hero.left <= marginLeft){
    hero.moveUp();
  }
  
}
function start(){
  moveAround();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  requestAnimationFrame(start);
}

start();