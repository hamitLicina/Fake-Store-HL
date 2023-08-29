// rfce
import React, {useContext} from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
//AiOutlineShoppingCart
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


function Header() {
  
  //use global state
  //NOTE {} not []
  const {cart, addProduct, removeProduct} = useContext(CartContext)

  return (
    <div className='header-container'>
      <Link to="/"><h3 className='logo'>Hamit's Store</h3></Link>
      <Link to="/checkout" className='cart-wrapper'>
        <AiOutlineShoppingCart className='shopping-car-icon' />
        <p className='cart-number'>{cart.lenght}</p>
      </Link>
    </div>
  )
}

export default Header
