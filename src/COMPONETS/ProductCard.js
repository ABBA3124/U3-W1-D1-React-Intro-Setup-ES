import React from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h5>{product.name}</h5>
        <p>{product.price}€</p>
        <button className="btn">aggiungi al carrello</button>
      </div>
    </div>
  )
}

export default ProductCard
