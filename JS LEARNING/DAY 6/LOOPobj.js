const user = {
  name: "harshit",
  age: 20,
  mail: "harshit20112005",
  collage: "ips ies academy",
};

for(let keys of Object.keys(user)){
    console.log(keys);
}

for(let keys of Object.values(user)){
    console.log(keys);
}

for(let keys of Object.entries(user)){
    console.log(keys);
}