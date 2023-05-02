import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fruitQuantities: {},
    cartItems: [],
  },
  mutations: {
    addItemToCart(state, item) {
      // Check if the item already exists in the cart
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      // If it exists, increment the quantity property by 1
      if (cartItem) {
        cartItem.quantity++;
        cartItem.total = cartItem.quantity * cartItem.price;
      } else {
        // If it doesn't exist, push the new item to the cart
        const newItem = { ...item, quantity: 1, total: item.price };
        state.cartItems.push(newItem);
      }
    },

    removeFromCart(state, itemId) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },
  },

  getters: {},
});

export default store;
