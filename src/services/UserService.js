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
        }
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export default {
    createUser,
    loginUser
}
