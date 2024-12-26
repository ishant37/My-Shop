import React from 'react';
import './Freshner.css'; // Custom styles for horizontal scrolling

export default function Cold() {
  const products = [
    { id: 1, name: "Rajnigandha Silver Pearls", weight: "6 g", price: "₹60", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2bf52d23-8c5e-4da5-82b4-a940c4dce411.jpg?ts=1723793969" },
    { id: 2, name: "Spraymintt IcyMint Mouth Freshener", weight: "15 g", price: "₹99", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243" },
    { id: 3, name: "Chandan Mint Saunf Mouth Freshener", weight: "100 g", price: "₹50", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/071735a6-fd6a-49b0-af08-b634857645ea.jpg?ts=1708591243" },
    { id: 4, name: "Chandan Star 5 in 1 Mouth Freshener", weight: "200 g", price: "₹180", discount: "35% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2217f2ec-4dc7-47ec-b67c-65fe1b848db4.jpg?ts=1707312716" },
    { id: 5, name: "Pass Pass Minty Mix Mouth Freshener", weight: "100 g", price: "₹76", discount: "15% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/07749000-b488-422a-b89c-823d8a06bfcf.jpg?ts=1707312715" },
    { id: 6, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹60", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480578a.jpg?ts=1687333264" },
    // Add more products as needed
    { id: 7, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹245", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322" },
    // Add more products as needed
    { id: 8, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹255", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ad55f7c9-4d80-4a5b-a50a-d307d51bacc1.jpg?ts=1721905089" },
    // Add more products as needed
  ];

  return (
    <div className="fresheners-container">
      <h3 className="mb-3">Cold Drinks & Juices</h3>
      <div className="products-row">
        {products.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
              {product.discount && (
                <div className="discount-badge">{product.discount}</div>
              )}
              <div className="d-flex justify-content-between align-items-center">
                <span>{product.price}</span>
                <button className="btn btn-outline-success">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
