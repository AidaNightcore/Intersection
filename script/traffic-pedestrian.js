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

function startTrafficSignal(red, yellow, green, sum) {
  let v_left = document.getElementById("light-vertical-left");
  let v_right = document.getElementById("light-vertical-right");
  let h_left = document.getElementById("light-horizontal-left");
  let h_right = document.getElementById("light-horizontal-right");

  // culoarea verde/rosie
  setTimeout(function () {
    console.log(red);
    v_left.src = vertical[0];
    v_right.src = vertical[0];
    h_left.src = horizontal[0];
    h_right.src = horizontal[0];
  }, red);

  // culoarea galbena
  setTimeout(function () {
    console.log(yellow);
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, yellow + red);

  //culoare rosie/verde
  setTimeout(function () {
    console.log(green);
    v_left.src = vertical[2];
    v_right.src = vertical[2];
    h_left.src = horizontal[2];
    h_right.src = horizontal[2];

  }, green + yellow + red);

  // culoarea galbena
  setTimeout(function () {
    console.log(sum);
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
  }, sum);

}

function stopTrafficSignal() {
  clearInterval(window.intervalID);
}

function main() {
  const p = 1000;
  var red = parseInt(document.getElementById("red").value);
  var yellow = parseInt(document.getElementById("yellow").value);
  var green = parseInt(document.getElementById("green").value);
  var inputError = document.getElementById("inputError");
  inputError.innerHTML = "";
  if (!Number.isNaN(red) && !Number.isNaN(yellow) && !Number.isNaN(green)) {
    red *= p;
    yellow *= p;
    green *= p;
    var sum = red + yellow + green + yellow;
    console.log(red);
    startTrafficSignal(red, yellow, green, sum);
    window.intervalID = setInterval(startTrafficSignal, sum, red, yellow, green, sum);
  } else {
    inputError.innerHTML = "Error: please input valid numbers!";
  }
}


