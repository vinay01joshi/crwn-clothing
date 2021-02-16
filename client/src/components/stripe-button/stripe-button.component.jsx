import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
    //converting doller to cents coz stripe only want cents
    const priceForStripe = price * 100;
    const publishbleKey = 'pk_test_Mb2MlHS3iuvOh1z9wvlNb2vN005CBzdwyt';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => { alert('Payment Successfull') })
            .catch(error => {
                console.log('Payment Error', JSON.parse(error));
                alert('There was an issue with payment. Please make sure you are using valid Credit Card.')
            });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='vinjo.ml Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is  $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishbleKey}
        />
    )
}

export default StripeCheckoutButton;