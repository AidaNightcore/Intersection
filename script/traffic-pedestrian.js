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

  // declaram variabile care sa preia elementele din HTML si sa le putem transforma
  var pv_left = document.getElementById("plight-vertical-left");
  var pv_right = document.getElementById("plight-vertical-right");
  var ph_left = document.getElementById("plight-horizontal-left");
  var ph_right = document.getElementById("plight-horizontal-right");

  // setTimeout() se foloseste pentru a crea un delay intre procesarea functiei si executarea ei
  // utilizam setTimeout() pentru a putea da fiecarei culori un timp individual de executare, depenedent de cel de dinainte
  // setTimeout(bagi intr-o functie ce vrei sa folosesti, durata de timp de asteptat pana se executa functia)

  // culoarea verde
  setTimeout(function () {
    // schimbam sursa imaginilor cu imaginile din string
    // a fost mai usor sa fie scris direct pozitia elementului decat de a crea un index, fiind un exemplu mic
    // la fel pentru toate celalalte functii
    pv_left.src = pvertical[0];
    pv_right.src = pvertical[0];
    ph_left.src = phorizontal[0];
    ph_right.src = phorizontal[0];
  }, 0);

  // culoarea rosie
  setTimeout(function () {
    pv_left.src = pvertical[1];
    pv_right.src = pvertical[1];
    ph_left.src = phorizontal[1];
    ph_right.src = phorizontal[1];
  }, pred + pyellow);
}
// setInterval() repeta o functie odata la un interval, pe o durata nedeterminata
// se creaza un timer pentru a repeta functia startPedestrianLights() la nesfarsit
var timer = setInterval(function () {
  startPedestrianLights();
}, psum);
// e important ca delay-ul ultimei functii sa fie egal cu durata schimbarii culorilor in total

function stopPedestrianSignal() {
  clearInterval(window.intervalID);
}

function pmain() {
  const pp = 1000;
  var pred = parseInt(document.getElementById("red").value);
  var pyellow = parseInt(document.getElementById("yellow").value);

  var pinputError = document.getElementById("inputError");
  pinputError.innerHTML = "";
  if (!Number.isNaN(pred) && !Number.isNaN(pyellow)) {
    pred *= pp;
    pyellow *= pp;

    var psum = pred + pyellow + pred + pyellow;

    startPedestrianSignal(pred, pyellow, psum);
    window.intervalID = setInterval(
      startPedestrianSignal(),
      psum,
      pred,
      pyellow,
      psum
    );
  } else {
    pinputError.innerHTML = "Error: please input valid numbers!";
  }
}
