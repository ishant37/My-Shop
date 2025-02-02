import React from 'react';
import './AboutUs.css'; // You can create custom styles here if needed

export default function AboutUs() {
  return (
    <div className="about-us-container container">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-description">
        Welcome to <strong>Apni Dukan</strong>, your go-to online store for a variety of everyday essentials, mouth fresheners, snacks, beverages, and much more. Our goal is to provide our customers with high-quality products at affordable prices, all while ensuring a convenient shopping experience.
      </p>
      
      <h3 className="about-us-mission-title">Our Mission</h3>
      <p className="about-us-mission-description">
        At Apni Dukan, we aim to make shopping a seamless and enjoyable experience. We work with trusted suppliers to ensure that every product we offer is of the highest quality. Our mission is to be the one-stop destination for all your daily needs, offering a variety of products that are not only reliable but also accessible to all.
      </p>

      <h3 className="about-us-values-title">Our Values</h3>
      <ul className="about-us-values">
        <li><strong>Customer Satisfaction:</strong> We prioritize our customers and strive to meet their expectations with excellent service and products.</li>
        <li><strong>Quality:</strong> We only offer top-notch products, ensuring that our customers receive the best in the market.</li>
        <li><strong>Affordability:</strong> We believe that quality products should be affordable, and we make sure to offer competitive pricing.</li>
        <li><strong>Convenience:</strong> We aim to make your shopping experience as easy and smooth as possible, with an easy-to-navigate platform and fast delivery.</li>
      </ul>

      <h3 className="about-us-contact-title">Contact Us</h3>
      <p className="about-us-contact-description">
        If you have any questions or need assistance, feel free to reach out to us. We are always happy to help!
      </p>
    </div>
  );
}
