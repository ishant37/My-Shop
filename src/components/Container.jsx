// import React from "react";

// export default function Container({ cart, setCart }) {
//   const items = [
//     { id: 1, quantity: 1, name: "Bottle Gourd (Medium)", price: 9, weight: "450 g", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9a7546c0f0c.png&w=750&q=75" },
//     { id: 2, quantity: 1, name: "Tomato Desi", price: 23, weight: "500 g", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff62ae6727fad.png&w=750&q=75" },
//     { id: 3, quantity: 1, name: "Onion", price: 43, weight: "1 kg", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff62b1aceeb29.png&w=750&q=75" },
//     { id: 4, quantity: 1, name: "Potato Fresh Crop", price: 33, weight: "1 kg", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff7a0eb9e951a.png&w=750&q=75" },
//     { id: 5, quantity: 1, name: "Tender Coconut", price: 51, weight: "1 pc", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9ad96f6f263.png&w=750&q=75" },
//     { id: 6, quantity: 1, name: "Banana Medium", price: 19, weight: "3 pcs", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9adbca57be4.png&w=750&q=75" },
    
//     // New Categories
    // { id: 7, quantity: 1, name: "Milk (1L)", price: 55, weight: "1L", img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    // { id: 8, quantity: 1, name: "Cheese Slices", price: 120, weight: "10 pcs", img: "https://imgs.search.brave.com/RnpDc6PLc0NoSJxg52VG2VrTTohlsdy4F1sQKisE_dA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuLnJldGFp/bC5icm9va3NoaXJl/cy5jb20vY2VsbC9i/YmM1ZTMwOC0wMTRj/LTRjM2QtYTNhYi03/NjA4MmRiZDc1ZjQu/anBlZw" },
    // { id: 9, quantity: 1, name: "Butter", price: 90, weight: "500g", img: "https://plus.unsplash.com/premium_photo-1700088853545-e6529edb2d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1dHRlcnxlbnwwfHwwfHx8MA%3D%3D" },
    // { id: 10, quantity: 1, name: "Potato Chips", price: 45, weight: "150g", img: "https://imgs.search.brave.com/CrWfhAjPMNG_EHzQhpdozaPM_9bVhN2cPwHrmRL3Arc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY3/NDM5Njc5L3Bob3Rv/L3BvdGF0by1jaGlw/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NjNHQXI3YWkz/NncxR0d0MmNpVjUt/cnZvVmpmZTBPNE5q/anZLaVI0T0dTST0" },
    // {id: 25, quantity: 1, name: "Shampoo", price: 300, weight: "500ml", img: "https://imgs.search.brave.com/mwc7fIcELcwJSsc42Rl4hmYi70ja4ok74rw3_qrq0T8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L25W/RUx0YnB6YU44YUx1/SkhKTG10cUQtMzIw/LTgwLndlYnA" },
    // { id: 12, quantity: 1, name: "Chocolate Bar", price: 50, weight: "100g", img: "https://imgs.search.brave.com/kWQW6vqEJm3k2Lg4Dx_62nFKL0ZbwNqQOOB1YdoGTr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDE5NDA0L3Bob3Rv/L2Nob2NvbGF0ZS1i/YXItd2l0aC1wYXRo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZX2xyWWVIakJ2/Ulkxb0N2OVRCUkNI/UXVvcklRZTJDMlpu/SGRZZUs2a1pNPQ" },

