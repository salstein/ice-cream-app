import React, { Component } from 'react'
import Cart from '../images/cart.svg'
import goBack from '../images/goBack.svg'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class GoBack extends Component {
    render () {
        return (
            <div>
                <div className='searchComponents'>
                    <div className='searchInput'>
                    <svg onClick={ this.props.history.goBack } xmlns="http://www.w3.org/2000/svg" id='goBackIcon' width="5.371" height="9.394" viewBox="0 0 5.371 9.394">
                    <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M12.87,10.89l3.555-3.552a.671.671,0,1,0-.951-.948l-4.027,4.024a.67.67,0,0,0-.02.926l4.044,4.052a.671.671,0,1,0,.951-.948Z" transform="translate(-11.251 -6.194)" fill="currentColor"/>
                    </svg>
      
                    </div>
                    <Link to='/app/cart'>
                        <div className='cartIcon'>
                            <img src={Cart} />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(GoBack)