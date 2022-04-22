var slider = document.getElementById("myRange");
var text = document.getElementById("paragraph");
var circle = document.querySelector(".circle");
var button = document.getElementById("button");
var secondButton = document.getElementById("secondButton");
const NUM = 360 / 100;
var rangeEnabled = true;
var interval;

slider.oninput = function () {
  if (rangeEnabled == true) {
    let minutes = Math.floor(this.value / 60);
    let seconds = slider.value % 60;
    let percentage = Math.floor((this.value / 3600) * 100);
    let degrees = Math.floor(percentage * NUM);
    circle.style.background = `conic-gradient(rgb(107, 227, 240) ${degrees}deg, white 0deg)`;
    console.log(seconds);
    console.log(slider.value);
    if (seconds < 10) {
      text.innerHTML = `${minutes}:0${seconds}`;
    } else {
      text.innerHTML = `${minutes}:${seconds}`;
    }
  }
};

button.onclick = function () {
  if (slider.value > 0) {
    if (rangeEnabled == true) {
      button.setAttribute("class", "btn_disabled");
      interval = setInterval(timer, 1000);
      this.innerHTML = "stop";
      rangeEnabled = false;
      slider.disabled = true;
    } else if (rangeEnabled == false) {
      button.setAttribute("class", "btn");
      clearInterval(interval);
      this.innerHTML = "start";
      rangeEnabled = true;
      slider.disabled = false;
    }
  } else if (slider.value == 0) {
    if (rangeEnabled == false) {
      button.setAttribute("class", "btn");
      clearInterval(interval);
      this.innerHTML = "start";
      rangeEnabled = true;
      slider.disabled = false;
    }
  }
};

function timer() {
  if (slider.value > 0) {
    slider.value -= 1;

    let minutes = Math.floor(slider.value / 60);
    let seconds = slider.value % 60;
    let percentage = Math.floor((slider.value / 3600) * 100);
    let degrees = Math.floor(percentage * NUM);

    console.log(seconds);
    console.log(slider.value);

    circle.style.background = `conic-gradient(rgb(107, 227, 240) ${degrees}deg, white 0deg)`;
    if (seconds < 10) {
      text.innerHTML = `${minutes}:0${seconds}`;
    } else {
      text.innerHTML = `${minutes}:${seconds}`;
    }
  }
}

secondButton.onclick = function () {
  slider.value = 0;
  let minutes = Math.floor(slider.value / 60);
  let seconds = slider.value % 60;
  let percentage = Math.floor((slider.value / 3600) * 100);
  let degrees = Math.floor(percentage * NUM);

  console.log(seconds);
  console.log(slider.value);
  rangeEnabled = true;
  slider.disabled = false;
  button.innerHTML = "start";
  button.setAttribute("class", "btn");
  circle.style.background = `conic-gradient(rgb(107, 227, 240) ${degrees}deg, white 0deg)`;
  text.innerHTML = `0${minutes}:0${seconds}`;
  clearInterval(interval);
};

// adauga butoanele de start/stop reset
