import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers, fetchUserById } from "../../api/userApi";
import { User, UserResponse } from "../../types";

/**
 * Initial state for the user slice.
 */
interface UserState {
  users: User[];
  usersPagination: {
    limit: number;
    skip: number;
    total: number;
  };
  selectedUser: User | null;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  usersPagination: {
    limit: 0,
    skip: 0,
    total: 0,
  },
  selectedUser: null,
  loading: false,
};

/**
 * Fetch users asynchronously using Redux Thunk.
 */
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

/**
 * Fetch a specific user by ID asynchronously.
 */
export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (id: number) => {
    const response = await fetchUserById(id);
    return response;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAllUsers.fulfilled,
      (state, action: PayloadAction<UserResponse>) => {
        state.loading = false;
        state.users = action.payload.users;
        state.usersPagination = {
          limit: action.payload.limit,
          skip: action.payload.skip,
          total: action.payload.total,
        };
      }
    );
    builder.addCase(fetchAllUsers.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUserDetails.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.selectedUser = action.payload;
      }
    );
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
