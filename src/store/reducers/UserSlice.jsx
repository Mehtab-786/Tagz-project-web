import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
    updateUser: (state, action) => {
      const { email, newData } = action.payload;

      const idx = state.users.findIndex(
        (user) =>
          user.email.trim().toLowerCase() ===
          state.currentUser.email.trim().toLowerCase()
      );

      if (idx != -1) {
        state.users[idx] = { ...state.users[idx], ...newData };

        state.currentUser = { ...state.currentUser, ...newData };

        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      }
    },
        addToCart: (state, action) => {
      const item = action.payload;
      const idx = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );
      if (idx !== -1) {
        const user = { ...state.users[idx] };
        user.cart = user.cart || [];

        const existingItem = user.cart.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          user.cart.push({ ...item, quantity: 1 });
        }

        updateUserState(state, idx, user);
      }
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const idx = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );
      if (idx !== -1) {
        const user = { ...state.users[idx] };
        const item = user.cart?.find((i) => i.id === id);
        if (item) item.quantity += 1;
        updateUserState(state, idx, user);
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const idx = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );
      if (idx !== -1) {
        const user = { ...state.users[idx] };
        user.cart = user.cart || [];

        const itemIndex = user.cart.findIndex((i) => i.id === id);
        if (itemIndex !== -1) {
          if (user.cart[itemIndex].quantity > 1) {
            user.cart[itemIndex].quantity -= 1;
          } else {
            user.cart.splice(itemIndex, 1);
          }
          updateUserState(state, idx, user);
        }
      }
    },

    clearCart: (state) => {
      const idx = state.users.findIndex(
        (u) => u.email === state.currentUser.email
      );
      if (idx !== -1) {
        const user = { ...state.users[idx], cart: [] };
        updateUserState(state, idx, user);
      }
    },

  },
});

export const {
  loginUser,
  registerUser,
  logoutUser,
  updateUser,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = userSlice.actions;

export default userSlice.reducer;



const updateUserState = (state, idx, updatedUser) => {
  state.users[idx] = updatedUser;
  state.currentUser = updatedUser;

  localStorage.setItem("users", JSON.stringify(state.users));
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
};

