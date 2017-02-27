import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:8000';

const deserialize = response => {
  const header = response.headers.get('Content-Type') || ''
  if (header.indexOf('application/json') > -1) return response.json()
  if (header.indexOf('application/ld+json') > -1) return response.json()
  if (header.indexOf('application/octet-stream') > -1) return response.arrayBuffer()
  return response.text()
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throw response
  }
};

const setResponse = (response, success, status) => ({ response, success, status })

const createResponse = response => deserialize(response)
  .then( value => setResponse(value, true, response.status) )

const createErrorResponse = response =>  new Promise(
  (resolse, reject) => deserialize(response).then( value => reject(setResponse(value, false, response.status)) )
)

const defaultHeaders = {
  'Content-type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}

//form.forEach( (object, key) => console.log(key, object)) FormData

export default (uri, method='get', body={}, headers={}) => {
  const options = {
    method,
    headers: Object.assign(defaultHeaders, headers),
  }
  if(method === 'post' || method === 'put'){
    options.body = body
  }
  return fetch(API_ROOT+uri, options)
    .then( checkStatus )
    .then(createResponse, createErrorResponse)
    .then( response => ({ body, ...response }) )
    .catch( response => ({ body, ...response }) )
}