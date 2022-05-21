var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Card } from './card.js';
/**
 * Статический класс для взаимодействия с API
 */
var Api = /** @class */ (function () {
    function Api() {
    }
    /**
     * Формирование запроса и получение json данных
     * @param params - параметры API запроса
     * @returns - то, что возвращает API запос с заданными параметрами в формате json
     */
    Api.getResource = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var qs, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qs = this._convertToQueryString(__assign(__assign({}, params), { api_key: this._apiKey, format: this._apiFormar }));
                        return [4 /*yield*/, fetch("".concat(this._apiBase, "?").concat(qs))];
                    case 1:
                        res = _a.sent();
                        if (!(res).ok) {
                            throw new Error("Could not fetch, status $(res.status)");
                        }
                        return [2 /*return*/, res.json()];
                }
            });
        });
    };
    /**
     * Получение списка популярных альбомов по тегу
     * @param tag
     * @returns - массив с карточками
     */
    Api.getTopAlbums = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                params = {
                    method: "tag.gettopalbums",
                    tag: tag,
                    limit: 5,
                };
                data = this.getResource(params);
                return [2 /*return*/, data
                        .then(function (json) { return json.albums.album.map(function (item) {
                        return new Card(item.image[2]['#text'], item.name, item.artist.name);
                    }); })];
            });
        });
    };
    /**
     * Получение популярных тегов
     * @returns - массив тегов
     */
    Api.getTopTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                params = {
                    method: "chart.getTopTags",
                    limit: 8,
                };
                data = this.getResource(params);
                return [2 /*return*/, data
                        .then(function (json) { return json.tags.tag.map(function (item) {
                        return item.name;
                    }); })];
            });
        });
    };
    Api._convertToQueryString = function (params) {
        return Object.keys(params)
            .map(function (key) { return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])); })
            .join('&');
    };
    Api._apiBase = 'http://ws.audioscrobbler.com/2.0/'; // Базовый API адрес для API запросов
    Api._apiKey = '521d13323816fb7d91a987fcacd41775'; // Ваш API ключ
    Api._apiFormar = 'json'; // Формат, в котором будут приходить данные
    return Api;
}());
export default Api;
