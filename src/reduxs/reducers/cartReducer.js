import {createSlice} from '@reduxjs/toolkit';

const defaultCartState = {
  cart: [],
  wishList: [],
};

const cartSlice = createSlice({
  name: 'auth',
  initialState: defaultCartState,
  reducers: {
    clearCart(state) {
      state.cart = [];
    },
    addCartItem(state, action) {
      let {addItem, quantity} = action.payload;

      const index = state.cart.findIndex(
        element => element.key === addItem.key,
      );

      if (index !== -1) {
        let newCart = state.cart;

        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity + quantity,
        };

        state.cart = newCart;
        return;
      }

      state.cart = [...state.cart, {...addItem, quantity}];
    },
    removeCartItem(state, action) {
      let {removeItem} = action.payload;

      const newCart = state.cart.filter(
        element => element.key !== removeItem.key,
      );

      state.cart = newCart;
    },
    increaseCartItem(state, action) {
      let key = action.payload;

      const index = state.cart.findIndex(element => element.key === key);

      if (index !== -1) {
        let newCart = state.cart;

        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity + 1,
        };

        state.cart = newCart;
      }
    },
    decreaseCartItem(state, action) {
      let {key} = action.payload;

      const index = state.cart.findIndex(element => element.key === key);

      if (index !== -1 && state.cart[index].quantity > 1) {
        let newCart = state.cart;

        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity - 1,
        };

        state.cart = newCart;
      }
    },
    clearWishList(state, action) {
      state.wishList = [];
    },
    addWishListItem(state, action) {
      let key = action.payload;

      state.wishList = [...state.wishList, key];
    },
    removeWishListItem(state, action) {
      let key = action.payload;

      const newWishList = state.wishList.filter(element => element !== key);

      state.wishList = newWishList;
    },
  },
});
export const {
  clearCart,
  addCartItem,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
  clearWishList,
  addWishListItem,
  removeWishListItem,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
