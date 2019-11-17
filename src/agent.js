import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://qiita.com/api/v2';
const responseBody = res => res.body;

const requests = {
    get: url =>
      superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Articles = {
    byTag: (tag) =>
      requests.get(`/tags/${(tag)}/items`),
    detail: (id) =>
      requests.get(`/items/${id}`),
};

export default {
    Articles
  };
  