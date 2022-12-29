var pred = document.getElementById("red").value;
var pyellow = document.getElementById("yellow").value;
var pgreen = document.getElementById("green").value;
const x = 1000;
pred *= x;
pyellow *= x;
pgreen *= x;
var psum = pred + pyellow + pgreen + pyellow;

function startPedestrianLights() {
  var pvertical = [
    "../imagini/green-pedestrian.png",
    "../imagini/red-pedestrian.png",
  ];

  var phorizontal = [
    "../imagini/red-pedestrian.png",
    "../imagini/green-pedestrian.png",
  ];
  var pv_left = document.getElementById("plight-vertical-left");
  var pv_right = document.getElementById("plight-vertical-right");
  var ph_left = document.getElementById("plight-horizontal-left");
  var ph_right = document.getElementById("plight-horizontal-right");

  // culoarea verde
  setTimeout(function () {
    pv_left.src = pvertical[0];
    pv_right.src = pvertical[0];
    ph_left.src = phorizontal[0];
    ph_right.src = phorizontal[0];
  }, pyellow + pred);

  // culoarea rosie
  setTimeout(function () {
    pv_left.src = pvertical[0];
    pv_right.src = pvertical[0];
    ph_left.src = phorizontal[0];
    ph_right.src = phorizontal[0];
  }, pgreen);
}
var timer = setInterval(function () {
  startPedestrianLights();
}, sum);
startPedestrianLights();
