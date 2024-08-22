import { createSlice,  } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  email: "",
  firstName: "",
  lastName: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, firstName, lastName, token } = action.payload;
      state.isLogged = true;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.token = token;
    },
    logout: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      state.isLogged = false;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setToken,
  login,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
