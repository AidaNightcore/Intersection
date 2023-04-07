const y = 1000;
var red = 1 * y;
var yellow = 1 * y;
var sum = red + yellow + red + yellow;
var inputError = document.getElementById("inputError");
inputError.innerHTML = "";

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

var v_left = document.getElementById("light-vertical-left");
var v_right = document.getElementById("light-vertical-right");
var h_left = document.getElementById("light-horizontal-left");
var h_right = document.getElementById("light-horizontal-right");
var v_left_2 = document.getElementById("2light-vertical-left");
var v_right_2 = document.getElementById("2light-vertical-right");
var h_left_2 = document.getElementById("2light-horizontal-left");
var h_right_2 = document.getElementById("2light-horizontal-right");

var intermitent_img = [
  "../imagini/intermitent-on.png",
  "../imagini/intermitent.png",
];
var vl_intermitent = document.getElementById("intermitent-vl");
var vr_intermitent = document.getElementById("intermitent-vr");
var hr_intermitent = document.getElementById("intermitent-hr");
var hl_intermitent = document.getElementById("intermitent-hl");

function updateDelays() {
  red = parseFloat(document.getElementById("red").value) * y;
  yellow = parseFloat(document.getElementById("yellow").value) * y;
  if (!isInputValid()) {
    inputError.innerHTML =
      "Introduceti un numar pozitiv nenul, pana tunci semaforul va functiona dupa valori de baza";
  }
  sum = red + yellow + red + yellow;
}

function isInputValid() {
  return !(
    Number.isNaN(red) ||
    Number.isNaN(yellow) ||
    red <= 0 ||
    yellow <= 0
  );
}
