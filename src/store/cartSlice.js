import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Laptop', price: 999, image: 'https://picsum.photos/200?random=1' },
    { id: 2, name: 'Phone', price: 699, image: 'https://picsum.photos/200?random=2' },
    { id: 3, name: 'Headphones', price: 199, image: 'https://picsum.photos/200?random=3' },
    { id: 4, name: 'Tablet', price: 449, image: 'https://picsum.photos/200?random=4' },
    { id: 5, name: 'Smartwatch', price: 299, image: 'https://picsum.photos/200?random=5' },
    { id: 6, name: 'Camera', price: 799, image: 'https://picsum.photos/200?random=6' },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;