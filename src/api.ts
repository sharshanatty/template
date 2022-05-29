import { Card } from './card';

/**
 * Статический класс для взаимодействия с API
 */

export class Api {
  /**
   * Формирование запроса и получение json данных
   * @param params - параметры API запроса
   * @returns - то, что возвращает API запос с заданными параметрами в формате json
   */
  static async getResource(params) {
    const qs = this._convertToQueryString({
      ...params,
      api_key: this._apiKey,
      format: this._apiFormar,
    });

    const res = await fetch(`${this._apiBase}?${qs}`);

    if( !(res).ok ) {
      throw new Error(`Could not fetch, status $(res.status)`);
    }

    return res.json();
  }

  /**
   * Получение списка популярных альбомов по тегу
   * @param tag
   * @returns - массив с карточками
   */
  static async getTopAlbums(tag: string): Promise<Card[]> {
    const params = {
      method: "tag.gettopalbums",
      tag,
      limit: 5,
    };

    const data = this.getResource(params);

    return data
      .then(json => json.albums.album.map(item =>
        new Card(
          item.image[2]['#text'],
          item.name,
          item.artist.name,
        )
      ));
  }

  /**
   * Получение популярных тегов
   * @returns - массив тегов
   */
  static async getTopTags(): Promise<string[]> {
    const params = {
      method: "chart.getTopTags",
      limit: 6,
    };

    const data = this.getResource(params);

    return data
      .then(json => json.tags.tag.map(item =>
          item.name
      ));
  }

  static _convertToQueryString(params) {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&')
  }

  static _apiBase = 'http://ws.audioscrobbler.com/2.0/'; // Базовый API адрес для API запросов
  static _apiKey = '521d13323816fb7d91a987fcacd41775'; // Ваш API ключ
  static _apiFormar = 'json'; // Формат, в котором будут приходить данные
}
