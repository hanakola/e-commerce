import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IEHMYEtjB6C9Nd5SnwPIZoBplvX4Qf1ffJOvHsd30g3tt48IhECvf1CPTCTjoPJcDifY2H2ujnfl3EhEIX9ut0D00gr6FsLVw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      currency="GBP"
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
