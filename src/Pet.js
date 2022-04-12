/*const Pet = (props) => {
    return React.createElement("div", {}, [
      //Calling an array of elements
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
  };
*/
  // JSX
  const Pet = (props) =>
  {
    return(
      <div>
        <h2>
          {props.name}
        </h2>
        <h3>
          {props.animal}
        </h3>
        <h3>
          {props.breed}
        </h3>
      </div>
    )
  }
  export default Pet