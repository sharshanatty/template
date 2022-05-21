/**
 * Класс контента
 */

import { Card } from './card.js'

export class Content {
  tag: string = "";
  cardlist: Card[];
  private id: string = "";

  /**
   * @constructor
   * @param tag - тег
   * @param cardlist - массив карточек
   */
  constructor(tag: string, cardlist: Card[]) {
      this.id = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      this.tag = tag;
      this.cardlist = cardlist;
  }

  /**
   * Создает html код верстки для одной секции
   * @param content - Контент
   * @returns html код верстки одной секции
   */
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