import React, {useEffect, useState} from 'react';
import { Card } from './card';
import { Api } from './api';
import { ItemCard } from './ItemCard';

export function ItemContent(props: {tag:string, cardList: Card[]}) {
  const [cards, setCards] = useState(props.cardList);

  useEffect(() => {
      Api.getTopAlbums(props.tag)
      .then(res => setCards(res))
  })

  return <section className="section">
    <div className="section__description">
      <h2>Лучшие альбомы {props.tag}-музыки</h2>
    </div>
    <div className="section__content">
    {cards.map(card => <ItemCard key={card.img} card={card}></ItemCard>)}
    </div>
  </section>
}