/**
 * Класс карточки
 */

export class Card {
  img: string = "";
  name: string = "";
  artist: string = "";
  private id: string = "";
  /**
   * @constructor
   * @param img - URL обложки
   * @param name - Название альбома
   * @param artist - Исполнитель
   */
  constructor(img: string, name: string, artist: string) {
      this.id = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
      this.img = img;
      this.name = name;
      this.artist = artist;
  }

  /**
   * Создает html верстку карточки
   * @param card - Карточка
   * @returns html верстка карточки
   */
  static template(card: Card): string {
      return `
    <div class="card" data-id=${card.id}>
      <img class="card__img" src=${card.img}/>
      <div class="card__description">
        <a class="link" href="#"><div class="caption">${card.name}</div></a>
        <div class="author">
          <span>${card.artist}</span>
        </div>
      </div>
    </div>
  `;
  }
}