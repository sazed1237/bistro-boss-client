
import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    console.log(stripePromise)

    
    return (
        <div>

            <DashboardTitle heading={'Payment'} subHeading={'Please Pay '}></DashboardTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;