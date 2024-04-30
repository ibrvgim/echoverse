import { createSlice } from '@reduxjs/toolkit';

function itemsInLocalStorage() {
  const cartItems = localStorage.getItem('cart');
  return cartItems ? JSON.parse(cartItems) : [];
}

function updateLocalStorage(item) {
  localStorage.setItem('cart', JSON.stringify(item));
}

const initialState = {
  product: itemsInLocalStorage(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const checkProduct = state.product.find(
        (item) => item.id === action.payload.id
      );

      if (checkProduct) {
        checkProduct.quantity += action.payload.quantity;
      } else {
        state.product.push(action.payload);
      }

      updateLocalStorage(state.product);
    },

    removeItemFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );

      updateLocalStorage(state.product);
    },

    removeAllProducts: (state) => {
      state.product = [];
      localStorage.clear('cart');
    },

    increaseQuantity: (state, action) => {
      const product = state.product.find((item) => item.id === action.payload);
      product.quantity++;

      updateLocalStorage(state.product);
    },

    decreaseQuantity: (state, action) => {
      const product = state.product.find((item) => item.id === action.payload);
      product.quantity--;

      if (product.quantity === 0)
        cartSlice.caseReducers.removeItemFromCart(state, action);

      updateLocalStorage(state.product);
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  removeAllProducts,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getProductsCart = (state) => state.cart.product;
