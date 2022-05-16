var $content = document.querySelector('.content__div');
import { Content } from './content.js';
import Api from './api.js';
Api.getTopTags()
    .then(function (tags) {
    tags.forEach(function (tag) {
        Api.getTopAlbums(tag)
            .then(function (cards) {
            var content = new Content(tag, cards);
            return Content.template(content);
        })
            .then(function (content) {
            $content.insertAdjacentHTML('beforeend', content);
        });
    });
});
