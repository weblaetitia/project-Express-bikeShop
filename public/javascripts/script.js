$(document).ready(function () {
setTimeout(function () {
  var stripe = Stripe('pk_test_51GyDhJKxXt7jTvFxRN3FzxWsNAzJGGsal7OdKril68VCk648TqkC5uC9Tg0VPmzfyRLB5rJ0LYkSUhkqVComQY8700dHHweMQ3');
    stripe.redirectToCheckout({
        sessionId: sessionStripeID
    })
  }, 1500);
}, 1500);
