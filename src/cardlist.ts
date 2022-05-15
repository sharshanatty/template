import { Card } from './card.js'

interface IList {
  add(card: Card): void;
}

export class CardList implements IList {
  constainer: HTMLElement;
  constructor(container: HTMLElement) {
      this.constainer = container;
  }

  add(card: Card): Card {
    const template = Card.template(card);
    this.constainer.insertAdjacentHTML('beforeend', template);
    return card;
  }

  clearHtml(): void {
    this.constainer.innerHTML = '';
  }
}