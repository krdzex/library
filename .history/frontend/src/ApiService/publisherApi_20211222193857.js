import url from "../config/config.js"
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const createPublisher = (publisher) => {
    return fetch(`${url}/api/publishers`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(publisher)
    }).then(response => response.json()).catch(err => console.log(err))
}

const createPublisher = (publisher) => {
    return fetch(`${url}/api/publishers`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(publisher)
    }).then(response => response.json()).catch(err => console.log(err))
}



export { createPublisher }