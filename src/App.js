import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom"

const Home = (props) => {
  
  return (
    <div>
      <h1 className="text-center">Welcome</h1>
    </div>
  )
}

const ColorNum = (props) => {
  const { variable } = useParams();

  return (
    <div>
      { 
        (parseInt(variable)) ?
        <div className="text-center">
          <h1>The number is: { variable }</h1>
        </div> :
        <div className="text-center">
          <h1>The word is: { variable }</h1>
        </div>
      }
    </div>
  )
}

const StrColorColor = (props) => {
  const { variable, color1, color2 } = useParams();

  return (
    <div>
      {
        <div style={{backgroundColor: `${color2}`}}  className="text-center">
          <h1 style={{color: `${color1}`}}>The word is: { variable }</h1>
        </div>
      }
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:variable">
          <ColorNum />
        </Route>
        <Route exact path="/:variable/:color1/:color2">
          <StrColorColor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;