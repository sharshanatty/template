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
}