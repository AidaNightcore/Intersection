var red = document.getElementById("red").value;
var yellow = document.getElementById("yellow").value;
var green = document.getElementById("green").value;
const p = 1000;
red *= p;
yellow *= p;
green *= p;
var sum = red + yellow + green + yellow;

function startTrafficSignal() {
  var vertical = [
    "../imagini/green-traffic-car.png",
    "../imagini/yellow-trafic-car.png",
    "../imagini/red-traffic-car.png",
  ];
  var horizontal = [
    "../imagini/red-traffic-car.png",
    "../imagini/yellow-trafic-car.png",
    "../imagini/green-traffic-car.png",
  ];
  let v_left = document.getElementById("light-vertical-left");
  let v_right = document.getElementById("light-vertical-right");
  let h_left = document.getElementById("light-horizontal-left");
  let h_right = document.getElementById("light-horizontal-right");

  // culoarea verde/rosie
  setTimeout(function () {
    console.log("1");
    v_left.src = vertical[0];
    v_right.src = vertical[0];
    h_left.src = horizontal[0];
    h_right.src = horizontal[0];
  }, red + yellow);

  // culoarea galbena
  setTimeout(function () {
    console.log("2");
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, yellow);

  //culoare rosie/verde
  setTimeout(function () {
    console.log("3");
    v_left.src = vertical[2];
    v_right.src = vertical[2];
    h_left.src = horizontal[2];
    h_right.src = horizontal[2];
  }, green + yellow + red);

  // culoarea galbena
  setTimeout(function () {
    console.log("4");
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, yellow);
}
console.log(red);
console.log(yellow);
console.log(green);
var timer = setInterval(function () {
  startTrafficSignal();
}, sum);
startTrafficSignal();
