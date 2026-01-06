var hitrn = 0;

function bubble() {
  var clutter = "";
  for (var i = 1; i <= 78; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble"><h2>${num}</h2></div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  setInterval(function () {
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }
    else{
      document.querySelector("#pbottom").innerHTML = `<h1 id = center>GAME OVER </h1>`;  
    }
    }, 1000);
}

function hit(){
    hitrn = Math.floor(Math.random() * 10
);
    document.querySelector("#hit").textContent = hitrn;
} 



var sc =0;
function harshit (){
  
  sc = sc +10; 
  document.querySelector("#scValue").textContent = sc;
}


document.querySelector("#pbottom").addEventListener("click",function(val){
   var clickedNum = Number(val.target.textContent);
   if(clickedNum === hitrn){
    harshit();
    hit();
    bubble();
   }
});

hit();
bubble();
runTimer();
