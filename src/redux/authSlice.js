const { createSlice } = require("@reduxjs/toolkit");

const initialState= {
    login: false
}

const authSlice  = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.login = action.payload.login
        }
    }
})

export const authReducer = authSlice.reducer
export const {login} = authSlice.actions