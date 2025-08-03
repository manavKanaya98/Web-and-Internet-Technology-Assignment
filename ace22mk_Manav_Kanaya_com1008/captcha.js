"use strict";

//functions 

//Function below draws an ellipse.
function drawEllipse(aCol, x, y, radiusX, radiusY, rotation, startAngle, endAngle) {
  context.fillStyle = aCol;
  context.beginPath();
  context.ellipse(x,y, radiusX, radiusY, rotation, startAngle, endAngle);  
  context.fill();
}

//Function below draws a rectangle.
function drawRect(aCol, x, y, width, height) {
  context.fillStyle = aCol;
  context.beginPath();
  context.rect(x, y,width,height);  
  context.fill();
}

//Function below draws an image of a fish.
function drawFish(x,y){
  drawRect("rgb(255,255,255)", x,y,200,200); 
  drawEllipse("rgb(255,145,0)",(x+40),(y+100), 20, 30, 0,0, 2*Math.PI);
  drawEllipse("rgb(255,145,0)", (x+90), (y+70) , 30, 20, 0,0, 2*Math.PI);
  drawEllipse("rgb(255,165,0)", (x+100), (y+100), 60, 40, 0, 0, 2*Math.PI);
  drawEllipse("rgb(0,0,0)", (x+125), (y+96), 6, 6, 0, 0, 2*Math.PI);
  drawEllipse("rgb(255,145,0)",(x+70), (y+110), 25, 20, 0, 0, 2*Math.PI);
}

//Function below draws an image of an elephant.
function drawElephant(x,y){
 drawRect("rgb(255,255,255)", x,y,200,200); 
 drawEllipse("rgb(110,110,110)", (x+50),(y+60), 40, 40, 0,0, 2*Math.PI);
 drawEllipse("rgb(110,110,110)", (x+140) ,(y+60), 40, 40, 0,0, 2*Math.PI);
 drawEllipse("rgb(128,128,128)",(x+90),(y+80), 50, 50, 0,0, 2*Math.PI);
 drawRect("rgb(150,150,150)" , (x+80),(y+80), 20, 80 );
 drawEllipse("rgb(0,0,0)",(x+70),(y+70), 6, 6, 0,0, 2*Math.PI);
 drawEllipse("rgb(0,0,0)",(x+110),(y+70), 6, 6, 0,0, 2*Math.PI);
}
//Function below gets the x and y coordinates of the mouse on the canvas.
function getMouseXY(e){
  let canvas = document.getElementById('canvas1');
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  let w = (boundingRect.width-canvas.width)/2;
  let h = (boundingRect.height-canvas.height)/2;
  offsetX += w;
  offsetY += h;
  let mx = Math.round(e.clientX-offsetX);
  let my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
}

//Function below generates the coordinates to draw 1 elephant and 4 fishes in a random arrangement in the grid.
function getOneElephant(){
  
  let a = [0,200,400,600,800];

    let fish1 = Math.floor(Math.random() * a.length);
      a[fish1];
   

    let fish2 = Math.floor(Math.random() * a.length);

      if (fish2 !== fish1){
        a[fish2];
    } else {
        while (fish2 == fish1){
          fish2 = Math.floor(Math.random() * a.length);}
            a[fish2];}

    let fish3 = Math.floor(Math.random() * a.length);

      if ((fish3 !== fish1) && (fish3 !== fish2)){
        a[fish3];
    } else {
        while ((fish3 == fish1) || (fish3 == fish2)){
          fish3 = Math.floor(Math.random() * a.length);}
            a[fish3]; }

    let fish4 = Math.floor(Math.random() * a.length);

      if ((fish4 !== fish1) && (fish4 !== fish2) && (fish4 !=fish3)){
        a[fish4];
    } else {
          while ((fish4 == fish1) || (fish4 == fish2) || (fish4 == fish3)){
            fish4 = Math.floor(Math.random() * a.length);}
              a[fish4]; }
   
    let elephant1 = Math.floor(Math.random() * a.length);

      if ((elephant1 !== fish1) && (elephant1 !== fish2) && (elephant1 !=fish3)&&(elephant1 != fish4)){
        a[elephant1];
     } else {
          while ((elephant1 == fish1) || (elephant1 == fish2) || (elephant1 == fish3) || (elephant1 == fish4)){
            elephant1 = Math.floor(Math.random() * a.length);}
              a[elephant1]; } 
    //Section below returns array with coordinates so can be used in the drawing functions.
    let b = [a[fish1],a[fish2],a[fish3],a[fish4],a[elephant1]];
    return b;
          
}
//Function below draws in the images for the function 'getOneElephant'.
function drawOneElephant(){
  let b = getOneElephant();
  let fish1 = b[0];
  let fish2 = b[1];
  let fish3 = b[2];
  let fish4 = b[3];

  let elephant1 = b[4];

  drawFish(fish1 , 0);
  drawFish(fish2 , 0);
  drawFish(fish3 , 0);
  drawFish(fish4 , 0);
  drawElephant(elephant1 , 0);
}

