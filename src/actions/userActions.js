export const CREATE_USER = "CREATE_USER"
export const createUser = (success) => ({
    type: CREATE_USER,
    success: success
})

export const LOGIN_USER = "LOGIN_USER"
export const loginUser = (response) => ({
    type: LOGIN_USER,
    newUser: response
})

export const LOGOUT = "LOGOUT"
export const logout = () => ({
    type: LOGOUT
})

export const FIND_ALL_USERS ="FIND_ALL_USERS"
export const findAllUsers = (users) => ({
    type: FIND_ALL_USERS,
    users: users
})

export const UPDATE_USER ="UPDATE_USER"
export const updateUser = (user) => ({
    type: UPDATE_USER,
    newUser: user
})

export const DELETE_USER ="DELETE_USER"
export const deleteUser = (user) =>({
    type: DELETE_USER,
    user: user

})

export const FIND_USER_BY_USERNAME="FIND_USER_BY_USERNAME"
export const findUserByUsername = (user) => ({
    type: FIND_USER_BY_USERNAME,
    user: user
})

export const REMOVE_FROM_FOLLOWLIST ="REMOVE_FROM_FOLLOWLIST"
export const removeFromFollowlist = (user) => ({
    type: REMOVE_FROM_FOLLOWLIST,
    user: user
})
