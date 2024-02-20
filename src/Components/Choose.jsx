import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Choosecard from "./Choosecard";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiLamp } from "react-icons/pi";
const Choose = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div className="choosebgimg">
              <div className="overviewtext">
                <h3 className="hcolor">WHY CHOOSE US</h3>
                <h1 className="h">
                  We are Building a
                  <br />
                  Sustainable Future
                </h1>
              </div>
              <div className="choosecard">
                <Row>
                  <Col md="6">
                    <div className="chooseborder">
                      <Choosecard
                        chooseicone={<FaMoneyBillWave size={70} color="red" />}
                        choosecardh="Lower Your energy bills"
                        choosep="The Firm is a pioneering leader in the renewable energy sector, specializing in the development, construction and end-to-end operation of state-of-the-art solar photovoltaic (PV) projects. "
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="chooseborder">
                      <Choosecard
                        chooseicone={<TfiCup size={70} color="red" />}
                        choosecardh="Award winning team"
                        choosep="The Firm is a pioneering leader in the renewable energy sector, specializing in the development, construction and end-to-end operation of state-of-the-art solar photovoltaic (PV) projects. "
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="chooseborder">
                      <Choosecard
                        chooseicone={<PiLamp size={70} color="red" />}
                        choosecardh="Easy Installation"
                        choosep="The Firm is a pioneering leader in the renewable energy sector, specializing in the development, construction and end-to-end operation of state-of-the-art solar photovoltaic (PV) projects. "
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="chooseborder">
                      <Choosecard
                        chooseicone={
                          <RiMoneyDollarCircleLine size={70} color="red" />
                        }
                        choosecardh="Money Back Guarantee"
                        choosep="The Firm is a pioneering leader in the renewable energy sector, specializing in the development, construction and end-to-end operation of state-of-the-art solar photovoltaic (PV) projects. "
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Choose;
