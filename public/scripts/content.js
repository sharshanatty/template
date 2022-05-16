import { Card } from './card.js';
var Content = /** @class */ (function () {
    function Content(tag, cardlist) {
        this.tag = "";
        this.id = "";
        this.id = "".concat(Date.now(), "_").concat(Math.floor(Math.random() * 1000));
        this.tag = tag;
        this.cardlist = cardlist;
    }
    Content.template = function (content) {
        return "\n      <section class=\"section\" data-id=".concat(content.id, ">\n        <div class=\"section__description\">\n          <h2>\u041B\u0443\u0447\u0448\u0438\u0435 \u0430\u043B\u044C\u0431\u043E\u043C\u044B ").concat(content.tag, "-\u043C\u0443\u0437\u044B\u043A\u0438</h2>\n        </div>\n        <div class=\"section__content\">\n          ").concat(content.cardlist.reduce(function (prev, curr) {
            return prev += Card.template(curr);
        }, ''), "\n        </div>\n      </section>\n    ");
    };
    return Content;
}());
export { Content };
