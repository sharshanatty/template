import { Card } from './card.js';
var CardList = /** @class */ (function () {
    function CardList(container) {
        this.constainer = container;
    }
    CardList.prototype.add = function (img, name, author) {
        var card = new Card(img, name, author);
        var template = Card.template(card);
        this.constainer.insertAdjacentHTML('beforeend', template);
        return card;
    };
    return CardList;
}());
export { CardList };
