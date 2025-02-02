import React from 'react';
import './About.css'; // Optional: If you have custom styles

export default function About({ width }) {
  return (
    <>
      <div className="text-center my-4">
        <h1>About</h1>
      </div>
      <div className="fruits d-flex container flex-wrap justify-content-center">
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/54370/pexels-photo-54370.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Kiwi"
          />
          <div className="card-body">
            <p className="card-text">
              A small, brown, fuzzy fruit with vibrant green flesh and tiny black seeds. Kiwi is tangy, sweet, and packed with vitamin C, fiber, and antioxidants, often enjoyed on its own or in fruit salads.
            </p>
          </div>
        </div>
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Strawberry"
          />
          <div className="card-body">
            <p className="card-text">
              A bright red, heart-shaped fruit known for its sweetness and juicy texture. Strawberries are rich in vitamin C, antioxidants, and are popular in desserts, smoothies, and salads.
            </p>
          </div>
        </div>
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Watermelon"
          />
          <div className="card-body">
            <p className="card-text">
              A refreshing, hydrating fruit with a high water content, perfect for hot summer days. It has a sweet, juicy flesh that is usually red or pink and is rich in vitamins A and C.
            </p>
          </div>
        </div>
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/768092/pexels-photo-768092.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Watermelon"
          />
          <div className="card-body">
            <p className="card-text">
              A refreshing, hydrating fruit with a high water content, perfect for hot summer days. It has a sweet, juicy flesh that is usually red or pink and is rich in vitamins A and C.
            </p>
          </div>
        </div>
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Watermelon"
          />
          <div className="card-body">
            <p className="card-text">
              A refreshing, hydrating fruit with a high water content, perfect for hot summer days. It has a sweet, juicy flesh that is usually red or pink and is rich in vitamins A and C.
            </p>
          </div>
        </div>
        <div className="card my-4 mx-4" style={{ width: '18rem' }}>
          <img
            src="https://images.pexels.com/photos/247592/pexels-photo-247592.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="Watermelon"
          />
          <div className="card-body">
            <p className="card-text">
              A refreshing, hydrating fruit with a high water content, perfect for hot summer days. It has a sweet, juicy flesh that is usually red or pink and is rich in vitamins A and C.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
