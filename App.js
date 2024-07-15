// let heading1 = (document.querySelector("#title1").innerHTML =
//   "Hello World!!!!!");

// const heading2 = document.createElement("h1");
// heading2.innerHTML = "Hello World!!";

// const heading = React.createElement(
//   "h1",
//   { id: "heading1" },
//   "Hello World React!"
// );
// console.log("Heading here : ", heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("Root here : ", root);
// root.render(heading);

// create nested structure
/* <div id="parent">
  <div id ="child1">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
  <div id ="child2">
    <h3>I'm a h3 tag</h3>
    <h4>I'm a h4 tag</h4>
  </div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I'm an h3 tag"),
    React.createElement("h4", {}, "I'm an h4 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
