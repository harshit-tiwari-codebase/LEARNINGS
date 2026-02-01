async function github() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  let clutter = "";

  data.forEach((elem) => {
    clutter += `
      <div class="card" data-username="${elem.login}">
        <img src="${elem.avatar_url}" alt="">
        <h3>${elem.login}</h3>
        <a href="${elem.html_url}" target="_blank">Visit Profile</a>
      </div>
    `;
  });

  document.querySelector("#main").innerHTML = clutter;

  // 🔥 cards create hone ke baad event lagao
  addCardEvents();
}

function addCardEvents() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", async function () {
      const username = card.dataset.username;

      const user = await fetch(`https://api.github.com/users/${username}`);
      const result = await user.json();

      
    });
  });
}

github();