//Function below generates the coordinates to draw 2 elephants and 3 fishes in a random arrangement in the grid.
function getTwoElephants(){
  let a = [0,200,400,600,800];

  let fish1 = Math.floor(Math.random() * a.length);
  a[fish1];
   

  let fish2 = Math.floor(Math.random() * a.length);

      if (fish2 !== fish1){
        a[fish2];
    } else {
        while (fish2 == fish1){
          fish2 = Math.floor(Math.random() * a.length);}
            a[fish2]; }

  let fish3 = Math.floor(Math.random() * a.length);

      if ((fish3 !== fish1) && (fish3 !== fish2)){
        a[fish3];
    } else {
        while ((fish3 == fish1) || (fish3 == fish2)){
          fish3 = Math.floor(Math.random() * a.length);}
            a[fish3]; }

  let elephant1 = Math.floor(Math.random() * a.length);

      if ((elephant1 !== fish1) && (elephant1 !== fish2) && (elephant1 !=fish3)){
        a[elephant1];
    } else {
          while ((elephant1 == fish1) || (elephant1 == fish2) || (elephant1 == fish3)){
            elephant1 = Math.floor(Math.random() * a.length);}
              a[elephant1]; } 
   
  let elephant2 = Math.floor(Math.random() * a.length);

      if ((elephant2 !== fish1) && (elephant2 !== fish2) && (elephant2 !=fish3)&&(elephant2 != elephant1)){
        a[elephant2];
    } else {
          while ((elephant2 == fish1) || (elephant2 == fish2) || (elephant2 == fish3) || (elephant2 == elephant1)){
            elephant2 = Math.floor(Math.random() * a.length);}
             a[elephant2]; } 

    //Section below returns array with coordinates so can be used in the drawing functions.
    let b = [a[fish1], a[fish2], a[fish3], a[elephant1], a[elephant2]];
    return b;
}

//Function below draws in the images for the function 'getTwoElephants'.
function drawTwoElephants(){
  let b = getTwoElephants();
  let fish1 = b[0];
  let fish2 = b[1];
  let fish3 = b[2];
  let elephant1 = b[3];
  let elephant2 = b[4];

  drawFish(fish1 , 0);
  drawFish(fish2 , 0);
  drawFish(fish3 , 0);
  drawElephant(elephant1 , 0);
  drawElephant(elephant2 , 0);
}


//Function below generates the coordinates to draw 3 elephants and 2 fishes in a random arrangement in the grid.
function getThreeElephants(){
  let a = [0,200,400,600,800];

    let fish1 = Math.floor(Math.random() * a.length);
      a[fish1];


    let fish2 = Math.floor(Math.random() * a.length);

      if (fish2 !== fish1){
        a[fish2];
    } else {
        while (fish2 == fish1){
          fish2 = Math.floor(Math.random() * a.length);}
            a[fish2]; }

    let elephant1 = Math.floor(Math.random() * a.length);

      if ((elephant1 !== fish1) && (elephant1 !== fish2)){
        a[elephant1];
    } else {
        while ((elephant1 == fish1) || (elephant1 == fish2)){
          elephant1 = Math.floor(Math.random() * a.length);}
            a[elephant1]; }

    let elephant2 = Math.floor(Math.random() * a.length);

      if ((elephant2 !== fish1) && (elephant2 !== fish2) && (elephant2 !=elephant1)){
        a[elephant2];
    } else {
        while ((elephant2 == fish1) || (elephant2 == fish2) || (elephant2 == elephant1)){
          elephant2 = Math.floor(Math.random() * a.length);}
            a[elephant2]; } 

    let elephant3 = Math.floor(Math.random() * a.length);
      if ((elephant3 !== fish1) && (elephant3 !== fish2) && (elephant3 !=elephant1)&&(elephant3 != elephant2)){
        a[elephant3];
    } else {
        while ((elephant3 == fish1) || (elephant3 == fish2) || (elephant3 == elephant1) || (elephant3 == elephant2)){
          elephant3 = Math.floor(Math.random() * a.length);}
            a[elephant3]; } 
             
    let b = [a[fish1],a[fish2],a[elephant1],a[elephant2], a[elephant3]];
    return b;
}

