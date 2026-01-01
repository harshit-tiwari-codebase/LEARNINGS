// Selecting DOM elements
let body = document.querySelector("#main");
let btn = document.querySelector("button");


// Stranger Things Quotes Array
let arr = [
  "Friends Don’t Lie",
  "Welcome to Hawkins",
  "Upside Down Is Real",
  "Stranger Things",
  "Mind Flayer Is Watching",
  "Eleven Has Powers",
  "Demogorgon Alert",
  "Hawkins Lab Secrets",
  "The Gate Is Open",
  "Never Ending Summer",
  "Bitchin’",
  "Scoops Ahoy 🍦",
  "Starcourt Mall",
  "Running Up That Hill 🎧",
  "Vecna Is Coming",
  "Hellfire Club",
  "Roll the Dice 🎲",
  "Save Will",
  "Lights Are Talking",
  "Season 4 Vibes"
];


// Button Click Event
btn.addEventListener("click", () => {

  // -------- Random values generation --------
  let a = Math.floor(Math.random() * 90);
  let b = Math.floor(Math.random() * 90);
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  let rotate = Math.floor(Math.random() * 360);
  let num = Math.floor(Math.random() * arr.length);


  // Creating Elements
  let element = document.createElement("div");
  let head = document.createElement("h1");


  // Working on TEXT (h1)
  head.textContent = arr[num];
  head.style.fontSize = "20px";
  head.style.fontFamily = "'Arial Black', sans-serif";
  head.style.letterSpacing = "1px";
  head.style.textShadow = "0 0 8px rgba(255,255,255,0.6)";


  // Working on CARD (div)
  element.style.height = "100px";
  element.style.width = "150px";
  element.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  element.style.position = "absolute";
  element.style.top = `${a}%`;
  element.style.left = `${b}%`;
  element.style.borderRadius = "8px";
  element.style.border = "2px solid white";

  // Flex center
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";

  // Rotation
  element.style.transform = `rotate(${rotate}deg)`;


  // Appending elements to DOM
  element.appendChild(head);
  body.appendChild(element);

});
