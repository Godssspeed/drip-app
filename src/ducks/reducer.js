import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: ""
};

const GET_POSTS = "GET_POSTS";

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: axios.get("/api/posts")
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_POSTS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_POSTS}_FULFILLED`:
      return { ...state, posts: action.payload.data, isLoading: false };
    case `${GET_POSTS}_REJECTED`:
      return { ...state, error: "Error Loading Posts" };
    default:
      return state;
  }
}
