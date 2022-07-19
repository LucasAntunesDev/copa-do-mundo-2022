// Data a ser contada
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

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
  document.getElementById("demo").innerHTML = "A copa começa em: " + dias + "d " + horas + "h "
  + minutos + "m " + segundos + "s ";
    

  // O que mostrar quando o contador acabar
  if (distancia < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    alert("Ei, copa já começou!")
  }
}, 1000);

//Navbar

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});