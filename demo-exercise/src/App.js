import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Tree from "./sub2/Tree.js";
import Spheres from "./sub1/Spheres";
import BarChart from "./sub3/BarChart.js";

function App() {
  return (
    <Router>
      <nav>
            <Link to="/Tree">Demo 1</Link>
            <Link to="/Spheres">Demo 2</Link>
        
<Link to="/BarChart ">Demo 3</Link>
      </nav>
      <Switch>
        <Route path="/Tree" component={<Tree />} /> 
        <Route path="/Spheres" component={<Spheres />} /> 
        <Route path="/BarChart" component={<BarChart />} />
      </Switch>
    </Router>
  );
}

export default App;
