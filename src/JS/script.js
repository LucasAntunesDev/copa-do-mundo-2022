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
  const d = "DIAS";
  const h = "HORAS";
  const m = "MINUTOS";
  const s = "SEGUNDOS";

  if(distancia < 0 ){
    $('contagem').style.display = "none";
    $('br').style.display = "none";
  }else{

    $("days").innerHTML = " " + dias + "<h6><br>" + d + "</h6>";
  
    $("hours").innerHTML = horas + "<h6><br>" + h + "</h6>";
  
    $("minutes").innerHTML = minutos + "<h6><br>" + m + "</h6>";
  
    $("seconds").innerHTML = segundos + "<h6><br>" + s + "</h6>";
  }



  if (distancia < 0) {
    clearInterval(x);
  }
}, 1000);

const btnIcone = $("botao-icone");

btnIcone.addEventListener('click', () => {
  const grupos = document.getElementsByClassName("grupos");
  const body = document.body;
  const modo = $('modo');
  body.classList.toggle("bg-gradient-qatar");
  const tabela = document.getElementsByTagName('table');
  tabela.classList.toggle('bg-amber-50');
  const iconeMobile = $("icn-mobile");
  let x = 1;

  if(modo.classList == 'fa-solid fa-moon fa-xl'){
    modo.classList = 'fa-solid fa-sun fa-xl';
    modo.style.transition = 'all .1s';
  }else{
    modo.classList = 'fa-solid fa-moon fa-xl';
    modo.style.transition = 'all .1s';
  }
  // console.log(modo.classList)

  var fundoEscuro = false;

  if(modo.classList == 'grupos'){
    alert('jgvhgv')
  }

  if(modo.classList == "fa-solid fa-moon fa-xl"){
    grupos.classList = ("bg-gradient-white text-rose-900 hover:text-emerald-500 hover:bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg  w-56 p-2 shadow-lg shadow-orange-100/50 hover:shadow-yellow-200 ease-out duration-200 grupos");
    fundoEscuro === true;
    // alert('oi')
    x = 0;
  }else{
    fundoEscuro === false;
  }
}
)

modo.style.display = 'none'

// const btnMobile = document.getElementById('btn-mobile');
// const gruposUl = document.getElementsByClassName('grupos-mobile');

// function toggleMenu(event) {
//   if (event.type === 'touchstart') event.preventDefault();
//   const nav = document.getElementById('nav');
//   nav.classList.toggle('active');
//   const active = nav.classList.contains('active');
//   event.currentTarget.setAttribute('aria-expanded', active);
//   if (active) {
//     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
//   } else {
//     event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
//   }
// }

// btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);

// btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);