let btn = document.querySelector("#btn");

let head = document.querySelector("h2");
let check = 0 ;

btn.addEventListener('click',()=>{
 if(check == 0){
  head.textContent = "FRIENDS";
  head.style.color = "green";
  check =1;
  btn.textContent = "REMOVE FRIEND"
 }
 else{
   head.textContent = "STRANGER";
  head.style.color = "red";
  btn.textContent = "ADD FRIEND"
  check = 0;
 }
  
})