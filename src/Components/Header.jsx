import React from "react";
import Midnavbar from "./Midnavbar";
import Navbar1 from "./Navbar1";
import Subnavbar from "./Subnavbar";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Subnavbar />
      <Midnavbar />
      <Navbar1 />
      <div className="banner">
        <Container>
          <div className="bannertext">
            <h1 className="h">Investing in Clean Energy Generation</h1>
            <p className="bannertext2">
              We believe we can make a difference to this world, to this very
              earth we live.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
