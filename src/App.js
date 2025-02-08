import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Background from './components/Background';
import About from './components/About';
import Container from './components/Container';
import Fresheners from './components/Freshners';
import Cold from './components/Cold_drinks';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';

function HomePage({ cart, setCart, handleRemoveItem }) {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
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
    <div>
      <Background />
      <About />
      <Container cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
      {/* <Catagory /> */}
      <Fresheners cart={cart} setCart={setCart} />
      <Cold cart={cart} setCart={setCart} />
      <Features />
      <button className="btn btn-primary" onClick={() => navigate('/cart')} style={{marginTop:"-70px", marginBottom:"-40px"}}>
        Go to Cart
      </button>
      {/* Remove the Cart component from here */}
    </div>
  );
}


function App() {
  const [cart, setCart] = useState([]);

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        {/* Pass handleRemoveItem to HomePage */}
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} handleRemoveItem={handleRemoveItem} />} />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveItem={handleRemoveItem} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
    </Router>
  );
}

export default App;

