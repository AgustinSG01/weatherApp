import React from 'react';
import Card from "./Card.jsx"
import style from "./Cards.module.css"

export default function Cards(props) {
  return (
    <div className={style.cardsDiv}>
      <ul className={style.list}>
      {props.cities.map(x => <li className={style.listElement}><Card
       max={x.max}
       min={x.min}
       name={x.name}
       id={x.id}
       key={x.id}
       img={x.img}
       onClose={props.onClose}
       /></li>)}
       </ul>
    </div>)
};