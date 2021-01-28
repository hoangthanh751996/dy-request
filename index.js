"use strict";

const axios = require("axios");
const logger = require("dy-logger");

// Method call common
function get(url, headers) {
    const options = {
        method: 'get',
        url,
        headers: headers || {},
        responseType: 'json'
    };
    return axios(options)
        .then(handleResponse)
        .catch(handleError);
}

function post(url, payload, headers) {
    const options = {
        method: 'post',
        url,
        headers: headers || {},
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponse)
        .catch(handleError);
}

function put(url, payload, headers) {
    const options = {
        method: 'put',
        url,
        headers: headers || {},
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponse)
        .catch(handleError);
}

function deleteJson(url, payload, headers) {
    const options = {
        method: 'delete',
        url,
        headers: headers || {},
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponse)
        .catch(handleError);
}

function handleResponse(res) {
    if (res && res.data) {
        return Promise.resolve(res.data);
    } else {
        throw new Error("Can not receive response from server. Please try again!");
    }
}

function handleError(_err) {
    logger.error("handleError", _err.message);
    throw new Error(_err);
}
// ...

// Method for call between Private Services

function getPrivate(url, secret) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'get',
        url,
        headers: headers,
        responseType: 'json'
    };
    return axios(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function postPrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'post',
        url,
        headers: headers,
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function putPrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'put',
        url,
        headers: headers,
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function deletePrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'delete',
        url,
        headers: headers,
        data: payload,
        responseType: 'json' // Automatically parses the JSON string in the response
    };
    return axios(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function handleResponsePrivate(res) {
    if (res && res.data) {
        return Promise.resolve(res.data);
    } else {
        throw new Error("Can not receive response from server. Please try again!");
    }
}

function handleErrorPrivate(_err) {
    logger.error("handleError", _err.message);
    throw new Error(_err);
}
// ...
module.exports = {
    get,
    post,
    put,
    deleteJson,
    getPrivate,
    postPrivate,
    putPrivate,
    deletePrivate,
};
