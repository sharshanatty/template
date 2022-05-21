/**
 * Класс карточки
 */
var Card = /** @class */ (function () {
    /**
     * @constructor
     * @param img - URL обложки
     * @param name - Название альбома
     * @param artist - Исполнитель
     */
    function Card(img, name, artist) {
        this.img = "";
        this.name = "";
        this.artist = "";
        this.id = "";
        this.id = "".concat(Date.now(), "_").concat(Math.floor(Math.random() * 1000));
        this.img = img;
        this.name = name;
        this.artist = artist;
    }
    /**
     * Создает html верстку карточки
     * @param card - Карточка
     * @returns html верстка карточки
     */
    Card.template = function (card) {
        return "\n    <div class=\"card\" data-id=".concat(card.id, ">\n      <img class=\"card__img\" src=").concat(card.img, "/>\n      <div class=\"card__description\">\n        <a class=\"link\" href=\"#\"><div class=\"caption\">").concat(card.name, "</div></a>\n        <div class=\"author\">\n          <span>").concat(card.artist, "</span>\n        </div>\n      </div>\n    </div>\n  ");
    };
    return Card;
}());
export { Card };
