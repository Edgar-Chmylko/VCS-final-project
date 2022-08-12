import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import './HeroSection.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc,headline,description,buttonLabel,img,alt,imgStart
}) {
    
const props = useSpring({ to: { opacity: 1, scale: 1,}, from: { opacity: 0,scale : 0.2 ,},delay: 200, })

  return (
    <div>
        <div className={lightBg ? 'home__hero-section': 'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__hero-row" style={{display:'flex',flexDirection: imgStart === 'start' ? 'row-reverse':'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}> {headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle-dark'}>{description}</p>
                            <Link to='/sign-up'>
                                <Button buttonSize='btn--wide' buttonColor='blue' >{buttonLabel}</Button>
                            </Link>
                            
                        </div>
                    </div>
                    <animated.div className="home__hero-img-wrapper" style ={props}>
                        <img src={img} alt={alt} className="home__hero-img" />
                    </animated.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection