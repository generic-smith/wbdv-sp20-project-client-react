const url = 'https://wbdv-media-app-server.herokuapp.com/api';
const url2 = 'http://localhost:8080/api'

export const createUser = (user) =>
    fetch(`${url2}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const loginUser = (user) =>
    fetch(`${url2}/user-login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const profileRetrieve = () =>
    fetch(`${url2}/profile`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const logoutUser = () =>
    fetch(`${url2}/profile`, {
        method: "DELETE",
        credentials: "include"
    })
        .then(response => response.json());

export const searchUsers = (userLookingFor, exceptMe) =>
    fetch(`${url2}/users/${userLookingFor}/${exceptMe}`)
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const addUserToFollowList = (uid, user) =>
    fetch(`${url2}/users/${uid}/followlist`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});


export default {
    createUser,
    loginUser,
    profileRetrieve,
    logoutUser,
    searchUsers,
    addUserToFollowList
}
