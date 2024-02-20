import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import epcimg from '../assets/epc.jpg'
const Epcdetailed = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
 
    <div className='heightbanner'>
    <h1 className='hbanner'>Energize Society Reliable Energy</h1>
    </div>
    </Container>
    </div>
    <Container>
    <div>
  
    <Serviceprops 
    headings="WHO WE ARE"
     heading="Energize Society Reliable Energy"
     paragraph="The Studio takes pride in its exceptional engineering, procurement, and construction (EPC) detailed design capabilities. Our engineers collaborate closely with clients to design solar PV systems that are not only technologically advanced but also customized to the unique requirements of each project. Our designs optimize energy production, enhance system reliability, and incorporate the latest advancements in solar technology.

"
     img={epcimg}

    />
    </div>
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Epcdetailed
