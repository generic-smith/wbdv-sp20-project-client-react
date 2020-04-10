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
