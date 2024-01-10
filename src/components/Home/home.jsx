import React from 'react'
import { Banner } from '../Home/banner';
import { Grow } from '../Home/grow';
import { Fraction } from '../Home/fraction';
import { Estate } from '../Home/estate';
import { Contact } from './Contact';
import { Footer } from './Footer';
function Home() {
  return (
    <div className='h-96 lg:h-screen w-full '>
      <Banner/>
      <Grow/>
      <Estate/>
      <Fraction/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home