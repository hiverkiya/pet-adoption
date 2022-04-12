import ReactDOM from "react-dom"
import SearchParams from "./SearchParams"

/*const App = () => {
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
};*/
// We've defined the component here
const App=()=>
{ return(
  <div>
    <h1>
      Cute Pets
    </h1>
    
    <SearchParams/>
    {/*<Pet name="Augie" animal="Dog" breed="Terrier Papilion"/>
    <Pet name="Luna" animal="Dog" breed="Havanese"/>
     <Pet name="Charlie" animal="Cat" breed="American Longhair"/>
*/}
  </div>
)
}
// ReactDOM.render(React.createElement(App), document.getElementById("root")); // Calling the component
ReactDOM.render(<App/>, document.getElementById("root")); 
