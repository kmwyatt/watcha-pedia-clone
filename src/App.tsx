import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/tv" component={TvPage} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TvDetail} />
      </Switch>
    </Router>
  );
}

export default App;
