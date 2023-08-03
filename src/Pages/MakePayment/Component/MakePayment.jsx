
import React, { useState } from 'react';
import axios from '../../../api/axios';
import { PaystackButton } from 'react-paystack';
import { toast, ToastContainer } from 'react-toastify';

export const MakePayment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const [userEmail, setUserEmail] = useState('');



    const  bookCareTakerInfo = JSON.parse(localStorage.getItem('bookCareTakerInfo'));
    const email = localStorage.getItem('parentEmailAddress')

    const jwtToken = localStorage.getItem('jwtToken'); 

    const paystackPublicKey =   'pk_live_96e19dee6710e1eedc64c188693ff871f66b6d87';
    // 'sk_live_811b58a116bdbf7e8933d6aa18b2ed41dd2f1981';
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const paymentDetails = {
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv,
            amount,
            userEmail,
        };

        try {
            const response = await axios.post(
                '/parent/makePayment',
                paymentDetails,
                {
                    headers: {
                        "Authorization": jwtToken,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                toast.success("Payment successful")
                console.log('Payment successful!');
            } else {
                toast.error("Payment Failed")
                console.error('Payment failed!');
            }
        } catch (error) {
            toast.error('An error occurred during payment processing:', error)
            console.error('An error occurred during payment processing:', error);
        }
    };

    const handlePaymentSuccess = (reference) => {
        console.log('Payment successful! Reference:', reference);
    };

    const handlePaymentError = (error) => {
        console.error('Payment failed:', error);
    };

    const handlePaymentClose = () => {
        console.log('Payment closed without completion.');
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            {}
            {}
            <PaystackButton
                text="Make Payment"
                className="paystack-button"
                callback={handlePaymentSuccess}
                close={handlePaymentClose}
                reference={`pay_${Math.floor(Math.random() * 1000000000 + 1)}`}
                email={email} // Customer email
                amount={bookCareTakerInfo.amount * 100}
                publicKey={paystackPublicKey}
            />
              <ToastContainer/>
        </form>
      
    );
};




