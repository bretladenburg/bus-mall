'use strict';

var filePathArr = [];

var usedImages = {};
var usedImagesCount = 0;

function Image(name, filePath, timesShown, timesClicked) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  filePathArr.push(filePath);

}

randomImage = function() {
  var num = Math.floor(Math.random() * filePathArr.length);
};

for (var i = 0; i < filePathArr.length; i++) {
  var imgChoice = filePathArr[randomImage()];
  
}
var bag = new Image (bag, 'images/bag.jpg');
var banana = new Image (banana, 'images/banana.jpg');
var bathroom = new Image (bathroom, 'images/bathroom.jpg');
var boots = new Image (boots, 'images/boots.jpg');
var breakfast = new Image (breakfast, 'images/breakfast.jpg');
var bubblegum = new Image (bubblegum, 'images/bubblegum.jpg');
var chair = new Image (chair, 'images/chair.jpg');
var cthulhu = new Image (cthulhu, 'images/cthulhu.jpg');
var dogDuck = new Image (dogDuck, 'images/dog-duck.jpg');
var dragon = new Image (dragon, 'images/dragon.jpg');
var pen = new Image (pen, 'images/pen.jpg');
var petSweep = new Image (petSweep, 'images/pet-sweep.jpg');
var scissors = new Image (scissors, 'images/scissors.jpg');
var shark = new Image (shark, 'images/shark.jpg');
var sweep = new Image (sweep, 'images/sweep.png');
var tauntaun = new Image (tauntaun, 'images/tauntaun.jpg');
var unicorn = new Image (unicorn, 'images/unicorn.jpg');
var usb = new Image (usb, 'images/usb.gif');
var waterCan = new Image (waterCan, 'images/water-can.jpg');
var wineGlass = new Image (wineGlass, 'images/wine-glass.jpg');
