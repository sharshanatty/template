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
}