import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-Header">
      <Switch>
        <Route path="/Age">
          <h1>Guess your Age!</h1>
        </Route>
        <Route path="/Gender">
          <h1>Guess your Gender!</h1>
        </Route>
        <Route path="/Nationality">
          <h1>Guess your Nationality!</h1>
        </Route>
      </Switch>
    </header>
  );
}
