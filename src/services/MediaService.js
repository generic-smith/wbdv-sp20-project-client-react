const url = 'https://wbdv-media-app-server.herokuapp.com/api';
const url2 = 'http://localhost:8080/api'

export const findWatchlist = (uid) =>
    fetch(`${url}/users/${uid}/watchlist`)
        .then(response => response.json());

export const addMedia = (uid, media) =>
    fetch(`${url}/users/${uid}/watchlist`, {
        method: "POST",
        body: JSON.stringify(media),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export default {
    findWatchlist,
    addMedia
}