//     //New Catagories
//     { id: 13, quantity: 1, name: "Eggs (Dozen)", price: 150, weight: "12 pcs", img: "https://imgs.search.brave.com/J_2wNZH_qXCJDlCzpTlNYsyPBY26X4RsJfvzJ2KV7Lc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bm9wLWZ4ZHpnNGd0/YzBhbmdhZDYuejAx/LmF6dXJlZmQubmV0/L21lZGlhLzAwMTA1/OThfc3RpZWJycy1m/YXJtcy1vcmdhbmlj/LWxhcmdlLXBhc3R1/cmUtcmFpc2VkLWVn/Z3MtMS1kb3plbl8z/NjAuanBlZw" }, 
//     { id: 14, quantity: 1, name: "Bread", price: 50, weight: "400g", img: "https://imgs.search.brave.com/ISnPLjEJNRdPn9ZoheYCvUURllHieoN3F2jcjTQlPJw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMxLzUwLzkx/LzM2MF9GXzMzMTUw/OTEyOF9UOFBaTVBv/YjFlakFMekNBWTds/eGtpREJwMnlBd0VV/Ri5qcGc" },
// { id: 15, quantity: 1, name: "Rice (5kg)", price: 600, weight: "5kg", img: "https://imgs.search.brave.com/lboU1cuOkTgfidhyPfwAM01kL182aVx6sgQlPIW8KdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUz/NzM3ODQxL3Bob3Rv/L3JpY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxmTzdp/TFQwVXNERHpyYTB1/Qk9zTjFydnIyZDVP/RXRyRzJ1d2J0czMz/X2M9" },
// { id: 16, quantity: 1, name: "Cooking Oil", price: 250, weight: "1L", img: "https://imgs.search.brave.com/DLqbpcuxOtSpWAgpI3V2iw7-5D60DWN6HYxIEJr-QH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY4LzI1Lzk0/LzM2MF9GXzY4MjU5/NDQ5X1RLOG9FUzdO/RmxlclJUcU02dm1S/RWhCWTJ6bmpGMWpZ/LmpwZw" },
// { id: 17, quantity: 1, name: "Tea Pack", price: 200, weight: "500g", img: "https://imgs.search.brave.com/s-GeRzI90-pQJJjjboRMgF4aC-pAn8HE3MbmPpVerEI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXl2aXRhbWluc3Rv/cmUucGsvY2RuL3No/b3AvZmlsZXMvdGFw/YWwtZ3JlZW4tdGVh/LXNlbGVjdGlvbi1w/YWNrLXRlYS1iYWdz/LTMyLWN0LTM1NDgx/My5qcGc_dj0xNzEz/NzgzODk5JndpZHRo/PTcyMA" },
// { id: 18, quantity: 1, name: "Coffee (nescafe)", price: 350, weight: "200g", img: "https://imgs.search.brave.com/XTrZRiQx84UyEV91g78Ik-vl3z3oEGB3-v_l8xyk88o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/OTkwNDA3OC9waG90/by9uZXNjYWZlLWdv/bGQtZXNwcmVzc28t/Y29mZmVlLXNlZW4t/YXQtdGhlLWdyb2Nl/cnktc3RvcmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUFB/aG9BdHRMaXpfV3lW/RW5uMEtJdUc3bEVU/TzJpdjRVLXRPVGh2/T3JGd0E9" },

//     //More
//     { id: 19, quantity: 1, name: "Salt", price: 30, weight: "1kg", img: "https://imgs.search.brave.com/Cny721yK50pErm-d2VKtPuUdH7anq86-4wz0A5AIO98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA0LzIwLzkw/LzM2MF9GXzEwNDIw/OTAwOV9oUHdzajlM/YVJRMXVTalB3WmQ2/OG4zRnlHc3NmTEJy/cy5qcGc" },
// { id: 20, quantity: 1, name: "Sugar", price: 90, weight: "1kg", img: "https://imgs.search.brave.com/1wXiTAU8ej52BDyNSFp2ZrATLBfkdJmuwX_Z9jhuk_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzY291bnRjb2Zm/ZWUuY29tL21lZGlh/L2NhdGFsb2cvcHJv/ZHVjdC9jYWNoZS9k/ZDkxN2Y1ZmE1YzZl/Zjc3ZjY5MjFiNWU0/N2JiYmYyYi9wL3Uv/cHVyZS1jYW5lLXN1/Z2FyLXBhY2tldHMu/anBn" },
// { id: 21, quantity: 1, name: "Wheat Flour", price: 450, weight: "5kg", img: "https://imgs.search.brave.com/pltXzWI0ca7ku38mPbluj_4GrfsWhAhk7u4VbVZc87E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFFNjUxMFUrcEwu/anBn" },
// { id: 22, quantity: 1, name: "Dishwashing Liquid", price: 180, weight: "750ml", img: "https://imgs.search.brave.com/Xq7P6IeaQ_n0nJjzZw27tt8cGIIhrE1Wtmki4QfuIvU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2Fhbmdvby5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvMDAyMjg1/Nl92aW0tZGlzaHdh/c2hpbmctbGlxdWlk/LnBuZz92PTE2OTQ3/MzE4MTM" },
// { id: 23, quantity: 1, name: "Laundry Detergent", price: 350, weight: "2kg", img: "https://imgs.search.brave.com/UPuC_zwarzYUjAHapD_cEdCjoeBKKFwdcEHoQC0WNOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI0LzAxL2xhdW5k/cnktZGV0ZXJnZW50/LTIwNDhweC01NDgx/LmpwZz9hdXRvPXdl/YnAmcXVhbGl0eT03/NSZ3aWR0aD0xMDI0" },
// { id: 24, quantity: 1, name: "Toothpaste", price: 120, weight: "150g", img: "https://imgs.search.brave.com/2cUrWWLvbQeOLcRVStCxO_aa5ufBWAGGhp89Gwbt-Ko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/NjMxMjQzNC9waG90/by9jb2xnYXRlLXRv/b3RocGFzdGUtd2l0/aC1yZWd1bGFyLWZs/YXZvdXItMjMtZGVj/ZW1iZXItMjAwMy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/STZqeW4xdnFRWDlk/Z2dlOW9rWjN1TlY0/VWFyX19QSzRNNktM/Z3dXak1xaz0" }

