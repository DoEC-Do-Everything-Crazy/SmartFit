import {createSlice} from '@reduxjs/toolkit';

const defaultHistoryState = {
  historyList: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState: defaultHistoryState,
  reducers: {
    clearHistory(state) {
      state.historyList = [];
    },
    addHistoryItem(state, action) {
      let newItem = action.payload;
      if (!state.historyList.includes(newItem)) {
        state.historyList = state.historyList.concat(newItem);
      }
    },
    removeHistoryItem(state, action) {
      let removeItem = action.payload;
      let newList = state.historyList.filter(e => e !== removeItem);
      state.historyList = newList;
    },
  },
});
export const {clearHistory, addHistoryItem, removeHistoryItem} =
  historySlice.actions;
export const HistoryReducer = historySlice.reducer;
