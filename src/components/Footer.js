import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="App-Footer">
      <NavLink className="App-Footer__NavItem" to="/age">
        Age
      </NavLink>
      <NavLink className="App-Footer__NavItem" to="/gender">
        Gender
      </NavLink>
      <NavLink className="App-Footer__NavItem" to="Nationality">
        Nationality
      </NavLink>
    </footer>
  );
}
