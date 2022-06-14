// var link = document.querySelector("link[rel=import]");
// var content = link.import;
// var linkDoc = content.querySelector(".header");
// document.body.appendChild(content.cloneNode(true));

// const spinning = document.querySelector('.header-main-img')
// const spinned = document.querySelector('.spin')

// spinned.addEventListener('click', function () {
//     document.getElementsByClassName('.header-main-img');
// })



const spinThis = document.querySelector('.header-main-img')
const onSpin = document.querySelector('.spin')

onSpin.addEventListener('click', function () {
  // burger.style.display = 'none'
  spinThis.classList.toggle('animate')
})