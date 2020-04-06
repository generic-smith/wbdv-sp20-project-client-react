import {CREATE_USER, LOGIN_USER} from "../actions/userActions";

const initialState = {
    registerSuccess: 3,
    user: {
        username: "nate", password: "tote", id: 3
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {
                registerSuccess: action.success,
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