//Function below draws in the images for the function 'getThreeElephants'.
function drawThreeElephants(){
  let b = getThreeElephants();
  let fish1 = b[0];
  let fish2 = b[1];
  let elephant1 = b[2];
  let elephant2 = b[3];
  let elephant3 = b[4];
  drawFish(fish1 , 0);
  drawFish(fish2 , 0);
  drawElephant(elephant1 , 0);
  drawElephant(elephant2 , 0);
  drawElephant(elephant3 , 0);
}


//Function below generates the coordinates to draw 4 elephants and 1 fish in a random arrangement in the grid.
function getFourElephants(){
  let a = [0,200,400,600,800];

    let fish1 = Math.floor(Math.random() * a.length);
      a[fish1];

    let elephant1 = Math.floor(Math.random() * a.length);
      if (elephant1 !== fish1){
        a[elephant1];
    } else {
        while (elephant1 == fish1){
          elephant1 = Math.floor(Math.random() * a.length);}
            a[elephant1]; }

    let elephant2 = Math.floor(Math.random() * a.length);
      if ((elephant2 !== fish1) && (elephant2 !== elephant1)){
        a[elephant2];
    } else {
        while ((elephant2 == fish1) || (elephant2 == elephant1)){
          elephant2 = Math.floor(Math.random() * a.length);}
            a[elephant2]; }

    let elephant3 = Math.floor(Math.random() * a.length);
      if ((elephant3 !== fish1) && (elephant3 !== elephant1) && (elephant3 !=elephant2)){
        a[elephant3];
    } else {
        while ((elephant3 == fish1) || (elephant3 == elephant1) || (elephant3 == elephant2)){
          elephant3 = Math.floor(Math.random() * a.length);}
            a[elephant3]; } 

    let elephant4 = Math.floor(Math.random() * a.length);
      if ((elephant4 !== fish1) && (elephant4 !== elephant1) && (elephant4 != elephant2) && (elephant4 != elephant3)){
        a[elephant4];
    } else {
        while ((elephant4 == fish1) || (elephant4 == elephant1) || (elephant4 == elephant2) || (elephant4 == elephant3)){
          elephant4 = Math.floor(Math.random() * a.length);}
            a[elephant4]; } 

    let b = [a[fish1],a[elephant1], a[elephant2], a[elephant3], a[elephant4]];
    return b;

}

//Function below draws in the images for the function 'getFourElephants'.
function drawFourElephants(){
  let b = getFourElephants();
  let fish1 = b[0];
  let elephant1 = b[1];
  let elephant2 = b[2];
  let elephant3 = b[3];
  let elephant4 = b[4];
  drawFish(fish1 , 0);
  drawElephant(elephant1 , 0);
  drawElephant(elephant2 , 0);
  drawElephant(elephant3 , 0);
  drawElephant(elephant4 , 0);
}

//Function below draws the grid.
function drawGrid(){

// This section prints rectangle with width = 1000 and height = 200.
  context.beginPath();
  
  context.moveTo(0,0);
  context.lineTo(0,200);
  context.stroke();
  
  context.moveTo(1000,0);
  context.lineTo(1000,200);
  context.stroke();
  
  context.moveTo(0,0);
  context.lineTo(1000,0);
  context.stroke();
  
  
  context.moveTo(0,200);
  context.lineTo(1000,200);
  context.stroke();
  
  
//This section prints 4 vertical lines in the middle to separate rectangle into 5 squares.
  
  context.moveTo(200,200);
  context.lineTo(200,0);
  context.stroke();
  
  context.moveTo(400,200);
  context.lineTo(400,0);
  context.stroke();
  
  context.moveTo(600,200);
  context.lineTo(600,0)
  context.stroke();
  
  context.moveTo(800,200);
  context.lineTo(800,0);
  context.stroke();
}

/*This function checks which image the mouse has been clicked on if the function called to draw the image is 'drawOneElephant'
and responds by displaying a 'success' image or a 'fail' image.*/

