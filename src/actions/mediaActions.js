export const ADD_MEDIA = "ADD_MEDIA"
export const addMedia = (media) => ({
    type: ADD_MEDIA,
    newMedia: media
})

export const FIND_WATCHLIST = "FIND_WATCHLIST"
export const findWatchlist = (media) => ({
    type: FIND_WATCHLIST,
    media: media
})
