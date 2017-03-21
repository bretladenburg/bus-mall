'use strict';

var productArray = [];
var nameArr = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum.jpg', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var previousImagesIndexArr = [];
var totalClicks = 0;
var clickLimit = 5;
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');

function Image(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);

}

for (var i = 0; i < imageArr.length; i++) {
  var filePath = 'images/' + imageArr[i];
  new Image(nameArr[i], filePath);
}

function randomImgIndex() {
  return Math.floor(Math.random() * imageArr.length);
};

function randomImage() {
  var currentImagesIndexArr = [];
  while (currentImagesIndexArr.length < 3) {
    var imageSelector = randomImgIndex();
    if (!currentImagesIndexArr.includes(imageSelector) && !previousImagesIndexArr.includes(imageSelector)) {
      currentImagesIndexArr.push(imageSelector);
    }
  }
  var prod1 = productArray[currentImagesIndexArr[0]];
  var prod2 = productArray[currentImagesIndexArr[1]];
  var prod3 = productArray[currentImagesIndexArr[2]];
  img1.src = prod1.filePath;
  img2.src = prod2.filePath;
  img3.src = prod3.filePath;
  img1.alt = currentImagesIndexArr[0];
  img2.alt = currentImagesIndexArr[1];
  img3.alt = currentImagesIndexArr[2];
  previousImagesIndexArr = currentImagesIndexArr;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};
randomImage();

function handleTheClick(event) {
  randomImage();
  totalClicks++;
  var productIndex = this.alt;
  productArray[productIndex].itemClick++;

  if (totalClicks === clickLimit) {
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
    productClicks();
  }
};

img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);

function productClicks() {
  var content = document.getElementById('content');
  var ul = document.createElement('ul');
  ul.setAttribute('id', 'vote-list');
  content.appendChild(ul);
  var li = document.createElement('li');
  for (var i = 0; i < productArray.length; i++) {
    var li = document.createElement('li');
    var dataStr = productArray[i].itemClick + ' clicks for ' + productArray[i].name;
    li.innerText = dataStr;
    ul.appendChild(li);
  }
}

// var bag = new Image (bag, 'images/bag.jpg');
// var banana = new Image (banana, 'images/banana.jpg');
// var bathroom = new Image (bathroom, 'images/bathroom.jpg');
// var boots = new Image (boots, 'images/boots.jpg');
// var breakfast = new Image (breakfast, 'images/breakfast.jpg');
// var bubblegum = new Image (bubblegum, 'images/bubblegum.jpg');
// var chair = new Image (chair, 'images/chair.jpg');
// var cthulhu = new Image (cthulhu, 'images/cthulhu.jpg');
// var dogDuck = new Image (dogDuck, 'images/dog-duck.jpg');
// var dragon = new Image (dragon, 'images/dragon.jpg');
// var pen = new Image (pen, 'images/pen.jpg');
// var petSweep = new Image (petSweep, 'images/pet-sweep.jpg');
// var scissors = new Image (scissors, 'images/scissors.jpg');
// var shark = new Image (shark, 'images/shark.jpg');
// var sweep = new Image (sweep, 'images/sweep.png');
// var tauntaun = new Image (tauntaun, 'images/tauntaun.jpg');
// var unicorn = new Image (unicorn, 'images/unicorn.jpg');
// var usb = new Image (usb, 'images/usb.gif');
// var waterCan = new Image (waterCan, 'images/water-can.jpg');
// var wineGlass = new Image (wineGlass, 'images/wine-glass.jpg');

// var imageChoice = function() {
//   var imgChoice1 = filePathArr[randomImage()];
//   console.log(imgChoice1);
//   img1.setAttribute('src', imgChoice1);
//   var imgChoice2 = filePathArr[randomImage()];
//   console.log(imgChoice2);
//   img2.setAttribute('src', imgChoice2);
//   var imgChoice3 = filePathArr[randomImage()];
//   console.log(imgChoice3);
//   img3.setAttribute('src', imgChoice3);
// };
//
// imageChoice();
