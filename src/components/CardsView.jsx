import React from "react";
import ShopCard from './ShopCard';
import './CardsView.css';

export default function CardsView({cards}) {
  
  console.log('props', cards);
  const aaa = [...cards];


  return (
   <div className="border card">
    element {aaa.map((item, index) => (<h1 key={index}>{item.name}</h1>))}
   </div>
  )
}