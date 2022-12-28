import React from "react";
import ShopCard from './ShopCard';
import './CardsView.css';

export default function CardsView({cards}) {
  
  // console.log('props', cards);
  const arrItems = [...cards];

//<h1 key={index}>{item.name}</h1>)
  return (
   <>
   {arrItems.map((item, index) => {
        // console.log('index', index);
        // const key = index;
        return <ShopCard item={item} key={index}/>
      }
    )} 
   </>
  )
}