function checkCoordinates1(evt){
  let pos = getMouseXY(evt);

  let b = getOneElephant();

    let fish1 = b[0];
    let fish2 = b[1];
    let fish3 = b[2];
    let fish4 = b[3];
    let elephant1 = b[4];

    let success1;
    let success2; 
    let success3;
    let success4;

  if (prompt == "Select all the grid cells that contain a fish."){
    if((pos.x >= fish1) && (pos.x <= fish1 + (WIDTH/4))){
      success1 = true;}
    if((pos.x >= fish2) && (pos.x <= fish2 + (WIDTH/4))){
      success2 = true;}
    if((pos.x >= fish3) && (pos.x <= fish3 + (WIDTH/4))){
      success3 = true;}
    if((pos.x >= fish4) && (pos.x <= fish4 + (WIDTH/4))){
      success4 = true;}
    if (success1 || success2 || success3 || success4){
      successCanvas();
    }
    else if ((pos.x >= elephant1) && (pos.x <= elephant1 + (WIDTH/4))){
    failureCanvas();
    }  
  }

  if (prompt == "Select all the grid cells that contain an elephant."){
    if ((pos.x >= elephant1) && (pos.x <= elephant1 + (WIDTH/4))){
      successCanvas();
    }
    else {
      failureCanvas();
    }
  }
}

/*This function checks which image the mouse has been clicked on if the function called to draw the image is 'drawTwoElephants'
and responds by displaying a 'success' image or a 'fail' image.*/

function checkCoordinates2(evt){
  let pos = getMouseXY(evt);
  
  let b = getTwoElephants();
  
    let fish1 = b[0];
    let fish2 = b[1];
    let fish3 = b[2];
    let elephant1 = b[3];
    let elephant2 = b[4];

  let success1;
  let success2; 
  let success3;
  
  if (prompt == "Select all the grid cells that contain a fish."){
    if((pos.x >= fish1) && (pos.x <= fish1 + (WIDTH/4))){
      success1 = true;}
    if((pos.x >= fish2) && (pos.x <= fish2 + (WIDTH/4))){
      success2 = true;}
    if((pos.x >= fish3) && (pos.x <= fish3 + (WIDTH/4))){
      success3 = true;}
    if (success1 || success2 || success3){
      successCanvas();
    }

  else if (((pos.x >= elephant1) || (pos.x <= elephant1 + (WIDTH/4))) || ((pos.x >= elephant2) || (pos.x <= elephant2 + (WIDTH/4)))){
    failureCanvas();
  } 
}
  if (prompt == "Select all the grid cells that contain an elephant."){
    if((pos.x >= elephant1) && (pos.x <= elephant1 + (WIDTH/4))){
        success1 = true;}
    if((pos.x >= elephant2) && (pos.x <= elephant2 + (WIDTH/4))){
        success2 = true;}
    if (success1 || success2){
      successCanvas();
    }
    else {
      failureCanvas();
    }
  }
}

/*This function checks which image the mouse has been clicked on if the function called to draw the image is 'drawThreeElephants'
and responds by displaying a 'success' image or a 'fail' image.*/
function checkCoordinates3(evt){
  let pos = getMouseXY(evt);
  
  let b = getThreeElephants();
    
    let fish1 = b[0];
    let fish2 = b[1];
    let elephant1 = b[2];
    let elephant2 = b[3];
    let elephant3 = b[4];
    
    let success1;
    let success2; 
    let success3;
  
  if (prompt == "Select all the grid cells that contain a fish."){
    if((pos.x >= fish1) && (pos.x <= fish1 + (WIDTH/4))){
      success1 = true;}

    if((pos.x >= fish2) && (pos.x <= fish2 + (WIDTH/4))){
      success2 = true;}
    
    if (success1 || success2){
      successCanvas();
    }
    else if (((pos.x >= elephant1) || (pos.x <= elephant1 + (WIDTH/4))) || ((pos.x >= elephant2) || (pos.x <= elephant2 + (WIDTH/4))||((pos.x >= elephant3) || (pos.x <= elephant3 + (WIDTH/4))))){
      failureCanvas();
    } 
  }

  if (prompt == "Select all the grid cells that contain an elephant."){
    if((pos.x >= elephant1) && (pos.x <= elephant1 + (WIDTH/4))){
      success1 = true;}

    if((pos.x >= elephant2) && (pos.x <= elephant2 + (WIDTH/4))){
      success2 = true;}

    if((pos.x >= elephant3) && (pos.x <= elephant3 + (WIDTH/4))){
      success3 = true;}

    if (success1 || success2 || success3){
      successCanvas();}
  
    else {
    failureCanvas();
    }
  }
}

