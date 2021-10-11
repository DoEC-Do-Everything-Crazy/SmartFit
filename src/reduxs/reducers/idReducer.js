import {createSlice} from '@reduxjs/toolkit';

const defaultIdState = {
  id: '',
};

const idSlide = createSlice({
  name: 'id',
  initialState: defaultIdState,
  reducers: {
    getID(state, action) {
      state.id = action.payload;
    },
  },
});

export const {getID} = idSlide.actions;
export const IdReducer = idSlide.reducer;
