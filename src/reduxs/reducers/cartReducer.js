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

      console.log('index', index);

      if (index !== -1) {
        let newCart = state.cart;

        newCart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity + quantity,
        };

        state.cart = newCart;
        return;
      }

      state.cart = [...state.cart, {...addItem, quantity}];

      console.log('cart', state.cart);
    },
    removeCartItem(state, action) {
      let {removeItem} = action.payload;

      const newCart = state.cart.filter(
        element => element.key !== removeItem.key,
      );

      state.cart = newCart;
    },
    increaseCartItem(state, action) {
      let {key} = action.payload;

      const index = state.cart.findIndex(element => element.key === key);

      if (index !== -1) {
        let newCart = state.cart;

        newCart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity + 1,
        };

        state.cart = newCart;
      }
    },
    decreaseCartItem(state, action) {
      let {key} = action.payload;

      const index = state.cart.findIndex(element => (element.key = key));

      if (index !== -1 && state.cart[index] > 1) {
        let newCart = state.cart;

        newCart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity - 1,
        };

        state.cart = newCart;
      }
    },
    clearWishList(state, action) {
      state.wishList = [];
    },
    addWishListItem(state, action) {
      let {addItem} = action.payload;

      state.wishList = [...state.wishList, addItem];
    },
    removeWishListItem(state, action) {
      let {removeItem} = action.payload;

      const newWishList = state.wishList.filter(
        element => element.key !== removeItem.key,
      );

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
