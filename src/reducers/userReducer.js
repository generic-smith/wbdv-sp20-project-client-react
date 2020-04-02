import {CREATE_USER} from "../actions/userActions";

const initialState = {
    user: {
        username: "nate", password: "tote", id: 3
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return action.newUser
        default:
            return state
    }
}

export default userReducer
