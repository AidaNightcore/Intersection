// Functii pentru semafoarele pentru masini
function start() {
  v_left.src = vertical[0];
  v_right.src = vertical[0];
  h_left.src = horizontal[0];
  h_right.src = horizontal[0];
  v_left_2.src = vertical[0];
  v_right_2.src = vertical[0];
  h_left_2.src = horizontal[0];
  h_right_2.src = horizontal[0];
  vl_intermitent.src = intermitent_img[1];
  vr_intermitent.src = intermitent_img[1];
  hr_intermitent.src = intermitent_img[1];
  hl_intermitent.src = intermitent_img[1];
  pv_left.src = pvertical[0];
  pv_right.src = pvertical[0];
  ph_left.src = phorizontal[0];
  ph_right.src = phorizontal[0];
}
start();

// Lumini intermitente
function startIntermitentLights() {
  // culoarea rosie
  setTimeout(function () {
    vl_intermitent.src = intermitent_img[0];
    vr_intermitent.src = intermitent_img[0];
    hr_intermitent.src = intermitent_img[1];
    hl_intermitent.src = intermitent_img[1];
  }, 0);

  //culoarea galbena
  setTimeout(function () {
    vl_intermitent.src = intermitent_img[1];
    vr_intermitent.src = intermitent_img[1];
    hr_intermitent.src = intermitent_img[1];
    hl_intermitent.src = intermitent_img[1];
  }, red);

  //culoarea verde
  setTimeout(function () {
    vl_intermitent.src = intermitent_img[1];
    vr_intermitent.src = intermitent_img[1];
    hr_intermitent.src = intermitent_img[0];
    hl_intermitent.src = intermitent_img[0];
  }, red + yellow);

  //culoarea galbena
  setTimeout(function () {
    vl_intermitent.src = intermitent_img[1];
    vr_intermitent.src = intermitent_img[1];
    hr_intermitent.src = intermitent_img[1];
    hl_intermitent.src = intermitent_img[1];
  }, red + red + yellow);
}

// Schimbarea luminilor semaforului pentru masini
// Functia care schimba imaginile semaforului pt masini
function startTrafficSignal() {
  // culoarea verde/rosie
  setTimeout(function () {
    v_left.src = vertical[0];
    v_right.src = vertical[0];
    h_left.src = horizontal[0];
    h_right.src = horizontal[0];
    v_left_2.src = vertical[0];
    v_right_2.src = vertical[0];
    h_left_2.src = horizontal[0];
    h_right_2.src = horizontal[0];
  }, 0);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
    v_left_2.src = vertical[1];
    v_right_2.src = vertical[1];
    h_left_2.src = horizontal[1];
    h_right_2.src = horizontal[1];
  }, red);

  //culoare rosie/verde
  setTimeout(function () {
    v_left.src = vertical[2];
    v_right.src = vertical[2];
    h_left.src = horizontal[2];
    h_right.src = horizontal[2];
    v_left_2.src = vertical[2];
    v_right_2.src = vertical[2];
    h_left_2.src = horizontal[2];
    h_right_2.src = horizontal[2];
  }, red + yellow);

  // culoarea galbena
  setTimeout(function () {
    v_left.src = vertical[1];
    v_right.src = vertical[1];
    h_left.src = horizontal[1];
    h_right.src = horizontal[1];
    v_left_2.src = vertical[1];
    v_right_2.src = vertical[1];
    h_left_2.src = horizontal[1];
    h_right_2.src = horizontal[1];
  }, red + red + yellow);
}

function Stop() {
  clearInterval(window.intervalID);
}
function Start() {
  if (window.intervalID) {
    clearInterval(window.intervalID);
  }
  updateDelays();
  if (isInputValid()) {
    window.intervalID = setInterval(function () {
      startTrafficSignal();
      startIntermitentLights();
    }, sum);
  }
}
