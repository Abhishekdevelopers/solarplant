import React, { useState } from "react";
import "../App.css";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
      <section className="mb-3">
        <MDBNavbar dark bgColor="info">
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              className="third-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated3(!showAnimated3)}
            >
              <div className={`animated-icon3 ${showAnimated3 && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated3}>
          <div className="bg-light shadow-3 p-4">
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 1
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              Link 2
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}
