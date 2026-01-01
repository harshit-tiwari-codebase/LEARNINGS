let inc = document.querySelector("#inc");
let dnc = document.querySelector("#dnc");
let head = document.querySelector("h1");
console.log(head)

let a = 0;

inc.addEventListener('click',() => {
a++;
head.textContent = a;

})


    dnc.addEventListener('click',() => {
        if(a>0){a--;
head.textContent = a;}


})
