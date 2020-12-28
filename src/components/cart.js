import React, { Component } from 'react'
import GoBack from './goBack'
import { Link } from 'react-router-dom'

class Cart extends Component {
    // state = {
    //     subtotal: subtotal,
    //     deliveryFee: deliveryFee,
    //     total: this.state.deliveryFee +this.state.subtotal
    // }
    cartSummary = (subtotal, deliveryFee, total) => {
        this.props.updateCartSummary(subtotal, deliveryFee, total);
    }
    render () {        
        let carts = this.props.cart;
        let orderTotal = (prices) => {
            return prices.reduce((sum, i) => {
                return sum + (i.price * i.cartQuantity)
            }, 0)
        }
        let plus = (cartItem) => {
            cartItem.cartQuantity = cartItem.cartQuantity +1;
            subtotal = orderTotal(carts);
            this.forceUpdate();
        }
        let minus = (cartItem) => {
            if (cartItem.cartQuantity > 0) {
                cartItem.cartQuantity = cartItem.cartQuantity -1;
                subtotal = orderTotal(carts);
                this.forceUpdate();
            }
        }
        let subtotal = orderTotal(carts);
        let deliveryFee = 0
        if (subtotal > 0) {
            deliveryFee = 5
        }
        const cartList = carts.map(cartItem => {
            return (
                <div className='cartItems' key={cartItem.name}>
                    <div className='cartPicture'><img src={ cartItem.picture } /></div>
                    <div>
                        <div className='cartName'>{ cartItem.name }</div>
                        <div className='cartPrice'>${ cartItem.price }</div>
                        <div className='quantity'>
                            <div className='minus quantityChange' onClick={() => {minus(cartItem)} }>-</div>
                            <div className='quantityValue'><input type='number' ref={cartItem.cartQuantity} value={ cartItem.cartQuantity } disabled/></div>
                            <div className='plus quantityChange' onClick={() => {plus(cartItem)} }>+</div>
                        </div>
                        <div className='nextButton' onClick={() => {this.props.deleteFromCart(cartItem)} }>delete</div>
                    </div>
                </div>
            )
        })
        const priceSummary = cartList.length ? (
            <div>
                    <div id='cartPriceDetails'>
                        <div class='cartPriceIndividual'>
                            <div>Subtotal</div>
                            <div>${ subtotal }</div>
                        </div>
                        <div class='cartPriceIndividual'>
                            <div>Delivery Fee</div>
                            <div>${ deliveryFee }</div>
                        </div>
                        <div class='cartPriceIndividual'>
                            <div>Total</div>
                            <div>${ subtotal +deliveryFee}</div>
                        </div>
                    </div>
                    <Link to='/app/summary' onClick={() => {this.cartSummary(subtotal, deliveryFee, subtotal +deliveryFee)}}>
                        <div className='center checkout'>
                            <div className='nextButton summaryButton'>CHECKOUT</div>
                        </div>
                    </Link>
            </div>
        ):(<h3 style={{textAlign: 'center', color: '#193155'}}>Cart is Empty</h3>)
        return (
            <div>
                <div className='cartComponent component'>
                    <GoBack />
                    <div>
                        { cartList }
                    </div>
                    { priceSummary }
                    {/* <div id='cartPriceDetails'>
                        <div class='cartPriceIndividual'>
                            <div>Subtotal</div>
                            <div>${ subtotal }</div>
                        </div>
                        <div class='cartPriceIndividual'>
                            <div>Delivery Fee</div>
                            <div>${ deliveryFee }</div>
                        </div>
                        <div class='cartPriceIndividual'>
                            <div>Total</div>
                            <div>${ subtotal +deliveryFee}</div>
                        </div>
                    </div>
                    <Link to='/app/summary' onClick={() => {this.cartSummary(subtotal, deliveryFee, subtotal +deliveryFee)}}>
                        <div className='center checkout'>
                            <div className='nextButton summaryButton'>CHECKOUT</div>
                        </div>
                    </Link> */}
                </div>
            </div>
        )
    }
}

export default Cart