/*This function checks which image the mouse has been clicked on if the function called to draw the image is 'drawFourElephants'
and responds by displaying a 'success' image or a 'fail' image.*/
function checkCoordinates4(evt){

  let pos = getMouseXY(evt);
      
  let b = getFourElephants();
      
    let fish1 = b[0];
    let elephant1= b[1];
    let elephant2 = b[2];
    let elephant3= b[3];
    let elephant4 = b[4];

    let success1;
    let success2; 
    let success3;
    let success4;
      
  if (prompt == "Select all the grid cells that contain a fish."){
    if((pos.x >= fish1) && (pos.x <= fish1 + (WIDTH/4))){
      successCanvas();
    }
    else { 
      failureCanvas();
    } 
  }

  if (prompt == "Select all the grid cells that contain an elephant."){

    if((pos.x >= elephant1) && (pos.x <= elephant1 + (WIDTH/4))){
      success1 = true;}

    if((pos.x >= elephant2) && (pos.x <= elephant2 + (WIDTH/4))){
      success2 = true;}

    if((pos.x >= elephant3) && (pos.x <= elephant3 + (WIDTH/4))){
      success3 = true;}

    if((pos.x >= elephant4) && (pos.x <= elephant4 + (WIDTH/4))){
      success4 = true;}

    if (success1 || success2 || success3 || success4){
      successCanvas();
    }
       
    else {
      failureCanvas();
    }
  }   
}

/*Function below draws random numbers of fishes and elephants in random arrangements in the grid and also, it calls the drawGrid function.
This function also adds an event handler to the verify button so that when it is clicked the 'checkCoordinates' functions are executed. */

function randomAnimal() {  
  let randomDisplay = Math.floor(Math.random() * 4);
    
  if (randomDisplay === 0){
    drawOneElephant();
    verifyButton.addEventListener('click',checkCoordinates1);}
    
  else if (randomDisplay === 1){
    drawTwoElephants();
    verifyButton.addEventListener('click',checkCoordinates2);}

  else if (randomDisplay === 2){
    drawThreeElephants();
    verifyButton.addEventListener('click',checkCoordinates3);}

  else if (randomDisplay === 3){
    drawFourElephants();
    verifyButton.addEventListener('click', checkCoordinates4);}

  drawGrid();
}

//This function marks the side of each box in the grid when clicked.
function clickImage(evt){
  let pos = getMouseXY(evt);
  
  if ((pos.x < 200) && (pos.x > 0)){
    drawEllipse("rgb(0,255,0)",180,180, 10, 10, 0,0, 2*Math.PI);
  }

  else if ((pos.x < 400) && (pos.x > 200)){
    drawEllipse("rgb(0,255,0)",380,180, 10, 10, 0,0, 2*Math.PI);
  }

  else if ((pos.x < 600) && (pos.x > 400)){
    drawEllipse("rgb(0,255,0)",580,180, 10, 10, 0,0, 2*Math.PI);
  }
  
  else if ((pos.x < 800) && (pos.x > 600)){
    drawEllipse("rgb(0,255,0)",780,180, 10, 10, 0,0, 2*Math.PI);
  }
  
  else if ((pos.x < canvas.width) && (pos.x > 800)){
    drawEllipse("rgb(0,255,0)",980,180, 10, 10, 0,0, 2*Math.PI);}
}

//This function displays the image shown when the user fails to make the correct selection.
function failureCanvas(){
  drawRect("rgb(255,255,255)", 0,0,1000,200);
  drawRect("rgb(255,0,0)", 500,20,40,120);
  drawEllipse("rgb(255,0,0)", 520 , 170, 20, 20, 0,0, 2*Math.PI);
}

//This function displays the image shown when the user is successful in their selection.
function successCanvas() {
  drawRect("rgb(255,255,255)", 0,0,1000,200);
  drawEllipse("rgb(255,255,0)", 500,100, 100, 100, 0,0, 2*Math.PI);
  drawEllipse("rgb(0,0,0)", 450, 80, 10, 10, 0,0, 2*Math.PI);
  drawEllipse("rgb(0,0,0)", 545, 80, 10, 10, 0,0, 2*Math.PI);
  drawEllipse("rgb(0,0,0)", 500, 120, 60, 60, 0,0, Math.PI);
}

// main program body
  
let canvas = document.getElementById("canvas1");
let context = canvas.getContext("2d");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const NUM_CELLS = 5;

//Section below displays two prompts randomly.

let prompt = "";
let randomNumber = Math.round(Math.random());

if (randomNumber === 0){
  prompt = "Select all the grid cells that contain a fish."}

else if (randomNumber === 1){
  prompt = "Select all the grid cells that contain an elephant."}

let elem = document.getElementById('message');
elem.textContent = prompt;

//Section below adds event handlers to the canvas and reinitialise button and calls the function 'randomAnimal'.
canvas.addEventListener('click', clickImage);

let verifyButton = document.getElementById("verifybutton");

let reinitialiseButton = document.getElementById("reinitialisebutton");
reinitialiseButton.addEventListener('click', randomAnimal);

randomAnimal(); 

