import url from "../config/config.js"
const headers = { "Accept": "application/json", "Content-Type": "application/json" };

const createPublisher = (user) => {
    return fetch(`${url}/api`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(user)
    }).then(response => response.json()).catch(err => console.log(err))
}



export { createUser, userInfo, listUsers, updateUser, deleteUser, updatePassword }