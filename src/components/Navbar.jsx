import React from 'react';
import "./Image.css"
export default function Navbar({ backgroundColor }) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning  ">
      <div className="container-fluid text-white">
        <a className="navbar-brand" href="/">Apni Dukan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>
            <form className="d-flex justify-content-center  " role="search">
              <input className="form-control me-2" type="search" placeholder="Enter your item" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul >
          <a className='p-2 g-col-6' href='/'>Cart</a>
        </div>
      </div>
    </nav>

  );
}
