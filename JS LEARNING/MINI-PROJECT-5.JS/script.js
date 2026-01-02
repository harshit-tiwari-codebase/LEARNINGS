let img = document.querySelector('img')
let icon = document.querySelector("#love")

img.addEventListener('dblclick',()=>{
    icon.style.opacity = "1";
    icon.style.transform = " translate(-50% , -50% ) scale(1.8)  rotate(0deg)"
   
  setTimeout(() => {
    icon.style.transform =
      "translate(-50%, -300%) scale(1) rotate(60deg)";
  }, 800);

  setTimeout(() => {
      icon.style.opacity = "0";
      icon.style.transform = " translate(-50% , -50% ) scale(0)  rotate(-60deg)"
  }, 1000);
 
})
