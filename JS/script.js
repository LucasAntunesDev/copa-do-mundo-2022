function $(id) {
  return document.getElementById(id);
}

var countDownDate = new Date("Nov 20, 2022 13:00:00").getTime();

var x = setInterval(function () {

  var agora = new Date().getTime();

  var distancia = countDownDate - agora;

  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  const d = "DIAS"
  const h = "HORAS"
  const m = "MINUTOS"
  const s = "SEGUNDOS"

  $("days").innerHTML = " " + dias + "<h6><br>" + d + "</h6>";

  $("hours").innerHTML = horas + "<h6><br>" + h + "</h6>";

  $("minutes").innerHTML = minutos + "<h6><br>" + m + "</h6>";

  $("seconds").innerHTML = segundos + "<h6><br>" + s + "</h6>"

  
  if (distancia < 0) {
    clearInterval(x);
    alert("A copa já começou!")
  }
}, 1000);

function mudarFundo() {

  const td = document.getElementsByClassName('tabela')
  const img = document.getElementsByClassName('hover')
  const body = document.body;
  const infoEstadio = document.getElementsByClassName('infos')
  body.classList.toggle("lightBG");

  var toggleModes = $("icn");
  if (toggleModes.innerHTML === "light_mode") {
    toggleModes.innerHTML = "dark_mode";
    $('A').src = "Imgs/Grupos 2/Grupo A.png"
    $('B').src = "Imgs/Grupos 2/Grupo B.png"
    $('C').src = "Imgs/Grupos 2/Grupo C.png"
    $('D').src = "Imgs/Grupos 2/Grupo D.png"
    $('E').src = "Imgs/Grupos 2/Grupo E.png"
    $('F').src = "Imgs/Grupos 2/Grupo F.png"
    $('G').src = "Imgs/Grupos 2/Grupo G.png"
    $('H').src = "Imgs/Grupos 2/Grupo H.png"
  } else {
    toggleModes.innerHTML = "light_mode";
    $('A').src = "Imgs/Grupos/Grupo A.png"
    $('B').src = "Imgs/Grupos/Grupo B.png"
    $('C').src = "Imgs/Grupos/Grupo C.png"
    $('D').src = "Imgs/Grupos/Grupo D.png"
    $('E').src = "Imgs/Grupos/Grupo E.png"
    $('F').src = "Imgs/Grupos/Grupo F.png"
    $('G').src = "Imgs/Grupos/Grupo G.png"
    $('H').src = "Imgs/Grupos/Grupo H.png"
  }
}

const btnMobile = document.getElementById('btn-mobile');
const gruposUl = document.getElementsByClassName('grupos-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

function mostrarGrupos() {
  
}
//function mostrarGrupos(){
 
  //gruposUl.style.display = "block"
//}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);