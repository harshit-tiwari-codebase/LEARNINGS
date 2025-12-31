
//creating new html element using js 
const newelem = document.createElement("h2");
newelem.textContent=("I AM FROM IPS IES ACADEMY");
//Assigning id to new element 
newelem.id = "second";
newelem.style.backgroundColor = "red"
//selecting the element jiiske pehle ya baad me naya element lagana hai
const elem = document.getElementById("first");
elem.after(newelem);

const newelem2 = document.createElement("h5");
console.log(newelem2);
newelem2.textContent = "MY CURRENT CGPA IS 9.1";

newelem.after(newelem2)



const newelem3 = document.createElement('h3');
console.log(newelem2);

const list1  = document.createElement("li")
list1.textContent = "mobile";

const list2  = document.createElement("li")
list2.textContent = "laptop";

const unordered = document.getElementById("listing");
unordered.append(list1)
unordered.append(list2)

let arr = ['harshit','pratyush','naba','kanish','atul'];

let fragment = document.createDocumentFragment();
let unorgan = document.getElementById("lisitngtech");

for (let name of arr) {
    const list3 = document.createElement("li");
    list3.textContent = name;
    fragment.append(list3); 
}

unorgan.append(fragment); 
