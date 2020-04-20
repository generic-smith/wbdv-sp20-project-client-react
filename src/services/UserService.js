const url = 'https://wbdv-media-app-server.herokuapp.com/api';
const url2 = 'http://localhost:8080/api'

export const findAllUsers = async () =>{
    const response = await fetch(`${url}/users`)
    return await response.json()
}



export const createUser = (user) =>
    fetch(`${url}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteUser = async(uid) => {
    const response = await fetch(`${url}/users/${uid}`, {
        method: "DELETE"
    })
    return response.json();
}

export const findUserByUsername  = async (username)=>{
    return fetch(`${url}/users/${username}`)
        .then(response => response.json())
}


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

export const searchUsers = (userLookingFor, exceptMe) =>
    fetch(`${url}/users/${userLookingFor}/${exceptMe}`)
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const addUserToFollowList = (uid, user) =>
    fetch(`${url}/users/${uid}/followlist`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const updateUser = async (uid, user) => {
    const response = await fetch(`${url}/users/${uid}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}


export default {
    createUser,
    loginUser,
    profileRetrieve,
    logoutUser,
    searchUsers,
    addUserToFollowList,
    findAllUsers,
    updateUser,
    deleteUser,
    findUserByUsername
}
