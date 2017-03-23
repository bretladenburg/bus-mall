'use strict';


var listOfObjectsArray = [];
var timesShownArray = [];
var previousImagesIndexArr = [];
var itemNumberClicksArray = [];
var nameOfObjectsArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum.jpg', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var itemImagePath = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var sumOfUserClicks = 0;
var clickLimit = 25;
var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');

//object constructor
function ProductObject(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.itemClick = 0;
  this.imageShown = 0;
  listOfObjectsArray.push(this);
}

//writes path prefix for image path
for (var i = 0; i < itemImagePath.length; i++) {
  var filePath = 'images/' + itemImagePath[i];
  new ProductObject(nameOfObjectsArray[i], filePath);
}
function localStorage() {
  if(localStorage.sumOfDataArray){
    var someNewArray = JSON.parse(localStorage.sumOfDataArray);
    for(var i = 0; i < someNewArray.length; i++){
      listOfObjectsArray[i].itemClick += someNewArray[i].itemClick;
    }
  }
}

function randomImageNumberFunc() {
  return Math.floor(Math.random() * itemImagePath.length);
};

function randomImagesGenerator() {
  var currentImagesIndexArr = [];
  while (currentImagesIndexArr.length < 3) {
    var imageSelector = randomImageNumberFunc();
    if (!currentImagesIndexArr.includes(imageSelector) && !previousImagesIndexArr.includes(imageSelector)) {
      currentImagesIndexArr.push(imageSelector);
    }
  }
  var prod1 = listOfObjectsArray[currentImagesIndexArr[0]];
  var prod2 = listOfObjectsArray[currentImagesIndexArr[1]];
  var prod3 = listOfObjectsArray[currentImagesIndexArr[2]];
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
randomImagesGenerator();

function handleTheClick(event) {
  randomImagesGenerator();
  sumOfUserClicks++;
  var productIndex = this.alt;
  listOfObjectsArray[productIndex].itemClick++;
  timesShownArray.push(listOfObjectsArray[productIndex].imageShown);
  itemNumberClicksArray.push(listOfObjectsArray[productIndex].itemClick);

  if (sumOfUserClicks === clickLimit) {
    localStorage();
    localStorage.sumOfDataArray = JSON.stringify(listOfObjectsArray);
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
    renderChart();
  }
};

img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function renderChart() {
  var data = {
    labels: nameOfObjectsArray,
    datasets: [{
      label: 'Times Clicked',
      data: itemNumberClicksArray,
      backgroundColor: '#F5811F',
      borderColor: 'white'
    }, {
      label: 'Times Shown',
      data: timesShownArray,
      backgroundColor: 'white',
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    scaleFontColor: 'white',
    options: {
      legend: {labels:{fontColor:'white'}},
      responsive:true,
      scales: {
        xAxes: [{
          ticks: {
            fontColor: 'white',
            scaleLineColor: 'white',
          },
          gridLines: {
            color: 'white',
          }
        }],
        yAxes: [{
          fontColor: 'white',
          ticks: {
            fontColor: 'white',
            beginAtZero:true
          },
          gridLines: {
            color: 'white',
          }
        }]
      }
    }
  });
};
///////////////////////////////////////
/////////////
///////////// local storage
/////////////
///////////////////////////////////////
