let val = document.querySelectorAll(".elem");
console.log(val);   // ✔️ NodeList milegi

val.forEach((elem) => {

    elem.addEventListener('mouseenter',()=>{
       elem.childNodes[3].style.opacity = "1";
       elem.childNodes[1].style.color = "#ff00004b";
    })
    elem.addEventListener('mouseleave',()=>{
       elem.childNodes[3].style.opacity = "0";
       elem.childNodes[3].style.transform = "translate() scale(0)";
         elem.childNodes[1].style.color = "#ffffffff";

    })
    elem.addEventListener('mousemove',(coordinate)=>{
       elem.childNodes[3].style.left = coordinate.x+"px";
    //    elem.childNodes[3].style.top = coordinate.y+"px";
    })


 
});
