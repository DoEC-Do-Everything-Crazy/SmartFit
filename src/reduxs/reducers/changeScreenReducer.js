import {createSlice} from '@reduxjs/toolkit';

const defaultChangeScreenState = {
  transferCourseScreen: '',
  routeScreen: '',
};

const changeScreenSlice = createSlice({
  name: 'screen',
  initialState: defaultChangeScreenState,
  reducers: {
    changeScreen(state, action) {
      state.transferCourseScreen = action.payload;
    },
    changeRouteScreen(state, action) {
      state.routeScreen = action.payload;
    },
  },
});

export const {changeScreen, changeRouteScreen} = changeScreenSlice.actions;
export const ChangeScreenReducer = changeScreenSlice.reducer;
