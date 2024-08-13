import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
    isLogged: false,
    email:'',
    password: '',
    firstName: '',
    lastName: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialUserState,
    reducers: {
        setUserInfo: (state, action) => {
            const {email, password, firstName, lastName, token } = action.payload
            state.email = email || state.email
            state.password = password || state.password
            state.firstName = firstName || state.firstName
            state.lastName = lastName || state.lastName
            state.token = token || state.token
        },
        toggleLogin: (state) => {
            state.isLogged = !state.isLogged
            if(!state.isLogged) {
                state.email = ''
                state.password = ''
                state.firstName = ''
                state.lastName = ''
                state.token = ''
            }
        },
        toggleLogout: (state) => {
            state.email = ''
            state.password = ''
            state.firstName = ''
            state.lastName = ''
            state.token = ''
            state.isLogged = false
        }
    }
})

export const { setUserInfo, toggleLogin, toggleLogout} = userSlice.actions
export default userSlice.reducer