// maine yeh array banaya hai jisme saare characters ka data hai
// har object me character ka name aur uski image ka link rakha hai
// baad me isi data se images aur search suggestions dono banenge
const arr = [
  { name: "Eleven", image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d" },
  { name: "Mike Wheeler", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
  { name: "Dustin Henderson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "Lucas Sinclair", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
  { name: "Max Mayfield", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { name: "Will Byers", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { name: "Steve Harrington", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
  { name: "Robin Buckley", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { name: "Nancy Wheeler", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { name: "Eddie Munson", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" }
];

// yahan maine wo saare elements pakde hain jinpar mujhe JS lagani hai
let input = document.querySelector("#text-box");        // search input box
let overlay = document.querySelector("#overlay");       // background blur / dark overlay
let result = document.querySelector("#search-result"); // search suggestion container
let main = document.querySelector("main");              // jahan images dikhani hain

// yeh variable maine images ka HTML store karne ke liye banaya hai
let clutter = "";

// yahan maine array par loop lagaya hai taaki saari images page par show ho jaaye
arr.forEach((val) => {
  clutter += `
    <img 
      src="${val.image}" 
      alt="${val.name}"
      referrerpolicy="no-referrer"
    >
  `;
});

// yahan maine saari images ek saath main ke andar inject kar di hain
main.insertAdjacentHTML("beforeend", clutter);

// jab input box par focus aaye (user click kare)
// tab maine overlay show kar diya taaki background thoda dull lage
input.addEventListener("focus", () => {
  overlay.style.display = "block";
});

// jab input box se focus hat jaaye
// tab overlay aur search result dono hide kar diye
input.addEventListener("blur", () => {
  overlay.style.display = "none";
  result.style.display = "none";
});

// yeh main logic hai search suggestion ka
// jab bhi user input box me type karega, yeh code chalega
input.addEventListener("input", () => {
  let value = input.value.toLowerCase(); // input ko lowercase me convert kiya
  let suggestions = "";                  // har baar naye suggestions ke liye empty rakha

  // yahan maine array ke har name ko input value se match karwaya
  arr.forEach((obj) => {
    // agar name input se start hota hai tabhi suggestion banega
    if (obj.name.toLowerCase().startsWith(value)) {
      suggestions += `
        <div class="inner">
          <h1>
            <i class="ri-search-line"></i>
            ${obj.name}
          </h1>
        </div>
      `;
    }
  });

  // agar input box empty hai to suggestions nahi dikhane
  if (value === "") {
    result.style.display = "none";
    result.innerHTML = "";
  } 
  // warna matching suggestions show kar do
  else {
    result.style.display = "flex";
    result.innerHTML = suggestions;
  }
});
