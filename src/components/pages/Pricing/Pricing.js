
import './Pricing.css'
import { IconContext } from 'react-icons/lib'
import PricingCard from '../../PricingCard/PricingCard'
import { diamondPlan, goldPlan, starterPlan } from '../HomePage/Data'
import { useSpring, animated } from 'react-spring'


function Pricing() {
    const props = useSpring({ to: { opacity: 1, scale: 1,}, from: { opacity: 0,scale : 0.2 ,},delay: 100, })
  return (
    
    <IconContext.Provider value={{color:"#fff",size:64}}>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                <h1 className='pricing__heading'>Pricing</h1>
                <animated.div style ={props}>
                    <div className="pricing__container">
                        <PricingCard {...starterPlan}/>
                        <PricingCard {...goldPlan}/>
                        <PricingCard {...diamondPlan}/>
                    </div>
                </animated.div>
                </div>
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default Pricing