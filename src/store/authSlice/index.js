import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
