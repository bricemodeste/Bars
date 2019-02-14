"use strict";

window.addEventListener("DOMContentLoaded", init);

const dataArray = [];

function init() {
  console.log("init");
  let data = document.querySelectorAll("#bars");
  buildDataArray();
  document.querySelector("#bars").addEventListener("animationiteration", loop);
  
}

function loop() {
  scrollDataArray();
  displayDataArray();

}

function buildDataArray() {
 
  for (let i = 0; i < 40; i++) {
    dataArray.push(getNewData());
  }
}

function scrollDataArray() {
  
  dataArray.shift();


  dataArray.push(getNewData());
  console.log(dataArray);
}
function getNewData() {
  const randomNumber = Math.random() * 35;
  return randomNumber;
}

function displayDataArray() {
  document.querySelectorAll("#bars>.bar").forEach(displayDataBar);
}

function displayDataBar(element, index) {
  element.style.height = dataArray[index] + "px";
}
