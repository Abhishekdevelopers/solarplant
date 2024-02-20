import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Blogcard from "./Blogcard";
import news from "../assets/news.jpg";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
const Blog = () => {
  return (
    <>
      <Container>
        <div className="blog">
          <Row>
            <Col>
              <div className="bestofferheader">
                <BsLightningChargeFill
                  size={80}
                  color="red"
                  className="lighticon"
                />
                <h3 className="hcolor">BLOG AND NEWS</h3>
                <h1 className="hsec">Recent News</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Blogcard
                img1={news}
                pdate="January 05,2022"
                comment={<BiMessageRoundedDetail size="30" color="red" />}
                commenttext="21 Comment"
                views={<LiaEyeSolid size="30" color="red" />}
                viewstext="42k Views"
                pheading="British Solar Renewables receives planning current"
                img2={news}
                byname="by Kevin Perry"
              />
            </Col>
            <Col md="6">
              <Blogcard
                img1={news}
                pdate="Augest 10,2022"
                comment={<BiMessageRoundedDetail size="30" color="red" />}
                commenttext="41 Comment"
                views={<LiaEyeSolid size="30" color="red" />}
                viewstext="42k Views"
                pheading="How to Add Battery Backup to an Existing Grid-Tied"
                img2={news}
                byname="by Kevin Perry"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Blog;
