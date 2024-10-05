import React from 'react'
import { Header } from './Header'
import Level from './Level'
import FooterComponent from '../welcomepage/FooterComponent'
import Slide from './Slide'

const Landing = () => {
  return (
    <div>
        <Header/>
        <Level/>
        <br /> <br />
        <Slide/>
        <br /> <br />
        <FooterComponent />
        
    </div>
  )
}

export default Landing