'use strict';

var productArray = [];
var nameArr = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum.jpg', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var previousImagesIndexArr = [];
var dataArray = [];
var totalClicks = 0;
var clickLimit = 25;
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
  dataArray.push(productArray[productIndex].itemClick);

  if (totalClicks === clickLimit) {
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
    labels: nameArr,
    datasets: [{
      label: 'Times of images clicked',
      data: dataArray,
      backgroundColor: '#F5811F',
      borderColor: 'white'
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
            gridLines: {
              color: 'white',
            }
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: 'white',
            scaleLineColor: 'white',
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
