import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/collapsible">Demo 1</Link>
          </li>
          <li>
            <Link to="/vertex">Demo 2</Link>
          </li>
          <li>
            <Link to="/demo3">Demo 3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/collapsible">
          <collapsible />
        </Route>
        <Route path="/vertex">
          <vertex />
        </Route>
        <Route path="/demo3">
          <demo3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
