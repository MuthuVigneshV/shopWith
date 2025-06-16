// import React from 'react'

// function Cart() {
//   return <>
//   <div>
//     <div>
//         <img></img>
//     </div>
//     <div>
//         <h1>TITLE</h1>
//         <h5>Price $</h5>
//         <button>Buy Now</button>
//         <p>Description</p>
//     </div>
//   </div>
//   </>
// }

// export default Cart

import React, { useEffect, useState } from 'react';

function Cart({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  const grandTotal = () => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * cart[item.id];
    }, 0).toFixed(2);
  };

  const removeItem = (productId) => {
    setCart(prev => {
            if (!prev[productId]) return prev;
            const updated = { ...prev };
            if (updated[productId] === 1) {
                delete updated[productId];
            } else {
                updated[productId] -= 1;
            }
            return updated;
        });
  };

  

  const cartItems = products.filter((product) => cart[product.id]);

  const placeOrder = () => {
    {cartItems.length === 0 ? alert("Kindly add few items in the cart!"):
      alert('Order placed! Thank you for shopping. And thankyou for using pal!');
      setCart({});
    }
  };

  return (
    <main className='cart-container'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <section key={item.id} className='product-card'>
            <img src={item.image} alt={item.title} className='product-image' />
            <div className='product-content'>
              <h2 className='product-title'>{item.title}</h2>
              <p className='product-price'>Price: ${item.price}</p>
              <p className='product-price'>Quantity: {cart[item.id]}</p>
              <p className='product-price' >Total: ${(item.price * cart[item.id]).toFixed(2)}</p>
              <button className='removeBtn' onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </section>
        ))
      )}
      <p>Grand total : <span>$ { grandTotal() }</span></p>
      <button className='placeorder-btn' onClick={ placeOrder }>placeOrder</button>
    </main>
  );
}

export default Cart;
