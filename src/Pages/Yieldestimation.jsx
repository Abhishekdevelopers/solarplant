import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
import Serviceprops from '../Components/Serviceprops'
import yieldimg from '../assets/yieldimg.jpg'
const Yieldestimation = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
    <div className='heightbanner'>
    <h1 className='hbanner'>Yielde Stimation </h1>
    </div>
    </Container>
    </div>
    <Container>
    <Serviceprops
       heading="Yield Estimation"
      paragraph="At our core, we are driven by a steadfast commitment to both our clients and our business. We recognize that the success of our business is intricately intertwined with the satisfaction and success of our clients. Every decision we make, every strategy we implement, and every product or service we offer is driven by a profound care for our clients' needs and aspirations. We understand that fostering strong and lasting client relationships is not just good business practice, it's a fundamental principle that defines our identity. By prioritizing the well-being and growth of our clients, we simultaneously nurture the growth and prosperity of our own business, forging a symbiotic relationship that fuels our shared journey towards excellence."
      img={yieldimg}
    />
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Yieldestimation
