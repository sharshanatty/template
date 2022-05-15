import { Card } from './card.js';
var CardList = /** @class */ (function () {
    function CardList(container) {
        this.constainer = container;
    }
    CardList.prototype.add = function (card) {
        var template = Card.template(card);
        this.constainer.insertAdjacentHTML('beforeend', template);
        return card;
    };
    CardList.prototype.clearHtml = function () {
        this.constainer.innerHTML = '';
    };
    return CardList;
}());
export { CardList };
