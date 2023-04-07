// Trafic pentru pietoni

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
  }, 0);

  // culoarea rosie
  setTimeout(function () {
    pv_left.src = pvertical[1];
    pv_right.src = pvertical[1];
    ph_left.src = phorizontal[1];
    ph_right.src = phorizontal[1];
  }, red + yellow);
}

function pStop() {
  clearInterval(window.pintervalID);
}
function pStart() {
  if (window.pintervalID) {
    pStop();
  }
  updateDelays();
  if (isInputValid()) {
    window.pintervalID = setInterval(function () {
      startPedestrianLights();
    }, sum);
  }
}
