import React, { Component } from 'react'
import GoBack from './goBack'
import { Link } from 'react-router-dom'

class Saved extends Component {
    // state = {
    //     subtotal: subtotal,
    //     deliveryFee: deliveryFee,
    //     total: this.state.deliveryFee +this.state.subtotal
    // }
    render () {        
        let saved = this.props.saved;
        const savedList = saved.map(save => {
            return (
                <div className='cartItems' key={save.name}>
                    <div className='cartPicture'><img src={ save.picture } /></div>
                    <div>
                        <div className='cartName'>{ save.name }</div>
                        <div className='cartPrice'>${ save.price }</div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className='cartComponent component'>
                    <GoBack />
                    <div>
                        <h3 className='center'>Saved Items</h3>
                        { savedList }
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved