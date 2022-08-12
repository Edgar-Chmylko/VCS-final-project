import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import Button from '../Button/Button'

function PricingCard({img,alt,serviceName,price,duration,transactions,cashback,limit}) {
  return (
    <IconContext.Provider value={{color:"#fff",size:64}}>

                        <Link to='/sign up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                <img src={img} alt={alt}/>
                                </div>
                                <h3>{serviceName}</h3>
                                <h4>{price}</h4>
                                <p>{duration}</p>
                                <ul className="pricing__container-features">
                                    <li>{transactions}</li>
                                    <li>{cashback}</li>
                                    <li>{limit}</li>
                                </ul>
                                <Link to='/sign-up'>
                                  <Button buttonSize='btn--wide' buttonColor='blue'>
                                      Choose Plan
                                  </Button>
                                </Link>
                            </div>
                        </Link>

    </IconContext.Provider>
  )
}

export default PricingCard