'use strict';

var filePathArr = [];
var currentImagesArr = [];
var previousImagesArr = [];
var usedImagesCount = 0;
var img1 = document.getElementById('img-1');
var img3 = document.getElementById('img-3');
var img2 = document.getElementById('img-2');

function Image(name, filePath, timesShown, timesClicked) {
  this.name = name;
  this.filePath = filePath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  filePathArr.push(filePath);

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
console.log(filePathArr);

var randomImage = function() {
  var num = Math.floor(Math.random() * filePathArr.length);
  return num;
};

var imageChoice = function() {
  var imgChoice1 = filePathArr[randomImage()];
  console.log(imgChoice1);
  img1.setAttribute('src', imgChoice1);
  var imgChoice2 = filePathArr[randomImage()];
  console.log(imgChoice2);
  img2.setAttribute('src', imgChoice2);
  var imgChoice3 = filePathArr[randomImage()];
  console.log(imgChoice3);
  img3.setAttribute('src', imgChoice3);
};

imageChoice();
