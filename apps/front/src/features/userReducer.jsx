import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogged: false,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.setPassword = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
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

export const { setEmail, setPassword, setFirstName, setLastName, setToken, toggleLogin, toggleLogout} = userSlice.actions
export default userSlice.reducer