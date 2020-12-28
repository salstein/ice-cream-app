import React from 'react'
import stallImage from '../images/icecream-01.png'
import { NavLink, Link } from 'react-router-dom'

const Onboarding1 = () => {
    return(
        <div className='onboarding'>
            <div className='container'>
                <h1 id='onboardingLogo'>CreamStore</h1>
                <img id='stallImage' src={ stallImage } alt='Shop Stall Image'/>
                <p id='welcome'>Welcome</p>
                <div id='onboardingCircles'>
                    <NavLink className='onboardingCircle' exact to='/' ><div></div></NavLink>
                    <NavLink className='onboardingCircle' to='/onboarding2' ><div></div></NavLink>
                </div>
                <div>
                    <Link to='/Onboarding2' className='nextButton'>NEXT</Link>
                </div>
            </div>
        </div>
    )
}

export default Onboarding1