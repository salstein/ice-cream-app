import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Onboarding2 extends Component{
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = () => {
        this.props.submit(this.state.name)
    }
    render () {
        return(
            <div className='onboarding'>
                <div className='container'>
                    <h1 id='onboardingLogo'>CreamStore</h1>
                    <p id='intro'>Hi there! :) <br /> What'd you like me to call you?</p>
                    <div>
                        <form onSubmit={this.submit}>
                            <input name='name' placeholder='Please enter a name' onChange={this.handleChange}/>
                        </form>
                    </div>
                    <div>
                        <Link to='/app/flavors' className='nextButton' onClick={this.submit}>GO!</Link>
                    </div>
                    <div id='onboardingCircles'>
                        <NavLink className='onboardingCircle' exact to='/' ><div></div></NavLink>
                        <NavLink className='onboardingCircle' to='/onboarding2' ><div></div></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Onboarding2