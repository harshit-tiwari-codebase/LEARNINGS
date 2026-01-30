// const p1 = fetch("https://api.github.com/users");


// const p2 = p1.then((data)=>{
//     return data.json();
    
// })

// p2.then((Response)=>{
//     console.log(Response);
    
// })

fetch("https://api.github.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  })
  .then((users) => {
    const parent = document.querySelector("#first");

    if (!parent) {
      throw new Error("Parent element not found");
    }

    parent.innerHTML = ""; // clear old content (optional)

    users.forEach((user) => {
      const img = document.createElement("img");

      img.src = user.avatar_url;
      img.alt = user.login;
      img.style.width = "120px";
      img.style.height = "120px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "50%";
      img.style.margin = "8px";
      
      
      parent.appendChild(img);
    });
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

//convert to json
  let j1 = 
{ 
    name:"harshit",
    age:20,
    address:"chandralok sq"
}

let json = JSON.stringify(j1);

console.log(json);


fetch("https://api.open-meteo.com/v1/forecast?latitude=28.67&longitude=77.23&current_weather=true")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


  // creating promises 
  const orderFood = new Promise((resolve, reject) => {
  const restaurantOpen = false;

  if (restaurantOpen) {
    resolve("🍕 Food delivered successfully");
  } else {
    reject("❌ Restaurant is closed");
  }
});

orderFood
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
