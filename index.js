"use strict";

const rp = require("request-promise");
const logger = require("dy-logger");

// Method call common
function get(url, headers) {
    const options = {
        method: 'GET',
        uri: url,
        headers: headers || {},
        json: true
    };
    return rp(options)
        .then(handleResponse)
        .catch(handleError);
}

function post(url, payload, headers) {
    const options = {
        method: 'POST',
        uri: url,
        headers: headers || {},
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponse)
        .catch(handleError);
}

function put(url, payload, headers) {
    const options = {
        method: 'PUT',
        uri: url,
        headers: headers || {},
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponse)
        .catch(handleError);
}

function deleteJson(url, payload, headers) {
    const options = {
        method: 'DELETE',
        uri: url,
        headers: headers || {},
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponse)
        .catch(handleError);
}

function handleResponse(res) {
    return Promise.resolve(res);
}

function handleError(_err) {
    logger.error("handleError", _err);
    throw new Error(_err);
}
// ...

// Method for call between Private Services

function getPrivate(url, secret) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'GET',
        uri: url,
        headers: headers,
        json: true
    };
    return rp(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function postPrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'POST',
        uri: url,
        headers: headers,
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function putPrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'PUT',
        uri: url,
        headers: headers,
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function deletePrivate(url, secret, payload) {
    let headers = {
        "authorization": secret
    };
    const options = {
        method: 'DELETE',
        uri: url,
        headers: headers,
        body: payload,
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options)
        .then(handleResponsePrivate)
        .catch(handleErrorPrivate);
}

function handleResponsePrivate(res) {
    if (res.success) {
        return Promise.resolve(res.data);
    } else {
        throw new Error(res.reason);
    }
}

function handleErrorPrivate(_err) {
    logger.error("handleError", _err);
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
