
window.addEventListener('load', load);
const loader = document.querySelector('.loader-bg');

function load(){
  loader.className += " hidden"
}


function readMore(dot1, more1, show){
console.log(dot1)
  let dots = document.querySelector("#"+dot1)
  let more = document.querySelector("#"+more1);
  let btnTxt = document.querySelector("#"+show);
  console.log(more);

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
