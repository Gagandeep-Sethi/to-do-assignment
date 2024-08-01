import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
}

// Check local storage for user data and initialize the state accordingly
const getUserFromLocalStorage = (): UserState => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser) as UserState;
    }
  }
  return { username: "" };
};

// Define initial state with a default value or from local storage
const initialState: UserState = getUserFromLocalStorage();

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;

      // Store user data in local storage
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: action.payload.username })
        );
      }
    },
    removeUser: (state) => {
      state.username = "";

      // Remove user data from local storage
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

// Export actions and reducer
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
