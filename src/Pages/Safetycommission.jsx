import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import safetyimg from '../assets/safetyimg.jpg'
const Safetycommissioning = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>

    <div className='heightbanner'>
    <h1 className='hbanner'>Safety Commissioning </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Serviceprops
        heading="Safety and commissioning"
      paragraph="Safety is paramount in every aspect of our operations. We uphold the highest safety standards during construction, installation, and commissioning phases. Our comprehensive safety protocols prioritize the well-being of our team, stakeholders, and the surrounding environment. Our thorough commissioning process guarantees that each solar PV system is optimized for peak performance, adhering to industry best practices and regulatory standards."
      img={safetyimg}
    />
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Safetycommissioning
