import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_g0HJ5kkL1QtxNLRYBuhe9fCN';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckout;