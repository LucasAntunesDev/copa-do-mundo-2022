// Data a ser contada
var countDownDate = new Date("Nov 21, 2022 07:00:00").getTime();

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
  // const img = document.getElementsByClassName('hover')
  const body = document.body;

  body.classList.toggle("lightBG");
  tabela.classList.toggle("tabelaDark");
  // tabela.classList.toggle("img");
  
}
