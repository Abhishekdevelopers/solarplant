import React from 'react'
import Subnavbar from '../Components/Subnavbar'
import Midnavbar from '../Components/Midnavbar'
import comming from '../assets/comming.avif'
import  Navbar  from '../Components/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer'
import Touch from '../Components/Touch'
import Navbar1 from '../Components/Navbar1'
const Blog = () => {
  return (
    <>
    <Subnavbar/>
    <Midnavbar/>
    {/* <Navbar/> */}
    <Navbar1/>
    <div className='banner'>
    <Container>
    
    <div className='heightbanner'>
    <h1 className='hbanner'>Blog </h1>
    </div>
    </Container>
    </div>
    <Container>
    <div>
      <img src={comming} alt='' width="100%" ></img>
    </div>
      </Container>
      <Touch/>
      <Footer/>
    </>
  )
}

export default Blog
