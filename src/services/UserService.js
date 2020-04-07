export const createUser = (user) =>
    fetch(`http://localhost:8080/api/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const loginUser = (user) =>
    fetch(`http://localhost:8080/api/user-login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const profileRetrieve = () =>
    fetch(`http://localhost:8080/api/profile`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.json());

export default {
    createUser,
    loginUser,
    profileRetrieve
}
