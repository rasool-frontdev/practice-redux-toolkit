import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/posts";
import usersReducer from "../slices/users";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});
