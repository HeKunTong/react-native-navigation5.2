import { GET, GET_LIST, POST, FILE } from './types';
import { stringify } from 'querystring';

const restRequest = (type, url, params = {}) => {
  switch (type) {
    case GET:
      params = stringify(params);
      url = params ? url + '?' + params : params;
      return fetch(url, {method: 'GET'}).then(res => res.json());
    case GET_LIST:
      params = stringify(params);
      url = params ? url + '?' + params : params;
      return fetch(url, {method: 'GET'}).then(res => res.json());
    case POST:
      return fetch(url, {method: 'POST', body: stringify(params)}).then(res => res.json());
    case FILE:
      return fetch(url, {method: 'POST', body: params}).then(res => res.json());
    default:
      throw new Error(`can not support '${type}'`);
  }
};

const formatResponse = (response, type) => {
  switch (type) {
    case GET_LIST:
      return response.result.list;
    case GET:
      return response.result;
    case POST:
      return response.result;
    case FILE:
      return response.result;
    default:
      return response;
  }
};

const rest = (type, url, params = {}) => {
  return restRequest(type, url, params).then(response => formatResponse(response, type));
};

export {
  rest,
};
