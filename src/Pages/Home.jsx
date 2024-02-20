import React from 'react'
import Header from '../Components/Header'
import Overview from '../Components/Overview'
import Solarsolution from '../Components/Solarsolution'
import Cardprice from '../Components/Cardprice'
import Choose from '../Components/Choose'
import Casestudies from '../Components/Casestudies'
import Accorions from '../Components/Accorions'
import Blog from '../Components/Blog'
import Touch from '../Components/Touch'
import Footer from '../Components/Footer'

import { Button } from 'react-bootstrap'

const Home = () => {

  return (
    <>
    <Header/>
    
 <Overview/>
     <Solarsolution/>
     <Cardprice/>
      <Choose/>
    <Casestudies/>
 
    <Accorions/>
    <Blog/>
    <Touch/>
  <Footer/> 
     {/* <Slider/> */}
    </>
  )
}

export default Home