import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HMkU1G9VLiOLXVeYd0ky9MNMSVinv301mHnKGB2Z6AFRnqqrYCOz5DECXnfMEKVo86HgF0V6sWrYiKI4W5vXpJ9005x1p4EmO';
    const onToken = token => {
        console.log(token);
        alert('お支払いが完了しました！')
    }
    return (
        <StripeCheckout 
            label='お支払い'
            name='T Shopping co.jp'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`合計金額は $${price}円です`}
            amount={priceForStripe}
            panelLabel='お支払い'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
