import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import "./Services.css";
function Aboutbtn() {
  return (
    <Dropdown className="drowbgcolor">
      <Dropdown.Toggle id="dropdown-basic" className="textbtnabout">
        About us
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <NavLink to="/about" className="dropmenu">
          About us
        </NavLink>
        <NavLink to="/companydiscripton" className="dropmenu">
          Company Discription
        </NavLink>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Aboutbtn;
