
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', function(){ 
  console.log("clicked")
  menu.classList.toggle('active');
})


