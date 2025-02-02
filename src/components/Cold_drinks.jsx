import React from 'react';
import './Freshner.css'; // Custom styles for horizontal scrolling

const coldDrinks = [
  { id: 1,quantity:1, name: "Cocunut Water", weight: "6 g", price: 60, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2bf52d23-8c5e-4da5-82b4-a940c4dce411.jpg?ts=1723793969" },
    { id: 2,quantity:1, name: "Bisleri Water", weight: "15 g", price: 99, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243" },
    { id: 3,quantity:1, name: "Bisleri Club soda", weight: "100 g", price: 50, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/071735a6-fd6a-49b0-af08-b634857645ea.jpg?ts=1708591243" },
    { id: 4,quantity:1, name: "Red Bull", weight: "200 g", price: 180, discount: "35% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2217f2ec-4dc7-47ec-b67c-65fe1b848db4.jpg?ts=1707312716" },
    { id: 5,quantity:1, name: "Real Juice", weight: "100 g", price: 76, discount: "15% OFF", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/07749000-b488-422a-b89c-823d8a06bfcf.jpg?ts=1707312715" },
    { id: 6,quantity:1, name: "Swing", weight: "100 g", price: 60, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480578a.jpg?ts=1687333264" },
    // Add more products as needed
    { id: 7,quantity:1, name: "Coco Cola", weight: "100 g", price: 245, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322" },
    // Add more products as needed
    { id: 8,quantity:1, name: "Chandan Special Masala Mouth Freshener", weight: "100 g", price: 255, discount: "", img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ad55f7c9-4d80-4a5b-a50a-d307d51bacc1.jpg?ts=1721905089" },
    // Add more products as needed
  ];

const snacks = [
  { id: 4, quantity: 1, name: "Lays Chips", weight: "50 g", price: 30, discount: "10% OFF", img: "https://imgs.search.brave.com/Tsjz6Pzjuq9LSGfxLA3tXVThRK0Eea4US0saGeCTYwQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvTGF5/cy1DaGlwcy1UcmFu/c3BhcmVudC1CYWNr/Z3JvdW5kLnBuZw" },
  { id: 5, quantity: 1, name: "Kurkure Masala", weight: "40 g", price: 25, discount: "", img: "https://imgs.search.brave.com/zGA3Gvsiem0jKv_J2KoUOgEK6R_37U7t96MMm3XqiJc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9za3Uu/YW55Y2FydC5jb20v/bS9pL3dlZWUtLTEw/MjQ4NT1zNzIwLWM9/Y3YtY3JvcGF1dG9h/d3NwcmRfMTUud2Vi/cA" },
  { id: 6, quantity: 1, name: "Bourbon Biscuits", weight: "150 g", price: 45, discount: "5% OFF", img: "https://imgs.search.brave.com/5xNWN7KNwdrJgXevLzVTnWv9GdYrVrSNytmTxV8pKag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFZaUdPd0dhSUwu/anBn" },
  { id: 4, quantity: 1, name: "Lays Chips", weight: "50 g", price: 30, discount: "10% OFF", img: "https://imgs.search.brave.com/Tsjz6Pzjuq9LSGfxLA3tXVThRK0Eea4US0saGeCTYwQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvTGF5/cy1DaGlwcy1UcmFu/c3BhcmVudC1CYWNr/Z3JvdW5kLnBuZw" },
  { id: 5, quantity: 1, name: "Kurkure Masala", weight: "40 g", price: 25, discount: "", img: "https://imgs.search.brave.com/zGA3Gvsiem0jKv_J2KoUOgEK6R_37U7t96MMm3XqiJc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9za3Uu/YW55Y2FydC5jb20v/bS9pL3dlZWUtLTEw/MjQ4NT1zNzIwLWM9/Y3YtY3JvcGF1dG9h/d3NwcmRfMTUud2Vi/cA" },
  { id: 6, quantity: 1, name: "Bourbon Biscuits", weight: "150 g", price: 45, discount: "5% OFF", img: "https://imgs.search.brave.com/5xNWN7KNwdrJgXevLzVTnWv9GdYrVrSNytmTxV8pKag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFZaUdPd0dhSUwu/anBn" },
];

export default function Cold({ cart, setCart }) {
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="container fresheners-container">
      <h3 className="mb-3">Cold Drinks & Juices</h3>
      <div className="products-row">
        {coldDrinks.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
              {product.discount && <div className="discount-badge">{product.discount}</div>}
              <div className="d-flex justify-content-between align-items-center">
                <span>₹{product.price}</span>
                <button className="btn btn-outline-success" onClick={() => addToCart(product)}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-3 mt-4">Snacks</h3>
      <div className="products-row">
        {snacks.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
              {product.discount && <div className="discount-badge">{product.discount}</div>}
              <div className="d-flex justify-content-between align-items-center">
                <span>₹{product.price}</span>
                <button className="btn btn-outline-success" onClick={() => addToCart(product)}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
