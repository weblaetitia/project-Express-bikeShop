
document.querySelector('#checkout-btn').addEventListener('click', function () {
    console.log(sessionStripeID)
    var stripe = Stripe('pk_test_51GyDhJKxXt7jTvFxRN3FzxWsNAzJGGsal7OdKril68VCk648TqkC5uC9Tg0VPmzfyRLB5rJ0LYkSUhkqVComQY8700dHHweMQ3');
    stripe.redirectToCheckout({
        sessionId: sessionStripeID
    }).then(function (result) {
  });
})