const url = 'https://wbdv-media-app-server.herokuapp.com/api';
const url2 = 'http://localhost:8080/api'

export const createUser = (user) =>
    fetch(`${url}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const loginUser = (user) =>
    fetch(`${url}/user-login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const profileRetrieve = () =>
    fetch(`${url}/profile`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const logoutUser = () =>
    fetch(`${url}/profile`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(response => response.json());

export default {
    createUser,
    loginUser,
    profileRetrieve,
    logoutUser
}
