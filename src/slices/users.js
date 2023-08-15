import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "0",
    name: "Rasool",
  },
  {
    id: "1",
    name: "Dave",
  },
];

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   const response = await axios.get(USERS_URL);
//   return response.data;
// });

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //     return action.payload;
  //   });
  // },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
