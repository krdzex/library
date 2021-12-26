import url from "../config/config.js"
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const createBook = (book) => {
    return fetch(`${url}/api/books`, {
        method: "POST",

        body: book
    }).then(response => response.json()).catch(err => console.log(err))
}

const listBooks = () => {
    return fetch(`${url}/api/books`, {
        method: "GET",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}

const updateBook = (id, data) => {
    return fetch(`${url}/api/books/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    }).then(response => response.json()).catch(err => console.log(err))
}

const getBookInfo = (id) => {
    return fetch(`${url}/api/books/${id}`, {
        method: "GET",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}





export { createBook, listBooks, updateBook, getBookInfo }