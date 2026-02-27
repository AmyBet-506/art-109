// console.log("working")


//html element select
//selects IDs 
let header = document.querySelector("#header");
let changeHeaderButton = document.querySelector("#changeHeaderButton");
let changeThemeButton = document.querySelector("#changeThemeButton");
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")


//change header with button

changeHeaderButton.addEventListener("click", ()=>{
header.innerHTML = "POW!!!!";
}
)

//changing text
function changeButtonText(){
  if(document.body.classList.contains("dark")){
    changeThemeButton.textContent = "Switch to Light Theme";
  } else {
    changeThemeButton.textContent = "Switch to Dark Theme";
  }
}

//color toggle
changeThemeButton.addEventListener("click", ()=>{
  //toggle body color
  document.body.classList.toggle("dark");
  changeButtonText();
})


//popups 
img1.addEventListener("click", ()=>{
  img2.classList.remove("hidden")
})

img2.addEventListener("click", ()=>{
  img3.classList.remove("hidden")
})