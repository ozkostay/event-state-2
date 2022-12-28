import React from "react";

export default function ShopCard({item, index}) {
  
  return (
    <div className="border card">
    <div className="border card-name">{item.name}</div>
    <div className="border card-color">{item.color}</div>
    <div className="border card-image" style={{ backgroundImage: `url(${item.img})` }}></div>
    <div className="border card-bottom">
      <div className="border price">${item.price}</div>
      <div className="border cart-button"><button>ADD TO CART</button></div>
    </div>
  </div>
  )
}
