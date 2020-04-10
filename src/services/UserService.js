export const createUser = (user) =>
    fetch(`https://wbdv-media-app-server.herokuapp.com/api/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const loginUser = (user) =>
    fetch(`https://wbdv-media-app-server.herokuapp.com/api/user-login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const profileRetrieve = () =>
    fetch(`https://wbdv-media-app-server.herokuapp.com/api/profile`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.json());

export default {
    createUser,
    loginUser,
    profileRetrieve
}
