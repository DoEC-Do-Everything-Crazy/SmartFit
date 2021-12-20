import {createSlice} from '@reduxjs/toolkit';

const defaultCartState = {
  cart: [],
  wishList: [],
  tempWishList: [],
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

      const formattedAddItem = {
        _id: addItem._id,
        name: addItem.name,
        image: addItem.image,
        description: addItem.description,
        lastPrice: addItem.lastPrice,
        key: addItem.key,
        quantity: addItem.quantity,
      };

      state.cart = [...state.cart, {...formattedAddItem, quantity}];
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

    setTempWishList(state, action) {
      const newList = action.payload;
      state.tempWishList = newList;
    },
    clearTempWishList(state, action) {
      state.tempWishList = [];
    },
    addTempWishListItem(state, action) {
      let key = action.payload;

      state.tempWishList = [...state.tempWishList, key];
    },
    removeTempWishListItem(state, action) {
      let key = action.payload;

      const newWishList = state.tempWishList.filter(element => element !== key);

      state.tempWishList = newWishList;
    },

    setTempWishListItemTouched(state, action) {
      const key = action.payload;

      const objIndex = state.tempWishList.findIndex(obj => obj.key === key);

      if (objIndex === -1) {
        return;
      }

      state.tempWishList[objIndex].touched =
        !state.tempWishList[objIndex].touched;
    },

    tempWishListToWishList(state, action) {
      let keyList = [];

      state.tempWishList.map(item => {
        item.touched && keyList.push(item.key);
      });

      state.wishList = keyList;
      state.tempWishList = [];
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
  setTempWishList,
  clearTempWishList,
  addTempWishListItem,
  removeTempWishListItem,
  setTempWishListItemTouched,
  tempWishListToWishList,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
