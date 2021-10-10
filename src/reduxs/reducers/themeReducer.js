import {createSlice} from '@reduxjs/toolkit';

const defaultThemeState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: defaultThemeState,
  reducers: {
    changeTheme(state, action) {
      if (action.payload === 'light') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
    },
  },
});

export const {changeTheme} = themeSlice.actions;
export const ThemeReducer = themeSlice.reducer;
