import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Hl68jHFi89lYtgL55ymRYSasy20pZrrq34kypvrJweTFhYjENrbqCN458wPbmcaANB4miyvlbpQHXrM0PLckJUD00dlfG0rli"
);

const Home = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Home;
