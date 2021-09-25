import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const defaultAuthState = {
  token: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultAuthState,
  reducers: {
    authToken(state, action) {
      state.token = action.payload
    },
  },
})

export const { authToken } = authSlice.actions
export const AuthReducer = authSlice.reducer
