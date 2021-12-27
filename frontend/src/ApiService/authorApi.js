import url from "../config/config.js"
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const createAuthor = (author) => {
    return fetch(`${url}/api/authors`, {
        method: "POST",
        body: author
    }).then(response => response.json()).catch(err => console.log(err))
}

const listAuthors = () => {
    return fetch(`${url}/api/authors`, {
        method: "GET",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}

const updateAuthor = (id, data) => {
    return fetch(`${url}/api/authors/${id}`, {
        method: "PUT",
        body: data
    }).then(response => response.json()).catch(err => console.log(err))
}

const getAuthorInfo = (id) => {
    return fetch(`${url}/api/authors/${id}`, {
        method: "GET",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}

const deleteAuthor = (id) => {
    return fetch(`${url}/api/authors/${id}`, {
        method: "DELETE",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}


const searchedAuthors = (filter) => {
    return fetch(`${url}/api/authors/find/${filter}`, {
        method: "GET",
        headers: headers
    }).then(response => response.json()).catch(err => console.log(err))
}





export { createAuthor, listAuthors, updateAuthor, getAuthorInfo, deleteAuthor, searchedAuthors }