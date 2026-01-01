let inner = document.querySelector("#inner")
let btn = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let h2 = document.querySelector("h2")
let grow = 0;
let h1 = document.querySelector("h1")

btn.addEventListener('click',()=>{
    let num = 50+ Math.floor(Math.random()*50);

  let a = setInterval(()=>{
    btn.style.pointerEvents = "none";
    grow++;
    h2.textContent = grow+'%';
    inner.style.width = `${grow}%`
   },num)
    setInterval(()=>{
        clearInterval(a);
        btn.textContent = "DOWNLOADED";
        btn.style.opacity = "0.5"
    },num*100)
})

