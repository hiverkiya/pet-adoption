import React from "react";
import ReactDOM from "react-dom"
import Pet from "./Pet"
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Augie",
      animal: "Dog",
      breed: "Terrier Papilion",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }), // You can remove these array square brackets as they are optional
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Cat",
      breed: "American Longhair",
    }),
  ]);
};
// We've defined the component here
ReactDOM.render(React.createElement(App), document.getElementById("root")); // Calling the component
