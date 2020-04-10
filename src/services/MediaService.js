export const findWatchlist = (uid) =>
    fetch(`https://wbdv-media-app-server.herokuapp.com/api/users/${uid}/watchlist`)
        .then(response => response.json());

export const addMedia = (uid, media) =>
    fetch(`https://wbdv-media-app-server.herokuapp.com/users/${uid}/watchlist`, {
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
