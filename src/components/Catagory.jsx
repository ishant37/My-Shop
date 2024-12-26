import React from 'react';
import "./catagory.css"
const categories = [
  {
    name: 'Vegetables',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa72730cc68e.png&w=384&q=75',
  },
  {
    name: 'Fruits',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa72735f0f6c.png&w=384&q=75',
  },
  {
    name: 'Milk & Dairy Items',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7889875762.png&w=384&q=75',
  },
  {
    name: 'Bread, Bakery & Eggs',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b3354f777.png&w=384&q=75',
  },
  {
    name: 'Breakfast Items',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b32ed50e4.png&w=384&q=75',
  },
  {
    name: 'Atta, Rice & Dal',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa78924e87df.png&w=384&q=75',
  },
  {
    name: 'Tea, Coffee & Nutritional Drinks',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff495c280410e.png&w=384&q=75',
  },
  {
    name: 'Biscuits, Namkeens & Chips',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b35079b41.png&w=384&q=75',
  },
  {
    name: 'Beauty & Personal Care',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b34ad636d.png&w=384&q=75',
  },
  {
    name: 'Flower & Plants',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff7b77ed46bae.png&w=384&q=75',
  },
  {
    name: 'Oral Care',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b328c3f31.png&w=384&q=75',
  },
  {
    name: 'Bath, Body & Hair',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b3235bbfd.png&w=384&q=75',
  },
  {
    name: 'Cold drinks & Juices',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b31d11a76.png&w=384&q=75',
  },
  {
    name: 'Detergents & Home Cleaning',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b312d5daa.png&w=384&q=75',
  },
  {
    name: 'Chocolates & Mithai',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b30ca150e.png&w=384&q=75',
  },
  {
    name: 'Honey,Sauces & Spreads',
    image: 'https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ffa7b29e5179a.png&w=384&q=75',
  },
];
export default function Catagory() {
  return (
    <div className="container">
      <h2 className="">Categories</h2>
      <div className="row my-4">
        {categories.map((category) => (
          <div className="col-md-4 mb-4 custom-size" key={category.name}>
            <div className="my-3">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.name}
              />
              <div className="text-black fs-6 fw-light">
                <h5 className=" ">{category.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <img src="https://img.crofarm.com/otipyecom/home/web-download-banner.png" alt="" className='img ' />
      </div>
    </div>
  );
}