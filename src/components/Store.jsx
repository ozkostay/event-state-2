import React from "react";
import './Store.css';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";

export default function Store() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }];
  return (
    // <h2>be {products.map((item) => <h3 className="fonth3">{item.name }</h3>)}</h2>
    <main className="border wrapper">
      <IconSwitch/>
      <div className="border wrapper">
        <CardsView cards={products}/>
      </div>

    </main>
    

  )
}