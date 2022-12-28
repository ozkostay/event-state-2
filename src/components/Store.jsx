import React, {useState} from "react";
import './Store.css';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export default function Store() {
  const [iconState, setIconState] = useState('view_list');

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
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];
  
  //let cardsView = <div className="border wrapper"><CardsView cards={products}/></div>;
  let cardsView = <CardsView cards={products}/>
  let wrap = 'wrapper';

  const changeView = () => {
    if (iconState === 'view_list') {
      setIconState('view_module');
    } else {
      setIconState('view_list');
    }
    
  }

  if (iconState === 'view_list') {
    cardsView = <CardsView cards={products}/>;
    wrap = 'border wrapper';
  } else {
    cardsView = <ListView items={products}/>;
    wrap = 'border wrapperlist';
  }

  // console.log('555' , cardsView, wrap);
  // {cardsView}
  return (
    // <h2>be {products.map((item) => <h3 className="fonth3">{item.name }</h3>)}</h2>
    <main className="border">
      <IconSwitch changeView={changeView} iconState={iconState}/>
      <div className={wrap}>
        {cardsView}
      </div>
      
    </main>
  )
}
