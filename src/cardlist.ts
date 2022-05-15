import { Card } from './card.js'

interface IList {
  add(img: string, name: string, author: string): void;
}

export class CardList implements IList {
    constainer: HTMLElement;
    constructor(container: HTMLElement) {
        this.constainer = container;
    }
    add(img: string, name: string, author: string): Card {
      const card = new Card(img, name, author);
      const template = Card.template(card);
      this.constainer.insertAdjacentHTML('beforeend', template);
      return card;
  }
}