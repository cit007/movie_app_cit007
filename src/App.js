import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
