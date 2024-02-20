import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import bannerimg from "../assets/banner.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import over1 from "../assets/over1.jpg";
import over2 from "../assets/over2.jpg";
import { BsCheckCircle } from "react-icons/bs";
const Overview = () => {
  return (
    <>
      <Container>
        <div className="mainoverview">
          <Row>
            <Col md="5">
              <div className="overviewtext">
                <h3 className="hcolor">COMPANY OVERVIEW</h3>
                <h1 className="h">Company Description</h1>
                <p>
                  The Firm is a pioneering leader in the renewable energy
                  sector, specializing in the development, construction and
                  end-to-end operation of state-of-the-art solar photovoltaic
                  (PV) projects. With a strong commitment to sustainability and
                  innovation, we are dedicated to transforming the energy
                  landscape by harnessing the energy of the sun. The Firm is a
                  pioneering leader in the renewable energy sector, specializing
                  in the development, construction and end-to-end operation of
                  state-of-the-art solar photovoltaic (PV) projects. With a
                  strong commitment to sustainability and innovation, we are
                  dedicated to transforming the energy landscape by harnessing
                  the energy of the sun.{" "}
                </p>
              </div>
            </Col>
            <Col md="4">
              <div>
                <img src={bannerimg} alt="" className="overimg" />
              </div>
            </Col>

            <Col md="3">
              <div className="overviewtext1">
                <div className="progress1">
                  <h1 className="h">130,540</h1>
                  <ProgressBar now={100} label={`${100}%`} />
                  <p>Tonnes CO2 emissions evoided</p>
                </div>
                <div className="progress1">
                  <h1 className="h">150,041</h1>
                  <ProgressBar now={70} label={`${70}%`} />
                  <p>Tonnes CO2 emissions evoided</p>
                </div>
                <div className="progress1">
                  <h1 className="h">2,840</h1>
                  <ProgressBar now={60} label={`${60}%`} />
                  <p>Tonnes CO2 emissions evoided</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="mainover1">
              <Col md="6">
                <div className="suboversec">
                  <img src={over1} alt="" className="suboversec1" />
                  <img
                    src={over2}
                    alt=""
                    width={250}
                    height={350}
                    className="suboversec2"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="suboversec3">
                  <div>
                    <h1 className="h">
                      Technical-legal report for the diagnosis of solar
                      photovoltaics
                    </h1>
                    <p>
                      Presenting a state-of-the-art solution in the renewable
                      energy sector, our Solar Photovoltaic Diagnosis
                      Legal-Technical Report offers a comprehensive and
                      meticulous assessment of solar photovoltaic (PV) systems.
                      Developed by combining technical expertise and legal
                      acumen, this service is designed to provide accurate,
                      detailed and legally defensible assessments of solar PV
                      systems.
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Overview;
