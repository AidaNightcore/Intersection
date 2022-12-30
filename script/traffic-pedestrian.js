// Trafic pentru pietoni
// Variabilele ce preiau din pagina de la utilizator valorile introduse
var pred = document.getElementById("red").value;
var pyellow = document.getElementById("yellow").value;

//constanta pentru a transforma in milisecunde
const x = 1000;
pred *= x;
pyellow *= x;

var psum = pred + pyellow + pred + pyellow;

function startPedestrianLights() {
  //Folosim 2 vectori de imagine care sa mearga in paralel, pentru benzile verticale si orizontale
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

  // setTimeout() se foloseste pentru a crea un delay intre procesarea functiei si executarea ei
  // utilizam setTimeout() pentru a putea da fiecarei culori un timp individual de executare, depenedent de cel de dinainte

  // culoarea verde
  setTimeout(function () {
    pv_left.src = pvertical[0];
    pv_right.src = pvertical[0];
    ph_left.src = phorizontal[0];
    ph_right.src = phorizontal[0];
  }, pyellow + pred);

  // culoarea rosie
  setTimeout(function () {
    pv_left.src = pvertical[1];
    pv_right.src = pvertical[1];
    ph_left.src = phorizontal[1];
    ph_right.src = phorizontal[1];
  }, pred);
}
var timer = setInterval(function () {
  startPedestrianLights();
}, psum);
startPedestrianLights();
