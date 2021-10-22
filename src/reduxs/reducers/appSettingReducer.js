import {createSlice} from '@reduxjs/toolkit';
import {getI18n} from 'react-i18next';

const defaultAppSettingState = {
  language: 'vi',
};
export const Language = {
  en: 'en',
  vi: 'vi',
};
const appSettingSlice = createSlice({
  name: 'appSetting',
  initialState: defaultAppSettingState,
  reducers: {
    changeLanguage(state, action) {
      const i18n = getI18n();
      i18n.changeLanguage(action.payload);
      state.language = action.payload;
    },
  },
});

export const {changeLanguage} = appSettingSlice.actions;
export const AppSettingReducer = appSettingSlice.reducer;
