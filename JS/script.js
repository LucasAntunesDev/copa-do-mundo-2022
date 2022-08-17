// Data a ser contada
var countDownDate = new Date("Nov 20, 2022 13:00:00").getTime();

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
  const d = "DIAS"
  const h = "HORAS"
  const m = "MINUTOS"
  const s = "SEGUNDOS"
  
  
    
  // Ele mosta o resultado na #demo
  //document.getElementById("demo").innerHTML = "A copa começa em: " + dias + "d " + horas + "h "
  //+ minutos + "m " + segundos + "s ";
  document.getElementById("days").innerHTML =  " " + dias + "<h6><br>" + d + "</h6>";

  document.getElementById("hours").innerHTML = horas + "<h6><br>" + h + "</h6>";

  document.getElementById("minutes").innerHTML = minutos + "<h6><br>" + m + "</h6>";

  document.getElementById("seconds").innerHTML = segundos + "<h6><br>" + s + "</h6>"

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
  // const icon = document.getElementsByClassName('material-symbols-rounded')
  // const Icon = document.getElementById('icn')
  // const icon2 = document.getElementsByClassName('carousel-control-prev-icon')
  const infoEstadio = document.getElementsByClassName('infos')
  body.classList.toggle("lightBG");

  var x = document.getElementById("icn");
  if (x.innerHTML === "light_mode") {
    x.innerHTML = "dark_mode";
    x.style.transition = 'all 1s linear'
  } else {
    x.innerHTML = "light_mode";
    x.style.transition = 'all 1s linear'
  }
  console.log(x)
  // tabela.classList.toggle("tabelaDark");
  //icon.classList.toggle('lightBG');
 // icon2.classList.toggle('lightBG');
 // img.classList.toggle('lightBG')
  //infoEstadio.classList.toggle('infosLight')


  //const fundo = document.getElementById('carouselExampleFade2')
  //const back = document.getElementById('carouselExampleFade')
}
