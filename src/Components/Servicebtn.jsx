import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import "./Serviceprops.css";
import "./Services.css";
function BasicExample() {
  return (
    <div className="menutext">
      <Dropdown className="drowbgcolor">
        <Dropdown.Toggle id="dropdown-basic">Services</Dropdown.Toggle>

        <Dropdown.Menu>
          <NavLink to="/projectdevelopment" className="dropmenu">
            Project Development
          </NavLink>

          <NavLink to="/projectmanagement" className="dropmenu">
            Project Management
          </NavLink>

          <NavLink to="/originationmediation" className="dropmenu">
            Origination And Mediation
          </NavLink>

          <NavLink to="/safrtycommission" className="dropmenu">
            Safety And Commissioning
          </NavLink>

          <NavLink to="/yieldestimation" className="dropmenu">
            Yield Estimation
          </NavLink>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BasicExample;
