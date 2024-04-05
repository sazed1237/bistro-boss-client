import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {


    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) { 
            
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret) 
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

console.log(clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('payment error', error)
            setSuccess('')
            setError(error.message)
        } else {
            console.log('payment Method', paymentMethod)
            setError('')
        }


        // confirm Card Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirm Error', confirmError.message)
            setSuccess('')
            setError(confirmError.message)
        }
        else {
            console.log('Payment Intent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                setSuccess('Payment Success')
                setTransactionId(paymentIntent.id)


                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'

                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data)
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Thank You",
                        text: "Your Payment is Successful.",
                        icon: "success"
                    });
                }
                refetch()
                
                // navigate to payment history page
                navigate('/dashboard/paymentHistory')
            }



        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button 
                className='mt-5 bg-green-600 px-4 rounded text-white' type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {error ? <p className="text-red-500"><small>{error}</small></p>
                :
                <p className="text-green-500"><small>{success}</small></p>
            }
            {transactionId && <p className="text-green-500"><small>{transactionId}</small></p>}
        </form>
    );
};

export default CheckoutForm;