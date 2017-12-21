import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//change the getUsers() function below to change the AJAX request
//'users' is held under envScripts/srcServer.js as part of the express server
export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);  // eslint-disable-line no-console
}
