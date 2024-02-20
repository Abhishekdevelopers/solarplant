import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import absolar from '../assets/absolar.jpg'
import  Navbar  from '../Components/Navbar'
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import team1 from '../assets/team-1-4.png'
import team2 from '../assets/team-1-2.png'
import team3 from '../assets/team-1-1.png'
import {MdPhone} from 'react-icons/md'
import {BsLightningChargeFill} from 'react-icons/bs'
import Navbar1 from '../Components/Navbar1'

const About = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
   
    <div className='heightbanner'>
    <h1 className='hbanner'>About Us </h1>
    </div>
    </Container>
    </div>
    <Container>
    <div className='abmarg'>
    <Row>
      <Col md="6">
      <div className='abtext'>
      <h3 className='hcolor'>WHO WE ARE</h3>
              <h1>Energize Society Reliable Energy</h1>
              <p>Ut tellus dolor, dapibus eget, elementum vel, ifend cursus eleifend, elit. Aenea ifendn auctor wisi et ur na. Aliquam er at volutpat. Duis ac tuifendrpis.</p>
              </div>
      </Col>
      <Col md="6">
      <img src={absolar} alt='' className='absolar1'/>
      </Col>
    </Row>
    </div>
    <div className='abmarg'>
    <Row>
      <Col md="6">
      <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What solar panels do Solarsense</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>solar panels now that the Feed-in Tariff has closed?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What solar panels do Solarsense install?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How to Add Battery Backup to an Existing?</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      <Col md="6">
      <img src={absolar} alt='' className='absolar1'/>
      </Col>
    </Row>
    </div>
    
    <div className='abmarg'>
    <Row>
            <Col>
                <div className='bestofferheader'>
                <BsLightningChargeFill size={80} color='red' className='lighticon'/>
                {/* <img src={light} alt='' width={80} className='imgbest'/> */}
                
                <h3 className='hcolor'>TEAM MEMBERS</h3>
                <h1 className='hsec'>
                Meet Our Experts</h1>
                </div>
            </Col>
        </Row>
    <Row>
      <Col md="4">  <Card className='cardstyle'>
      <Card.Img variant="top" src={team1} />
      <Card.Body>
        <Card.Title>Jerzzy Lamot</Card.Title>
        <Card.Text>
         Solar Expert
        </Card.Text>
        <MdPhone className='icone2'/>+11234562228
      </Card.Body>
    </Card>
    </Col>
      <Col md="4">
      <Card className='cardstyle'>
      <Card.Img variant="top" src={team2} />
      <Card.Body>
      <Card.Title>Marlee Jessica</Card.Title>
        <Card.Text>
         Company Founder
        </Card.Text>
        <MdPhone className='icone2'/>+11234562228
      </Card.Body>
    </Card>
      </Col>
      <Col md="4">
      <Card className='cardstyle'>
      <Card.Img variant="top" src={team3} />
      <Card.Body>
      <Card.Title>Mark Rokki</Card.Title>
        <Card.Text>
         Strategic Planning
        </Card.Text>
        <MdPhone className='icone2'/>+11234562228
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </div>
 
    </Container>
 
      <Touch/>
      <Footer/>
    </>
  )
}

export default About
