import {
    CREATE_USER,
    DELETE_USER,
    FIND_ALL_USERS,
    FIND_USER_BY_USERNAME,
    LOGIN_USER,
    LOGOUT, REMOVE_FROM_FOLLOWLIST,
    UPDATE_USER
} from "../actions/userActions";
import {REMOVE_FROM_WATCHLIST} from "../actions/mediaActions";

const initialState = {
    registerSuccess: 3,
    user: {
        username: "Guest", password: "Guest", id: -1
    },
    users:[]
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {
                registerSuccess: action.success,
                user: state.user
            }
        case LOGOUT:
            return {
                user: state.user
            }
        case LOGIN_USER:
            if (Object.keys(action.newUser).length === 0) {
                return {
                    user: initialState.user
                }
            }
            else {
                return {
                    user: action.newUser
                }
            }
        case FIND_ALL_USERS:
            return{
                users: action.users
            }
        case UPDATE_USER:
            return{
                users: state.users.map(user => user.id === action.newUser.id ? action.newUser : user)
            }
        case DELETE_USER:
            return{
                users: state.users.filter(user => user.id !== action.user.id)
            }
        case FIND_USER_BY_USERNAME:
            return{
                users: [action.user]
            }
        case REMOVE_FROM_FOLLOWLIST:
            return{
                user: action.user
            }

        default:
            return state
    }
}

export default userReducer