//   ];

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         );
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="container mx-10 my-3">
//       <h2>Flash Deal: Avail any 4 Deals</h2>
//       <div className="row">
//         {items.map((item) => (
//           <div key={item.id} className="col-md-2">
//             <div className="card">
//               <div className="card-header">
//                 <h5 className="card-title">₹{item.price}/{item.weight}</h5>
//               </div>
//               <div className="card-body p-1">
//                 <img src={item.img} className="card-img-top" alt={item.name} />
//                 <h5 className="card-title">{item.name}</h5>
//                 <button className="btn btn-primary" onClick={() => addToCart(item)}>ADD</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Freshner.css"; // Ensure this is the same styling used in mine.jsx

export default function Container({ cart, setCart }) {
  const items = [
    { id: 1, quantity: 1, name: "Bottle Gourd (Medium)", price: 9, weight: "450 g", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9a7546c0f0c.png&w=750&q=75" },
    { id: 2, quantity: 1, name: "Tomato Desi", price: 23, weight: "500 g", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff62ae6727fad.png&w=750&q=75" },
    { id: 3, quantity: 1, name: "Onion", price: 43, weight: "1 kg", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff62b1aceeb29.png&w=750&q=75" },
    { id: 4, quantity: 1, name: "Cauli Flower", price: 33, weight: "1 kg", img: "https://imgs.search.brave.com/FB81-h0ikDlN1vzDFM9qVbG7slQ0hFWMgRVRbnMEPhU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/MjYzMjUxL3Bob3Rv/L2NhdWxpZmxvd2Vy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zbzVjQ0F6a3Za/VU5qVTh4RXVzejB6/T1J1VFAzRWpsd0Vh/YUdvVHEwQVZRPQ" },
    { id: 4, quantity: 1, name: "Potato Fresh Crop", price: 33, weight: "1 kg", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff7a0eb9e951a.png&w=750&q=75" },
    { id: 5, quantity: 1, name: "Tender Coconut", price: 51, weight: "1 pc", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9ad96f6f263.png&w=750&q=75" },
    { id: 6, quantity: 1, name: "Banana Medium", price: 19, weight: "3 pcs", img: "https://otipy.com/_next/image?url=https%3A%2F%2Fimg.crofarm.com%2Fimages%2Fcategory%2Ff9adbca57be4.png&w=750&q=75" },
  ];
  const Dailyitems=[
    { id: 7, quantity: 1, name: "Milk (1L)", price: 55, weight: "1L", img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, quantity: 1, name: "Cheese Slices", price: 120, weight: "10 pcs", img: "https://imgs.search.brave.com/RnpDc6PLc0NoSJxg52VG2VrTTohlsdy4F1sQKisE_dA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2RuLnJldGFp/bC5icm9va3NoaXJl/cy5jb20vY2VsbC9i/YmM1ZTMwOC0wMTRj/LTRjM2QtYTNhYi03/NjA4MmRiZDc1ZjQu/anBlZw" },
    { id: 9, quantity: 1, name: "Butter", price: 90, weight: "500g", img: "https://plus.unsplash.com/premium_photo-1700088853545-e6529edb2d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1dHRlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 10, quantity: 1, name: "Potato Chips", price: 45, weight: "150g", img: "https://imgs.search.brave.com/CrWfhAjPMNG_EHzQhpdozaPM_9bVhN2cPwHrmRL3Arc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY3/NDM5Njc5L3Bob3Rv/L3BvdGF0by1jaGlw/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NjNHQXI3YWkz/NncxR0d0MmNpVjUt/cnZvVmpmZTBPNE5q/anZLaVI0T0dTST0" },
    {id: 25, quantity: 1, name: "Shampoo", price: 300, weight: "500ml", img: "https://imgs.search.brave.com/mwc7fIcELcwJSsc42Rl4hmYi70ja4ok74rw3_qrq0T8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L25W/RUx0YnB6YU44YUx1/SkhKTG10cUQtMzIw/LTgwLndlYnA" },
    { id: 12, quantity: 1, name: "Chocolate Bar", price: 50, weight: "100g", img: "https://imgs.search.brave.com/kWQW6vqEJm3k2Lg4Dx_62nFKL0ZbwNqQOOB1YdoGTr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDE5NDA0L3Bob3Rv/L2Nob2NvbGF0ZS1i/YXItd2l0aC1wYXRo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZX2xyWWVIakJ2/Ulkxb0N2OVRCUkNI/UXVvcklRZTJDMlpu/SGRZZUs2a1pNPQ" },
  ]
const Kitechenitems=[
  { id: 13, quantity: 1, name: "Eggs (Dozen)", price: 150, weight: "12 pcs", img: "https://imgs.search.brave.com/J_2wNZH_qXCJDlCzpTlNYsyPBY26X4RsJfvzJ2KV7Lc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bm9wLWZ4ZHpnNGd0/YzBhbmdhZDYuejAx/LmF6dXJlZmQubmV0/L21lZGlhLzAwMTA1/OThfc3RpZWJycy1m/YXJtcy1vcmdhbmlj/LWxhcmdlLXBhc3R1/cmUtcmFpc2VkLWVn/Z3MtMS1kb3plbl8z/NjAuanBlZw" }, 
    { id: 14, quantity: 1, name: "Bread", price: 50, weight: "400g", img: "https://imgs.search.brave.com/ISnPLjEJNRdPn9ZoheYCvUURllHieoN3F2jcjTQlPJw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMxLzUwLzkx/LzM2MF9GXzMzMTUw/OTEyOF9UOFBaTVBv/YjFlakFMekNBWTds/eGtpREJwMnlBd0VV/Ri5qcGc" },
{ id: 15, quantity: 1, name: "Rice (5kg)", price: 600, weight: "5kg", img: "https://imgs.search.brave.com/lboU1cuOkTgfidhyPfwAM01kL182aVx6sgQlPIW8KdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUz/NzM3ODQxL3Bob3Rv/L3JpY2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxmTzdp/TFQwVXNERHpyYTB1/Qk9zTjFydnIyZDVP/RXRyRzJ1d2J0czMz/X2M9" },
{ id: 16, quantity: 1, name: "Cooking Oil", price: 250, weight: "1L", img: "https://imgs.search.brave.com/DLqbpcuxOtSpWAgpI3V2iw7-5D60DWN6HYxIEJr-QH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY4LzI1Lzk0/LzM2MF9GXzY4MjU5/NDQ5X1RLOG9FUzdO/RmxlclJUcU02dm1S/RWhCWTJ6bmpGMWpZ/LmpwZw" },
{ id: 17, quantity: 1, name: "Tea Pack", price: 200, weight: "500g", img: "https://imgs.search.brave.com/s-GeRzI90-pQJJjjboRMgF4aC-pAn8HE3MbmPpVerEI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXl2aXRhbWluc3Rv/cmUucGsvY2RuL3No/b3AvZmlsZXMvdGFw/YWwtZ3JlZW4tdGVh/LXNlbGVjdGlvbi1w/YWNrLXRlYS1iYWdz/LTMyLWN0LTM1NDgx/My5qcGc_dj0xNzEz/NzgzODk5JndpZHRo/PTcyMA" },
{ id: 18, quantity: 1, name: "Coffee (nescafe)", price: 350, weight: "200g", img: "https://imgs.search.brave.com/XTrZRiQx84UyEV91g78Ik-vl3z3oEGB3-v_l8xyk88o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/OTkwNDA3OC9waG90/by9uZXNjYWZlLWdv/bGQtZXNwcmVzc28t/Y29mZmVlLXNlZW4t/YXQtdGhlLWdyb2Nl/cnktc3RvcmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUFB/aG9BdHRMaXpfV3lW/RW5uMEtJdUc3bEVU/TzJpdjRVLXRPVGh2/T3JGd0E9" },

]
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
      <h3 className="mb-3">Fresh Vegetables</h3>
      <div className="products-row">
        {items.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span>₹{product.price}</span>
                <button className="btn btn-outline-success" onClick={() => addToCart(product)}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    {/* <div className="container fresheners-container"> */}
      <h3 className="mb-3">Kithcen Products</h3>
      <div className="products-row">
        {Dailyitems.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span>₹{product.price}</span>
                <button className="btn btn-outline-success" onClick={() => addToCart(product)}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    {/* <div className="container fresheners-container"> */}
      <h3 className="mb-3">Daily Products</h3>
      <div className="products-row">
        {Kitechenitems.map((product) => (
          <div key={product.id} className="card product-card">
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-text">{product.weight}</p>
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

