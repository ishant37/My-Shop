import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart = [], addToCart, items = [] }) => {
  return (
    <div className="">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid text-white">
          <Link className="navbar-brand" to="/">Apni Dukan</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarText" 
            aria-controls="navbarText" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              
            </ul>
            {/* Cart Icon with Count */}
            <Link className="btn btn-dark p-2" to="/cart">
              🛒 Cart ({cart.length})
            </Link>
          </div>
        </div>
      </nav>

      {/* Flash Deals Section */}
      {/* <h2 className="mt-3">🔥 Flash Deal: Avail any 4 Deals!</h2> */}
      <div className="row">
        {items.length > 0 && items.map((item) => (
          <div key={item.id} className="col-md-3 mb-3">
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="card-title">₹{item.price}/{item.weight}</h5>
              </div>
              <div className="card-body text-center">
                <img 
                  src={item.image} 
                  className="card-img-top img-fluid" 
                  alt={item.name} 
                  style={{ height: "150px", objectFit: "cover" }} 
                />
                <h5 className="mt-2">{item.name}</h5>
                <button className="btn btn-primary mt-2" onClick={() => addToCart(item)}>
                  ➕ Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
