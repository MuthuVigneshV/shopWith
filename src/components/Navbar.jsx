import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


function Navbar({cart, setCart}) {

  const quantity = Object.values(cart).reduce((sum,qty) => sum + qty,0);

  return (
    <>
    <div className="navbar">
        <Link to='/' className="navbar-logo">
            <h2>shopWith</h2>
            <p>Ecom Market</p>
        </Link>
        
        <div className="navbar-anchors">
            <Link className='cart-icon-container'  to='/cart'>
            <FaShoppingCart fontSize="large" />
            <p>{ quantity }</p>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Navbar