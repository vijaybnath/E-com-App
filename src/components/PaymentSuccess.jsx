import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="payment-success">
      <h1>Payment Successful!</h1>
      <p>Your payment has been processed successfully.</p>
      <button onClick={() => window.location.href = '/'}>Return to Home</button>
    </div>
  );
}

export default PaymentSuccess;
