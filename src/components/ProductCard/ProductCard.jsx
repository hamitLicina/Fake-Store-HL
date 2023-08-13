import React from 'react'
import './ProductCard.css'

 // I want to make first letter uppercase
 const capitalizeFirstLetter = (string) => {

  return string.charAt(0).toUpperCase() + string.slice(1);
};


function ProductCard({product}) {
  return (
    <div className='product-card'>
        <img src={product.image} />
        <p style={{fontWeight:'bold'}}>{product.title}</p>
        <p style={{color:'var(--gray)'}}>{capitalizeFirstLetter(product.category)}</p>
        <p style={{fontWeight:'bold'}}>{product.price}€ </p>
    </div>
  )
}

export default ProductCard