import { Card } from './card.js'

export class Content {
  tag: string = "";
  cardlist: Card[];
  private id: string = "";
  constructor(tag: string, cardlist: Card[]) {
      this.id = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      this.tag = tag;
      this.cardlist = cardlist;
  }

  static template(content): string {
    return `
      <section class="section" data-id=${content.id}>
        <div class="section__description">
          <h2>Лучшие альбомы ${content.tag}-музыки</h2>
        </div>
        <div class="section__content">
          ${content.cardlist.reduce((prev, curr) => {
            return prev+=Card.template(curr);
          }, '')}
        </div>
      </section>
    `;
  }
}