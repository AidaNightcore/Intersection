/*(function() {     // function expression closure to contain variables
    let i = 0;
    var vertical = [ "../imagini/green-traffic-car.png", "../imagini/yellow-trafic-car.png", "../imagini/red-traffic-car.png", "../imagini/yellow-trafic-car.png" ];
    var horizontal = [ "../imagini/red-traffic-car.png", "../imagini/yellow-trafic-car.png", "../imagini/green-traffic-car.png", "../imagini/yellow-trafic-car.png" ];
    var v_left = document.getElementById('light-vertical-left');
    var v_right = document.getElementById('light-vertical-right');
    var h_left = document.getElementById('light-horizontal-left');
    var h_right = document.getElementById('light-horizontal-right');

    function toggle() {
        v_left.src = vertical[i];   
        v_right.src = vertical[i]; 
        h_left.src=horizontal[i];
        h_right.src=horizontal[i];        // set the image
        i = (i + 1) % vertical.length;  // update the counter
    }
    toggle()
    setInterval(toggle, 3000);
    
    
})();             // invoke the function expression */

(function () {
  var i = 0;
  var intermitent_img = [
    "../imagini/intermitent-on.png",
    "../imagini/intermitent-off.png",
  ];
  var intermitent = document.getElementById("intermitent");
  function toggle() {
    intermitent.src = intermitent_img[i];
    i = (i + 1) % intermitent_img.length;
  }
  toggle();
  setInterval(toggle, 2000);
})();

var red = document.getElementById("red").value;
var yellow = document.getElementById("yellow").value;
var green = document.getElementById("green").value;
const y = 1000;
red *= y;
yellow *= y;
green *= y;
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
