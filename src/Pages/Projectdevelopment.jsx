import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import devimg from '../assets/devimg.jpg'
const Projectdevelopment = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>

    <Container>
   
    <div className='heightbanner'>
    <h1 className='hbanner'>Project Development </h1>
    </div>
    </Container>
    </div>
    <Container>
    <div>
    <Serviceprops 
     heading="Project Development"
     paragraph="Our robust project development division is at the forefront of conceptualizing and structuring solar PV projects that maximize efficiency and minimize environmental impact. We meticulously navigate through feasibility studies, permitting processes, and interconnection negotiations to deliver bankable projects that align with our clients' objectives and the broader goal of a greener future."
     img={devimg}

    />
    </div>
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Projectdevelopment
