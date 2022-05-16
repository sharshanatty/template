const $content = document.querySelector('.content__div') as HTMLElement;

import { Content } from './content.js';
import { Card } from './card.js';
import Api from './api.js';

Api.getTopTags()
  .then((tags: string[]) => {
      tags.forEach((tag: string) => {
          Api.getTopAlbums(tag)
            .then((cards: Card[]) => {
              const content = new Content(tag, cards)
              return Content.template(content)
            })
            .then((content) => {
              $content.insertAdjacentHTML('beforeend', content);
          })
      })
  }
)
