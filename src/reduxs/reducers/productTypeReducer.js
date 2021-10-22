import {createSlice} from '@reduxjs/toolkit';

const defaultTypeState = {
  type: 'equipments',
};

const productTypeSlide = createSlice({
  name: 'type',
  initialState: defaultTypeState,
  reducers: {
    getProductType(state, action) {
      state.type = action.payload;
    },
  },
});

export const {getProductType} = productTypeSlide.actions;
export const ProductTypeReducer = productTypeSlide.reducer;
