let name = document.querySelector("#team-name");
let btn = document.querySelector("#btn");
let outer = document.querySelector("#main");
let inner = document.querySelector("#color");
const trophyEl = document.querySelector("#trophies");

const iplTeams = [
  {
    name: "Chennai Super Kings",
    primaryColor: "#F9CD05",
    secondaryColor: "#0081E9",
    trophies: 5,
  },
  {
    name: "Mumbai Indians",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
    trophies: 5,
  },
  {
    name: "Kolkata Knight Riders",
    primaryColor: "#3A225D",
    secondaryColor: "#F5C542",
    trophies: 2,
  },
  {
    name: "Rajasthan Royals",
    primaryColor: "#EA1A85",
    secondaryColor: "#254AA5",
    trophies: 1,
  },
  {
    name: "Sunrisers Hyderabad",
    primaryColor: "#F26522",
    secondaryColor: "#000000",
    trophies: 1,
  },
  {
    name: "Gujarat Titans",
    primaryColor: "#0B1C2D",
    secondaryColor: "#CBA135",
    trophies: 1,
  },
  {
    name: "Lucknow Super Giants",
    primaryColor: "#0057E2",
    secondaryColor: "#A72056",
    trophies: 0,
  },
  {
    name: "Royal Challengers Bengaluru",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000",
    trophies: 0,
  },
  {
    name: "Delhi Capitals",
    primaryColor: "#004C93",
    secondaryColor: "#E31837",
    trophies: 0,
  },
  {
    name: "Punjab Kings",
    primaryColor: "#D71920",
    secondaryColor: "#A7A9AC",
    trophies: 0,
  },
];

// 🏆 Trophy animation function
function animateTrophies(count) {
  let current = 0;
  trophyEl.textContent = `🏆 ${current}`;

  if (count === 0) {
    trophyEl.textContent = "No trophies yet 😔";
    return;
  }

  const interval = setInterval(() => {
    current++;
    trophyEl.textContent = `🏆 ${current}`;
    trophyEl.style.transform = "scale(1.2)";

    setTimeout(() => {
      trophyEl.style.transform = "scale(1)";
    }, 150);

    if (current === count) clearInterval(interval);
  }, 300);
}

btn.addEventListener("click", () => {
  let team = iplTeams[Math.floor(Math.random() * iplTeams.length)];

  // Team name
  name.textContent = team.name;

  // Backgrounds
  outer.style.backgroundColor = team.primaryColor;
  inner.style.backgroundColor = team.secondaryColor;

  // Detect dark color
  const isDark = (color) => {
    const c = color.substring(1);
    const r = parseInt(c.substr(0, 2), 16);
    const g = parseInt(c.substr(2, 2), 16);
    const b = parseInt(c.substr(4, 2), 16);
    return 0.299 * r + 0.587 * g + 0.114 * b < 120;
  };

  let start = team.primaryColor;
  let end = team.secondaryColor;

  if (isDark(team.secondaryColor)) {
    start = "#ffffff";
    end = team.primaryColor;
  }

  // Gradient text
  name.style.background = `linear-gradient(90deg, ${start}, ${end})`;
  name.style.webkitBackgroundClip = "text";
  name.style.backgroundClip = "text";
  name.style.color = "transparent";
  name.style.webkitTextStroke = "1px rgba(255,255,255,0.4)";
  name.style.textShadow = "2px 2px 10px rgba(0,0,0,0.7)";

  // 🏆 Animate trophies (✅ correct place)
  animateTrophies(team.trophies);
});
