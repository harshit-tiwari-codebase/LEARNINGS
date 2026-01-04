let main = document.querySelector("#main")
let crsr = document.querySelector("#cursor")

main.addEventListener('mousemove',(coordinate) =>{
 
  crsr.style.top = coordinate.y+"px"
  crsr.style.left = coordinate.x+"px"
    
})