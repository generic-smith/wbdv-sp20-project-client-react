const url = 'https://wbdv-media-app-server.herokuapp.com/api';
const url2 = 'http://localhost:8080/api'

export const findWatchlist = (uid) =>
    fetch(`${url2}/users/${uid}/watchlist`)
        .then(response => response.json());

export const addMedia = (uid, media) =>
    fetch(`${url2}/users/${uid}/watchlist`, {
        method: "POST",
        body: JSON.stringify(media),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const getMedia = (uid, mid) =>
    fetch(`${url2}/users/${uid}/watchlist/${mid}`)
        .then(response => response.text()).then(text => text.length ? JSON.parse(text) : {});

export const updateMedia = (uid, mid, media) =>
    fetch(`${url2}/users/${uid}/watchlist/${mid}`, {
        method: "PUT",
        body: JSON.stringify(media),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const removeFromWatchList = (uid, mid) =>
    fetch(`${url2}/users/${uid}/watchlist/${mid}`,{
    method: "DELETE"
}).then(response => response.json());


export default {
    findWatchlist,
    addMedia,
    getMedia,
    updateMedia,
    removeFromWatchList
}
