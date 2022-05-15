const $cardList = document.querySelector('.section__content') as HTMLElement;
import { CardList } from './cardlist.js';
import { Card } from './card.js';
import Api from './api.js';


const cardList = new CardList($cardList);

Api.getTopAlbums("pop")
.then((cards: Card[]) => {
  cardList.clearHtml();
  cards.forEach((item: Card) => {
    cardList.add(item)
  })
})


// cardList.add("https://seeded-session-images.scdn.co/v1/img/artist/6qqNVTkY8uBg9cP3Jd7DAH/ru", "радио", "Billie Eilish");
// cardList.add("https://seeded-session-images.scdn.co/v1/img/artist/23fW0TaMYDKQiyuoIpq8Ds/ru", "радио", "Асия")
// cardList.add("https://seeded-session-images.scdn.co/v1/img/artist/7Ln80lUS6He07XvHI8qqHH/ru", "радио", "Arctic Monkeys")