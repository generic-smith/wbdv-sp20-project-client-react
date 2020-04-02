export const findWatchlist = (uid) =>
    fetch(`http://localhost:8080/api/users/${uid}/watchlist`)
        .then(response => response.json());

export const addMedia = (uid, media) =>
    fetch(`http://localhost:8080/api/users/${uid}/watchlist`, {
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
