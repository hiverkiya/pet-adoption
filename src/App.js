import ReactDOM from "react-dom"
import SearchParams from "./SearchParams"
import {StrictMode, useState} from "react"
import { BrowserRouter as Router,Route, Switch , Link} from "react-router-dom"
import Details from "./Details"
import ThemeContext from '.ThemeContext'
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
{ const theme = useState("pink")
  return(
    <ThemeContext.Provider value = {theme}>
  <div>
    
    
    <Router>
    <header><Link to="/"><h1>
      Cute Pets
    </h1></Link>
    </header>
      <Switch>
      <Route path="/details/:id">
        <Details theme={theme}/>
        </Route>
        <Route path="/"><SearchParams/></Route>
        </Switch>
      </Router>    
    
    {/*<Pet name="Augie" animal="Dog" breed="Terrier Papilion"/>
    <Pet name="Luna" animal="Dog" breed="Havanese"/>
     <Pet name="Charlie" animal="Cat" breed="American Longhair"/>
*/}
  </div>
  </ThemeContext.Provider>
)
}
// ReactDOM.render(React.createElement(App), document.getElementById("root")); // Calling the component
ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById("root")); 
