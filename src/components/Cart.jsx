import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, handleRemoveItem }) {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const onClick = () => {
    alert("Thanks for visiting");
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.img}  // ✅ Fix this
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }} 
                  />
                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-0">₹{item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-4">Total: ₹{totalPrice}</h4>
          <button className="btn btn-success" onClick={onClick}>Pay Online</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
