import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../src/Features/posts/PostSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
