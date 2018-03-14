const callApi = async (serviceUrl, method, data) => {
    let response;
    let body;

    if (method.toLowerCase() === 'get') {
        data = undefined;
    }

    response = await fetch(serviceUrl, {
        method: method,
        body:  JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
}

export { callApi } ;