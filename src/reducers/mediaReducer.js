import {ADD_MEDIA, FIND_WATCHLIST, REMOVE_FROM_WATCHLIST} from "../actions/mediaActions";

const initialState = {
    media: []
}

const mediaReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MEDIA:
                return {
                    media: [
                        ...state.media,
                        action.newMedia
                    ]
                }
        case FIND_WATCHLIST:
            return {
                media: action.media
            }
        case REMOVE_FROM_WATCHLIST:
            return{
                media: state.media.filter(m => m.id !== action.mid)
            }


        default:
            return state
    }
}

export default mediaReducer
