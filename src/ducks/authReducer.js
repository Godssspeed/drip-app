import axios from "axios";
const initialState = {
  user: {},
  error: ""
};

//Action Types
const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const GET_USER = "GET_USER";
const LOGOUT = "LOGOUT";
// Action Creators

export function register(username, password) {
  return {
    type: REGISTER,
    payload: axios.post("/auth/register", { username, password })
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username, password })
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/auth/user")
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: axios.post("/auth/logout")
  };
}

// Export default function for Action Types/Action Creators
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`:
      return { ...state, user: action.payload.data };
    case `${LOGIN}_FULFILLED`:
      console.log(action.payload);
      return { ...state, user: action.payload.data };
    case `${LOGIN}_REJECTED`:
      return { ...state, error: "Username or Password is incorrect" };
    case `${GET_USER}_FULFILLED`:
      return { ...state, user: action.payload.data };
    case `${LOGOUT}_FULFILLED`:
      return { ...state, user: {} };

    default:
      return state;
  }
}
