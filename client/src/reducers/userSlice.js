import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    currentUser: {},
    isAuth: false
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: () => {
    
  }
})


export default userSlice.reducer;