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
    incrementQuantity(state, fruitId) {
      if (state.fruitQuantities[fruitId]) {
        Vue.set(
          state.fruitQuantities,
          fruitId,
          state.fruitQuantities[fruitId] + 1
        );

        state.cartItems = state.cartItems.map((item) => {
          if (item.id === fruitId) {
            item.quantity++;
          }
          return item;
        });
      } else {
        Vue.set(state.fruitQuantities, fruitId, 2);

        const newItem = { ...state.fruits[fruitId], quantity: 1 };
        state.cartItems.push(newItem);
      }
    },
    decrementQuantity(state, fruitId) {
      if (state.fruitQuantities[fruitId]) {
        Vue.set(
          state.fruitQuantities,
          fruitId,
          state.fruitQuantities[fruitId] - 1
        );
        if (state.fruitQuantities[fruitId] <= 0) {
          delete state.fruitQuantities[fruitId];
        }

        state.cartItems = state.cartItems
          .map((item) => {
            if (item.id === fruitId) {
              item.quantity--;
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
      }
    },
  },

  getters: {},
});

export default store;
