 // 1️⃣ Select h1 by ID
    const heading1 = document.querySelector("#first");

    // 2️⃣ Show hidden span text
    const span = document.querySelector("#first span");
    span.style.display = "inline";

    // 3️⃣ Change second h2 text
    const h2Second = document.getElementById("second");
    h2Second.innerText = "Dhanteras ke din hi aayega!";

    // 4️⃣ Select all elements with class 'third'
    const thirdElements = document.querySelectorAll(".third");
    console.log(thirdElements);

    // 5️⃣ Style all list items
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach(item => {
      item.style.color = "blue";
      item.style.fontWeight = "bold";
    });

    // 6️⃣ Click event on h1
    heading1.addEventListener("click", () => {
      alert("Strike Date: 18 October 🚨");
    });

    // 7️⃣ Change second h2 ("Hello JI")
    const allH2 = document.querySelectorAll("h2");
    allH2[1].style.color = "green";

    // 8️⃣ Change body background dynamically
    document.body.style.backgroundColor = "lightyellow";