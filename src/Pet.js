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
  import { Link } from "react-router-dom"
  const Pet = ({
name,
animal,
breed,
images,
location,
id

  }) =>
  { let hero =`http://pets-images.dev-apis.com/pets/none.jpg`
  if(images.length){
  hero=images[0]
  }
    return(
      /*<div>
        <h2>
          {props.name}
        </h2>
        <h3>
          {props.animal}
        </h3>
        <h3>
          {props.breed}
        </h3>
      </div>*/
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name}/>
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </Link>
    )
  }
  export default Pet