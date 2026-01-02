let arr = [
  { dp: "img/ell.webp", story: "img/ell.webp" },
  { dp: "img/dustin.webp", story: "img/dustin.webp" },
  { dp: "img/lucass.webp", story: "img/lucass.webp" },
  { dp: "img/will.webp", story: "img/will.webp" },
  { dp: "img/mick.webp", story: "img/mick.webp" },
];

let clutter = "";
let storiyan = document.querySelector("#storiyan");
let fullscreen = document.querySelector("#fullscreen");
let outer = document.querySelector("#bar")
let inner = document.querySelector("#bar-inner")

arr.forEach((elem, idx) => {
  clutter += `
    <div class="story">
      <img id="${idx}" src="${elem.dp}" alt="">
    </div>
  `;
});
storiyan.innerHTML = clutter;

let grow = 0;
let timer; // interval reference

storiyan.addEventListener("click", (dets) => {

  grow = 0;                    //loader ko wapis click pr width 0  krne k liye taki wo zero se shuru ho
  inner.style.width = "0%";   //ye uske visual reset krega 
  outer.style.opacity = "1";
  inner.style.opacity = "1";

  let storyVal = arr[dets.target.id].story;

  fullscreen.style.display = "block";
  fullscreen.style.backgroundImage = `url(${storyVal})`;

  // loader ka code 
  timer = setInterval(() => {
    grow++;
    inner.style.width = `${grow}%`;
  }, 25);

  setTimeout(() => {
    clearInterval(timer);  //interval ko stop krne ka condition he ye 
    fullscreen.style.display = "none";
    outer.style.opacity = "0";
    inner.style.opacity = "0";
  }, 2500);

});
