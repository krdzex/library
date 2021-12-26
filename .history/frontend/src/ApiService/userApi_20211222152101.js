import url from "../config/config.js"
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const createUser = (user) => {
    return fetch(`${url}/register`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(user)
    }).then(response => response.json()).catch(err => console.log(err))
}



const deleteUser = (id,data) => {
    return fetch(`${url}/user/delete/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => response.json()).catch(err => console.log(err))
}


export { createUser, userInfo, listUsers, updateUser, deleteUser, updatePassword }