// Data a ser contada
var countDownDate = new Date("Nov 20, 2022 15:00:00").getTime();

// Atualiza o contador a cada 1 segundo
var x = setInterval(function() {

  // Data de hoje
  var agora = new Date().getTime();
    
  // Calcula a distancia entre hoje e a data final
  var distancia = countDownDate - agora;
    
  // Cálculo dos dias, horas, minutos e segundos
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
  // Ele mosta o resultado na #demo
  //document.getElementById("demo").innerHTML = "A copa começa em: " + dias + "d " + horas + "h "
  //+ minutos + "m " + segundos + "s ";
  document.getElementById("days").innerHTML =  " " + dias + "d"

  document.getElementById("hours").innerHTML = horas + "h"

  document.getElementById("minutes").innerHTML = minutos + "m"

  document.getElementById("seconds").innerHTML = segundos + "s"

  // O que mostrar quando o contador acabar
  if (distancia < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    alert("Ei, copa já começou!")
  }
}, 1000);

function mudarFundo(){
  //const fundo = document.getElementById('corpo')
  
  const td = document.getElementsByClassName('tabela')
  const img = document.getElementsByClassName('hover')
  const body = document.body;
  const icon = document.getElementsByClassName('material-symbols-rounded')
  const icon2 = document.getElementsByClassName('carousel-control-prev-icon')
  const infoEstadio = document.getElementsByClassName('infos')
  body.classList.toggle("lightBG");
  tabela.classList.toggle("tabelaDark");
  icon.classList.toggle('lightBG');
  icon2.classList.toggle('lightBG');
  img.classList.toggle('lightBG')
  infoEstadio.classList.toggle('infosLight')
  
  const fundo = document.getElementById('carouselExampleFade2')
  const back = document.getElementById('carouselExampleFade')
  fundo.style.display = "none"
  if(fundo === none){
    fundo.style.display = "block"
    back.style.display = "none"
  }
  else{
    fundo.style.display = "none"
    back.style.display = "block"
  }
}

function Img(){
  var A = document.getElementById('A').src = 'Imgs/Grupos Light/Grupo A.png'
  var B = document.getElementById('B').src = 'Imgs/Grupos Light/Grupo B.png'
  var C = document.getElementById('C').src = 'Imgs/Grupos Light/Grupo C.png'
  var D = document.getElementById('D').src = 'Imgs/Grupos Light/Grupo D.png'
  var E = document.getElementById('E').src = 'Imgs/Grupos Light/Grupo E.png'
  var F = document.getElementById('F').src = 'Imgs/Grupos Light/Grupo F.png'
  var G = document.getElementById('G').src = 'Imgs/Grupos Light/Grupo G.png'
  var H = document.getElementById('H').src = 'Imgs/Grupos Light/Grupo H.png'
}
