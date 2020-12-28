import React, {Component} from 'react'
import GoBack from './goBack'
import { Link } from 'react-router-dom'
import { PaystackButton } from 'react-paystack';

  

class Summary extends React.Component {
    render () {
        const config = {
            reference: (new Date()).getTime(),
            email: "user@example.com",
            amount: this.props.state.total *100*470,
            publicKey: 'pk_test_515e568a3267848696a5c06a954c86ebc35ce92d',
          }; 
         // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
      };
  
      // you can call this function anything
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
      }
  
      const componentProps = {
          ...config,
          text: 'PROCEED TO PAYMENT',
          onSuccess: (reference) => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
        let deliveryDetails = <div className='deliveryDetails'>
            <p>{ this.props.name }</p>
        </div>
        return (
            <div className='component'>
                <GoBack />
                <div className='center summary'><h2>SUMMARY</h2></div>
                {/* { deliveryDetails } */}
                <div id='cartPriceDetails'>
                    <div class='cartPriceIndividual'>
                        <div>Subtotal</div>
                        <div>${ this.props.state.subtotal }</div>
                    </div>
                    <div class='cartPriceIndividual'>
                        <div>Delivery Fee</div>
                        <div>${ this.props.state.deliveryFee }</div>
                    </div>
                    <div class='cartPriceIndividual'>
                        <div>Total</div>
                        <div>${ this.props.state.total}</div>
                    </div>
                </div>
                        <div className='center checkout'>
                            <div className='nextButton summaryButton'><PaystackButton {...componentProps} /></div>
                        </div>
            </div>
        )
    }
}

export default Summary