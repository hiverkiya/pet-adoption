import React from "react"
const Pet = (props) => {
    return React.createElement("div", {}, [
      //Calling an array of elements
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
  };
  export default Pet