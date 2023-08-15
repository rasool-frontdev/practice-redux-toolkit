import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Lorem Ipsum is Lore than others who share Lore",
  },
  {
    id: "2",
    title: "Slicess",
    content: "Lorem Ipsum is Lore than others who share Lore",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
