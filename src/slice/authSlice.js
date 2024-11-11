import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token : localStorage.getItem("token")
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
      console.log("TOKEn",state.token)
    },
    logout(state) {
      state.token = null; // Clear token in the Redux state
      localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
});

export const { setSignupData, setLoading, setToken , logout} = authSlice.actions;

export default authSlice.reducer;