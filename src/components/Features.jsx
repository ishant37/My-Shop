import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-light pt-4 pb-4">
      <div className="container">
        <div className="row">
          {/* Useful Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Value</li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled mt-5">
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQs</li>
              <li>Security</li>
              <li>Mobile</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled mt-5">
              <li>Partner</li>
              <li>Franchise</li>
              <li>Seller</li>
              <li>Warehouse</li>
              <li>Deliver</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-4">
            <h5 className="fw-bold">Categories <span className="text-success">see all</span></h5>
            <ul className="list-unstyled">
              <li>Vegetables & Fruits</li>
              <li>Cold Drinks & Juices</li>
              <li>Bakery & Biscuits</li>
              <li>Dry Fruits, Masala & Oil</li>
              <li>Organic & Premium</li>
              <li>Pharma & Wellness</li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled mt-5">
              <li>Dairy & Breakfast</li>
              <li>Instant & Frozen Food</li>
              <li>Sweet Tooth</li>
              <li>Sauces & Spreads</li>
              <li>Paan Corner</li>
              <li>Cleaning Essentials</li>
            </ul>
          </div>

          <div className="col-md-4 cursor-pointer">
            <ul className="list-unstyled mt-5">
              <li>Munchies</li>
              <li>Tea, Coffee & Health Drinks</li>
              <li>Atta, Rice & Dal</li>
              <li>Chicken, Meat & Fish</li>
              <li>Baby Care</li>
              <li>Home & Office</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-md-6">
            <p>© Blink Commerce Private Limited, 2016-2024</p>
          </div>
          <div className="col-md-6 text-end">
            {/* <p>Download App</p> */}

            <div className="d-inline-block m-1">
              <AiFillInstagram size={30} className="cursor-pointer" style={{ color: '#0e76a8', marginRight: "10px" }} />
              <IoLogoFacebook size={30} className="cursor-pointer" style={{ color: '#0e76a8', marginRight: "10px" }} />
              <FaLinkedin size={30} className="cursor-pointer" style={{ color: '#0e76a8', marginRight: "10px" }} />
              <FaSquareTwitter size={30} className="cursor-pointer" style={{ color: '#0e76a8', marginRight: "10px" }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
