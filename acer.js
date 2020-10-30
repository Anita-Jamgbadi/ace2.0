
window.addEventListener('load', load);
const loader = document.querySelector('.loader-bg');

function load(){
  loader.className += " hidden"
}


function readMore(dot, moretxt, show){
  let dots = document.querySelector("#"+dot);
  let more = document.querySelector("#"+moretxt);
  let btnTxt = document.querySelector("#"+show)
  console.log(dots, more, btnTxt);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnTxt.innerHTML = "More";
    more.style.display ="none";
  } else {
    dots.style.display = "none"
    btnTxt.innerHTML = "Less";
    more.style.display = "block"
  }
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:4
      },
      600:{
          items:6
      },
      1000:{
          items:9
      }
  }
})
/*
let back = document.getElementById('back');
back.addEventListener('click', goBack);
function goBack() {
  window.history.back()
}
*/
