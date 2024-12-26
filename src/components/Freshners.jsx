import React from 'react';
import './Freshner.css'; // Custom styles for horizontal scrolling

export default function Fresheners() {
  const products = [
    { id: 1, name: "Rajnigandha Silver Pearls", weight: "6 g", price: "₹60", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406" },
    { id: 2, name: "Spraymintt IcyMint Mouth Freshener", weight: "15 g", price: "₹99", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080" },
    { id: 3, name: "Chandan Mint Saunf Mouth Freshener", weight: "100 g", price: "₹50", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/102583a.jpg?ts=1687265030" },
    { id: 4, name: "Chandan Star 5 in 1 Mouth Freshener", weight: "200 g", price: "₹180", discount: "35% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/102583a.jpg?ts=1687265030" },
    { id: 5, name: "Pass Pass Minty Mix Mouth Freshener", weight: "100 g", price: "₹76", discount: "15% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/110259a.jpg?ts=1688469108" },
    { id: 6, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹60", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
    // Add more products as needed
    { id: 7, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹245", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2ef05223-ef5e-4ae5-b55c-306feb7f2524.jpg?ts=1716873968" },
    // Add more products as needed
    { id: 8, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: "₹255", discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_487161.jpg?ts=1710347435" },
    // Add more products as needed
  ];

  return (
    <div className="fresheners-container">
      <h3 className="mb-3">Mouth Fresheners</h3>
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
