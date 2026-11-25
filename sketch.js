'use strict';

// n×n turn-taking on ONE board.
//
// Player 1 plays 'X', player 2 plays 'O'. One grid holds both, so a cell's value
// is the only record of who put it there — a record nothing in this sketch
// reads yet. Reading it is a mechanic, and it gets a chapter of its own.

const BOARD = 420;                     // board side, in pixels
const Dos = '2',Cuatro ='4';
// two players, two marks

let game;                              // the one and only board
let ancho = 13;  //ancho del tablero  
let largo = 15;//largo del tablero
let turn ='';
let contador=0;

function setup() {
  createCanvas(BOARD, BOARD + 40);
  textAlign(CENTER, CENTER);
  newRound();
}

// A fresh board at a fresh size. Nothing else has to change with it.
function newRound() {

  Quadrille.cellLength = BOARD / ancho;    // scale the cells to fit the canvas
  game = createQuadrille(ancho, largo);
}

function draw() {
  background('#faf7f0');
  drawQuadrille(game, { outline: '#cbbf9e', outlineWeight: 2 });
  status();
}

// The board answers the question, so the status line just reads it off.
function status() {
  push();
  noStroke();
  fill('#6b705c');
  textSize(14);
  if (game.order % 3 === 0){
   turn ='player 1 (X)';
  }
  else if((game.order-1) % 3 === 0) {
   turn ='player 2 (O)';
    
  }
  else {
    turn ='player 3 (Y)';
  } 
  
  
    
  pop();

}

function mousePressed() {
  
}



function keyPressed() {
  let direccion;

  if (keyCode === UP_ARROW || key === 'ArrowUp' || key === 'w' || key === 'W') {
    direccion = "UP";
  } else if (keyCode === DOWN_ARROW || key === 'ArrowDown' || key === 's' || key === 'S') {
    direccion = "DOWN";
  } else if (keyCode === LEFT_ARROW || key === 'ArrowLeft' || key === 'a' || key === 'A') {
    direccion = "LEFT";
  } else if (keyCode === RIGHT_ARROW || key === 'ArrowRight' || key === 'd' || key === 'D') {
    direccion = "RIGHT";
  }

  if (direccion) {
    //mover(direccion);
    return false;
  }
}