// Functii pentru semafoarele pentru masini

// Lumini intermitente
(function () {
  var i = 0;
  var intermitent_img = [
    "../imagini/intermitent-on.png",
    "../imagini/intermitent-off.png",
  ];
  var vl_intermitent = document.getElementById("intermitent-vl");
  var vr_intermitent = document.getElementById("intermitent-vr");
  var hr_intermitent = document.getElementById("intermitent-hr");
  var hl_intermitent = document.getElementById("intermitent-hl");
  function toggle() {
    vl_intermitent.src = intermitent_img[i];
    vr_intermitent.src = intermitent_img[i];
    hr_intermitent.src = intermitent_img[i];
    hl_intermitent.src = intermitent_img[i];
    i = (i + 1) % intermitent_img.length; // se updateaza contorul traversarii arrayului de imagini folosirea unei formule cu rest
  }
  toggle();
  setInterval(toggle, 700);
})();

// Schimbarea luminilor semaforului pentru masini

// Variabilele ce preiau din pagina de la utilizator valorile introduse
var red = document.getElementById("red").value;
var yellow = document.getElementById("yellow").value;
var green = document.getElementById("green").value;

//constanta pentru a transforma in milisecunde
const y = 1000;
red *= y;
yellow *= y;
green *= y;
var sum = red + yellow + green + yellow;

// Functia care schimba imaginile
function startTrafficSignal() {
  //Folosim 2 vectori de imagine care sa mearga in paralel, pentru benzile verticale si orizontale
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

  // culoarea verde/rosie
  setTimeout(function () {
    v_left.src = vertical[0];
    v_right.src = vertical[0];
    h_left.src = horizontal[0];
    h_right.src = horizontal[0];
  }, red);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, yellow + red);

  //culoare rosie/verde
  setTimeout(function () {
    v_left.src = vertical[2];
    v_right.src = vertical[2];
    h_left.src = horizontal[2];
    h_right.src = horizontal[2];
  }, green + yellow + red);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, sum);
}

var timer = setInterval(function () {
  startTrafficSignal();
}, sum);
startTrafficSignal();
