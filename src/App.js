import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
