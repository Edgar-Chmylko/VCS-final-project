import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import { homeObjThree } from '../HomePage/Data'


function Services() {
  return (
    <div>
        <HeroSection {...homeObjThree}/>
    </div>
  )
}

export default Services