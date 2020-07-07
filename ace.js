/*var back = document.getElementById('back');
back.addEventListener('click', goBack);
function goBack() {
  window.history.back()
}
*/
window.addEventListener('load', load);
const loader = document.querySelector('.loader-bg');

function load(){
  loader.className += " hidden"
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

