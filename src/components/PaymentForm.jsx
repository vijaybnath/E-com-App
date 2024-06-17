import React from 'react';
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';

function PaymentForm(){

  const navigate = useNavigate();

  return(
      
    <div className="payment-form">
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="example-1234 5678 9012 3456" />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" placeholder="example-John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" placeholder="example-MM/YY" />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="example-123" />
        </div>
        <button type="submit" onClick={()=>{navigate("/payment")}}>Submit Payment</button>
      </form>
    </div>
  );

}


export default PaymentForm;
