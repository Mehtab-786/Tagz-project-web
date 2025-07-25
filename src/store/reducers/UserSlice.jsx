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
        const user = state.users[idx];
        if (!user.cart) user.cart = [];

        const existingItem = user.cart.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          user.cart.push({ ...item, quantity: 1 });
        }

        state.users[idx] = user;
        state.currentUser = user;

        localStorage.setItem("users", JSON.stringify(state.users));
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const user = state.currentUser;
      const item = user.cart.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
      updateLocalStorageUsers(user)
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const user = state.currentUser;
      const itemIndex = user.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        if (user.cart[itemIndex].quantity > 1) {
          user.cart[itemIndex].quantity -= 1;
        } else {
          user.cart.splice(itemIndex, 1);
        }
        updateLocalStorageUsers(user)
      }      
    },
    clearCart: (state) => {
      if (state.currentUser) {
        state.currentUser.cart = [];
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



const updateLocalStorageUsers = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user; // update the user in array
    localStorage.setItem("users", JSON.stringify(users)); // update users array
    localStorage.setItem("currentUser", JSON.stringify(user)); // update currentUser
  }
};
