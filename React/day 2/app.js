// let h1 = React.createElement("h1", null, "h1 created with the help of react js ");
// let h2 = React.createElement("h2", null, "h2 created with the help of react js");
// let h3 = React.createElement("h2", {id: "h3ID",className:"h3CLASS",style:{color: "red"}}, "h3 created with the help of react js");
// let div = React.createElement("div", null, [h1,h2,h3]);

let element2 = (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1 style={{ color: "blue" }}>
      HELLO HARSHIT I AM BABEL TO SUPPORT
    </h1>

    <h1 style={{ color: "green" }}>
      HELLO HARSHIT I AM BABEL TO CONVERT YOUR HTML TO JS
    </h1>

    <p>
      Babel converts JSX into React.createElement() behind the scenes.
    </p>
  </div>
);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element2);