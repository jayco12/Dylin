import React from 'react'
import { Wwa} from './banner';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Mission } from './mission';
function About() {
  return (
    <div className='h-96 lg:h-screen w-full '>
    <Wwa/>
    <Mission/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default About