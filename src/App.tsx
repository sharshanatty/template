import React from 'react';
import { Api } from './api';
import { ItemContent } from './ItemContent';

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__navigation">
          <button className="back-button">
            <svg className="navigation__button" role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
            </svg>
          </button>
          <button className="forward-button">
            <svg className="navigation__button" role="img" height="24" width="24" viewBox="0 0 24 24">
              <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
            </svg>
          </button>
        </div>
        <button className="tariff">Сменить тариф</button>
      </header>
      <aside className="accordion">
        <nav className="accordion__navigation">
          <div className="banner">
            <a className="logo link" href="#">
              <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Лого" width="131" />
            </a>
          </div>
          <ul className="tags">
            <li className="tag"><a className="menu__item link" href="#"><span>Главная</span></a></li>
            <li className="tag"><a className="menu__item link" href="#"><span>Поиск</span></a></li>
            <li className="tag"><a className="menu__item link" href="#"><span>Моя медиатека</span></a></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <div className="content__div">
          <ItemContent tag='pop' cardList={[]}></ItemContent>
          <ItemContent tag='disco' cardList={[]}></ItemContent>
          <ItemContent tag='rock' cardList={[]}></ItemContent>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
