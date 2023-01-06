// Functii pentru semafoarele pentru masini

// initializez semafoarele cu anumite imagini
function start() {
  //Folosim 2 vectori de imagine care sa mearga in paralel, pentru benzile verticale si orizontale
  // Modificam imaginile, dandu-le o noua sursa de unde sa ia imaginile din vector
  v_left.src = vertical[0];
  v_right.src = vertical[0];
  h_left.src = horizontal[0];
  h_right.src = horizontal[0];
}
start();

// Lumini intermitente

// functia, fiind intre inca niste paranteze si inca 2 la sfarsit, se va autoapela

function startIntermitentLights() {
  //Folosim 2 vectori de imagine care sa mearga in paralel, pentru benzile verticale si orizontale

  // setTimeout() se foloseste pentru a crea un delay intre procesarea functiei si executarea ei
  // utilizam setTimeout() pentru a putea da fiecarei culori un timp individual de executare, depenedent de cel de dinainte
  // setTimeout(bagi intr-o functie ce vrei sa folosesti, durata de timp de asteptat pana se executa functia)

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

// e important ca delay-ul ultimei functii sa fie egal cu durata schimbarii culorilor in total

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
//

// if input is invalid it defaults to 1s
