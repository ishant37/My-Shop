import React from 'react';
import './Pricing.css'; // Optional: for custom styles for the pricing page

const Pricing = () => {
  return (
    <div className="pricing-container container">
      <h3 className="mb-5">Our Pricing Plans</h3>

      <div className="row">
        {/* Pricing Card 1 */}
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-body">
              <h4 className="card-title">Basic Plan</h4>
              <p className="card-text">Ideal for small businesses</p>
              <h5>₹499/month</h5>
              <ul>
                <li>Access to basic features</li>
                <li>1 user account</li>
                <li>Customer support via email</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-body">
              <h4 className="card-title">Standard Plan</h4>
              <p className="card-text">Perfect for growing businesses</p>
              <h5>₹999/month</h5>
              <ul>
                <li>All Basic Plan features</li>
                <li>Up to 5 user accounts</li>
                <li>Customer support via chat and email</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div className="col-md-4">
          <div className="card pricing-card">
            <div className="card-body">
              <h4 className="card-title">Premium Plan</h4>
              <p className="card-text">For large enterprises and teams</p>
              <h5>₹1999/month</h5>
              <ul>
                <li>All Standard Plan features</li>
                <li>Unlimited user accounts</li>
                <li>24/7 customer support</li>
              </ul>
              <button className="btn btn-primary" >Get Started</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pricing;
