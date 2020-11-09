const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.handler = async (event, context) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "usd",
    metadata: { integration_check: "accept_a_payment" },
  });
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
