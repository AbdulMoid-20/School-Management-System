

import { createSlice } from "@reduxjs/toolkit";

const users = [
    { email: 'admin@gmail.com', password: "admin@1234", role: 'admin' },
    { email: 'teacher@gmail.com', password: "teacher@1234", role: 'teacher' },
    { email: 'student@gmail.com', password: "student@1234", role: 'student' }
]

const initialState = {
    user: null,
    role: null,
    isLoggedIn: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            console.log(action.payload)
            state.error = '' 

            const userFound = users.find(
                (user) => user.email === email && user.password === password
            )

            if (userFound) {
                state.user = userFound.email
                state.role = userFound.role
                state.isLoggedIn = true
                state.error = ''
            } else {
                state.error = 'Invalid Email and Password'
            }
        },

        logout:(state)=>{
            state.isLoggedIn = false
            state.role = null
            state.user = null
            state.error = ''
        }
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
