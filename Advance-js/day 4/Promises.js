// const p1 = fetch("https://api.github.com/users");


// const p2 = p1.then((data)=>{
//     return data.json();
    
// })

// p2.then((Response)=>{
//     console.log(Response);
    
// })


// Promise chaining
fetch("https://api.github.com/users")
  .then((data) => {
    return data.json();   // converts response to JSON
  })
  .then((response) => {
    // response = actual users data (array)

    const parent = document.querySelector("#first");
     
    for(let i=0; i<response.length ; i++ ){
         const elem = document.createElement("img");

    elem.src = response[i].avatar_url;  // ✅ correct variable
    elem.style.width = "120px";
    elem.style.height = "120px";
    elem.style.objectFit = "cover"

    parent.append(elem);
    }
  })
  .catch((error) => {
    console.log("Error:", error);
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
