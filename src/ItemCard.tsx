import React from 'react';
import { Card } from './card';

export function ItemCard(props: {card: Card}) {
  return  <div className="card">
    <img className="card__img" src={props.card.img}/>
    <div className="card__description">
      <a className="link" href="#"><div className="caption">{props.card.name}</div></a>
      <div className="author">
        <span>{props.card.artist}</span>
      </div>
    </div>
  </div>
}