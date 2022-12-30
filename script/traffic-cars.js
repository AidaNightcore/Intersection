// Functii pentru semafoarele pentru masini
// initializez semafoarele cu anumite imagini
function start() {
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
  // Cream variabile care sa preia elementele din html
  var v_left = document.getElementById("light-vertical-left");
  var v_right = document.getElementById("light-vertical-right");
  var h_left = document.getElementById("light-horizontal-left");
  var h_right = document.getElementById("light-horizontal-right");
  // Modificam imaginile, dandu-le o noua sursa de unde sa ia imaginile din vector
  v_left.src = vertical[0];
  v_right.src = vertical[0];
  h_left.src = horizontal[0];
  h_right.src = horizontal[0];
}
start();

// Lumini intermitente

// functia, fiind intre inca niste paranteze si inca 2 la sfarsit, se va autoapela
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
    // se updateaza contorul traversarii arrayului de imagini folosirea unei formule cu rest
    i = (i + 1) % intermitent_img.length;
  }
  toggle();
  setInterval(toggle, 700);
})();

// Schimbarea luminilor semaforului pentru masini

// Variabilele ce preiau din pagina de la utilizator valorile introduse
var red = document.getElementById("red").value;
var yellow = document.getElementById("yellow").value;

//constanta pentru a transforma in milisecunde
const y = 1000;
red *= y;
yellow *= y;

var sum = red + yellow + red + yellow;

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

  // declaram variabile care sa preia elementele din HTML si sa le putem transforma
  var v_left = document.getElementById("light-vertical-left");
  var v_right = document.getElementById("light-vertical-right");
  var h_left = document.getElementById("light-horizontal-left");
  var h_right = document.getElementById("light-horizontal-right");

  // setTimeout() se foloseste pentru a crea un delay intre procesarea functiei si executarea ei
  // utilizam setTimeout() pentru a putea da fiecarei culori un timp individual de executare, depenedent de cel de dinainte
  // setTimeout(bagi intr-o functie ce vrei sa folosesti, durata de timp de asteptat pana se executa functia)

  // culoarea verde/rosie
  setTimeout(function () {
    // schimbam sursa imaginilor cu imaginile din string
    // a fost mai usor sa fie scris direct pozitia elementului decat de a crea un index, fiind un exemplu mic
    // la fel pentru toate celalalte functii
    v_left.src = vertical[0];
    v_right.src = vertical[0];
    h_left.src = horizontal[0];
    h_right.src = horizontal[0];
  }, 0);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, red);

  //culoare rosie/verde
  setTimeout(function () {
    v_left.src = vertical[2];
    v_right.src = vertical[2];
    h_left.src = horizontal[2];
    h_right.src = horizontal[2];
  }, red + yellow);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, red + red + yellow);
}

// setInterval() repeta o functie odata la un interval, pe o durata nedeterminata
// se creaza un timer pentru a repeta functia startTrafficSignal() la nesfarsit
var timer = setInterval(function () {
  startTrafficSignal();
  console.log("executat, sum= ", sum);
}, sum);
// e important ca delay-ul ultimei functii sa fie egal cu durata schimbarii culorilor in total

// apelam functia de schimbare a culorilor
startTrafficSignal();
