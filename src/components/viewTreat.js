import React, { Component } from 'react'
import GoBack from './goBack'
import {connect} from 'react-redux'

class ViewTreat extends Component {
    addToCart = (treat) => {
        if (treat.cartQuantity >= 1) {
            treat.cartQuantity++;
        } else {
            treat.cartQuantity = 1;
            this.props.addToCart(treat)
            console.log(treat)
        }
        this.props.notification(treat.name)
    }
    addToSaved = (treat) => {
        if (treat.quantity >= 1) {
            console.log('Has already been added')
        } else {
            treat.quantity = 1;
            this.props.addToSaved(treat)
            console.log(treat)
        }
    }
    render () {
        const {treat} = this.props
        let image = <div id='treatImage'>
            <img src={ treat.picture }/>
        </div>;
        let description = <div className='treatDescriptions'>
            <div id='treatName' className='treatDescription'>{ treat.name }</div>
            <div id='treatDescription' className='treatDescription'>{ treat.description }</div>
            <div id='treatPrice' className='treatDescription'>${ treat.price }</div>
            <div className='cartButtons'>
                <div className='nextButton cartButton' onClick={() => {this.addToCart(treat)} }>ADD TO CART</div>
                <div className='nextButton cartButton' onClick={() => {this.addToSaved(treat)} }><svg xmlns="http://www.w3.org/2000/svg" width="18.858" height="16.501" viewBox="0 0 18.858 16.501">
                <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M17.027,3.376a5.037,5.037,0,0,0-6.873.5l-.726.748L8.7,3.877a5.036,5.036,0,0,0-6.873-.5,5.289,5.289,0,0,0-.365,7.657l7.127,7.359a1.155,1.155,0,0,0,1.668,0l7.127-7.359a5.285,5.285,0,0,0-.361-7.657Z" transform="translate(0.001 -2.248)" fill="#fff"/>
                </svg>
                </div>
            </div>
            </div>
        return (
            <div>
                <div className='component'>
                    <GoBack />
                    { image }
                </div>
                <div>{ description }</div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let name = ownProps.match.params.name;
    return {
        treat: state.treats.find(treat => {
            return (
                name === treat.name
            )
        })
    }
}
export default connect(mapStateToProps)(ViewTreat)