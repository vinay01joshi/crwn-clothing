import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //converting doller to cents coz stripe only want cents
    const priceForStripe = price * 100;
    const publishbleKey = 'pk_test_Mb2MlHS3iuvOh1z9wvlNb2vN005CBzdwyt';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

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