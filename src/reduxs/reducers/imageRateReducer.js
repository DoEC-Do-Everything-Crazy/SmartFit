import {createSlice} from '@reduxjs/toolkit';

const defaultImageRateState = {
  image: [],
};

const imageRateSlice = createSlice({
  name: 'image',
  initialState: defaultImageRateState,
  reducers: {
    addImage(state, action) {
      state.image.push(action.payload);
    },
    removeImage(state) {
      state.image = [];
    },
  },
});

export const {addImage, removeImage} = imageRateSlice.actions;
export const ImageRateReducer = imageRateSlice.reducer;
