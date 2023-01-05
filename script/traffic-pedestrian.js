// Trafic pentru pietoni

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
  }, red + yellow);
}
// setInterval() repeta o functie odata la un interval, pe o durata nedeterminata
// se creaza un timer pentru a repeta functia startPedestrianLights() la nesfarsit

// e important ca delay-ul ultimei functii sa fie egal cu durata schimbarii culorilor in total

function pStop() {
  clearInterval(window.pintervalID);
}
function pStart() {
  if (window.pintervalID) {
    pStop();
  }
  updateDelays();
  var inputError = document.getElementById("inputError");
  if (!Number.isNaN(red) && !Number.isNaN(yellow)) {
    window.pintervalID = setInterval(function () {
      startPedestrianLights();
    }, sum);
  } else inputError.innerHTML = "Introduce-ti numere valide";
}
