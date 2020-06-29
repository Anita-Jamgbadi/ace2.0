var back = document.getElementById('back');
back.addEventListener('click', goBack);
function goBack() {
  window.history.back()
}

window.addEventListener('load', load);
const loader = document.querySelector('.loader-bg');

function load(){
  loader.className += " hidden"
}