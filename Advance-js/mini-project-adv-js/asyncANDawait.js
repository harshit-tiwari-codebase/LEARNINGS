async function github() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    let clutter = "";
   data.forEach((elem) => {
      clutter += `  <div class="card">
        <img src="${elem.avatar_url}" alt="">
        <h3>${elem.login}</h3>
        <a href="${elem. html_url}">Visit Profile</a>
       </div>`
   });
   document.querySelector("#main").innerHTML = clutter;
}

github()


