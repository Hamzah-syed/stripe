import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./checkoutForm.css";
import { StripeCardElement, StripeCardNumberElement } from "@stripe/stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async () => {
    const res = await fetch("/.netlify/functions/stripe", {
      method: "post",
    });
    const data = await res.json();
    console.log(data);
    const result = await stripe?.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements?.getElement(CardElement) as
          | StripeCardElement
          | StripeCardNumberElement
          | { token: string },
        billing_details: {
          name: "hamzah",
        },
      },
    });

    console.log(result);
  };

  return (
    <div>
      <div className="formContainer">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <button className="btnPrimary" onClick={handleSubmit}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
