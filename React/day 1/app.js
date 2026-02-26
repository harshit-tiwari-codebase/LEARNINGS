let h1 = React.createElement("h1", null, "h1 created with the help of react js ");
let h2 = React.createElement("h2", null, "h2 created with the help of react js");
let h3 = React.createElement("h2", {id: "h3ID",className:"h3CLASS",style:{color: "red"}}, "h3 created with the help of react js");
let div = React.createElement("div", null, [h1,h2,h3]);


let container = document.querySelector("#root");

let root = ReactDOM.createRoot(container);

root.render(div);