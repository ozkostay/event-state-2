import React from "react";

export default function ShopItem({item, index}) {
  // console.log('key', index);
  return (
    <div className="border cardlist">
    <div className="border card-image-list"  style={{ backgroundImage: `url(${item.img})` }}></div>
    <div className='border list'>
      <div className="border card-name">{item.name}</div>
      <div className="border card-color marginleft">{item.color}</div>
      <div className="border price marginleft">${item.price}</div>
      <div className="border cart-button marginleft"><button>ADD TO CART</button></div>
    </div>
  </div>
  )
}
