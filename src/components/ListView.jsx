import React from "react";
import ShopItem from './ShopItem';
import './CardsView.css';

export default function ListView({items}) {
  
  // console.log('props', items);
  const arrItems = [...items];

  return (
   <>
   {arrItems.map((item, index) => {
        return <ShopItem item={item} key={index}/>
      }
    )} 
   </>
  )
}