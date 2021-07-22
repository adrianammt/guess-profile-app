import { Switch, Route } from "react-router-dom";
import AgeMain from "../pages/AgeMain";
import GenderMain from "../pages/GenderMain";
import NationalityMain from "../pages/NationalityMain";

export default function Main() {
  return (
    <main className="App-Content">
      <Switch>
        <Route path="/Age">
          <AgeMain />
        </Route>
        <Route path="/Gender">
          <GenderMain />
        </Route>
        <Route path="/Nationality">
          <NationalityMain />
        </Route>
      </Switch>
    </main>
  );
}
