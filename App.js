/* const header = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      React.createElement("h1", {}, "Child tag")
    ),
  ],
  [
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", {}, "Child tag")
    ),
  ]
); */

//Element creation

const header = React.createElement('h1',{},"First React App");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
