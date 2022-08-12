import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import Pricing from '../../pages/Pricing/Pricing'


import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
  return (
    <div>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjThree}/>
        <Pricing  />
        <HeroSection {...homeObjFour}/>
    </div>
  )
}

export default Home