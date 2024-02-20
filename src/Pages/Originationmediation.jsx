import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import orgimg from '../assets/orgimg.jpg'
const Originationmediation = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>

    <div className='heightbanner'>
    <h1 className='hbanner'>Origination Mediation </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Serviceprops
       heading="Land Origination and Mediation"
      paragraph="At The Studio, we possess a deep understanding of the intricacies involved in identifying and acquiring suitable land for solar PV projects. Our skilled team of experts engages in thorough site assessments, regulatory compliance evaluations, and community consultations to ensure the seamless origination of land parcels, fostering harmony between nature, community, and technology."
      img={orgimg}
    />
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Originationmediation
