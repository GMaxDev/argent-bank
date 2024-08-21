import { createSlice } from "@reduxjs/toolkit"
import { postLogin, postProfile } from "../utils/services/callApi";

const initialState = {
    isLogged: false,
    email: '',
    firstName: '',
    lastName: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        login: (state) => {
            state.isLogged = true
        },
        logout: (state) => {
            state.email = ''
            state.firstName = ''
            state.lastName = ''
            state.token = ''
            state.isLogged = false
        }
    }
})

// Thunk pour gérer le login
export const signin = (email, password, navigate) => async (dispatch) => {
  try {
      const data = { email, password };
      const response = await postLogin(data);

      const tokenGenerate = response.body.token;
      const tokenResult = "Bearer " + tokenGenerate;

      const profile = await postProfile(tokenResult);

      // Dispatch des actions pour mettre à jour les champs dans Redux
      dispatch(setEmail(profile.body.email));
      dispatch(setFirstName(profile.body.firstName));
      dispatch(setLastName(profile.body.lastName));
      dispatch(setToken(tokenResult));
      dispatch(login());

      // Rediriger l'utilisateur vers la page de profil
      navigate("/profile");
  } catch (error) {
      console.error("An error occurred during login:", error);
  }
};

export const { setEmail, setPassword, setFirstName, setLastName, setToken, login, logout} = userSlice.actions
export default userSlice.reducer