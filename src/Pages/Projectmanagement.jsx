import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import mangimg from '../assets/mangimg.jpg'
const Projectmanagement = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
 
    <div className='heightbanner'>
    <h1 className='hbanner'>Project Management </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Serviceprops 
      heading="Project Management"
      paragraph="Energize Society Reliable Energy A hallmark of The Studio ' success is our unwavering commitment to project management excellence. From procurement and logistics to resource allocation and scheduling, our experienced project managers navigate complex workflows with finesse. We prioritize effective communication, risk mitigation, and timely execution to ensure that each project meets its milestones within budget and on schedule."
      img={mangimg}
    />
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Projectmanagement
