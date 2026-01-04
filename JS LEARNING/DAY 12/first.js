let element = document.getElementById("first");

element.addEventListener('click', ()=>{
    element.textContent = "i am BTECH student";
    
})


let element1 = document.getElementById("second");
let element2 = document.getElementById("third");

element1.addEventListener('mouseenter', ()=>{
    element1.textContent = "i am MBA student";
    
})
element2.addEventListener('mouseleave', ()=>{
    element2.textContent = "i am BBA student";

})