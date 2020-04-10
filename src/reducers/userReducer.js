import {CREATE_USER, LOGIN_USER, LOGOUT} from "../actions/userActions";

const initialState = {
    registerSuccess: 3,
    user: {
        username: "", password: "", id: -1
    }
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
                    user: state.user
                }
            }
            else {
                return {
                    user: action.newUser
                }
            }
        default:
            return state
    }
}

export default userReducer
