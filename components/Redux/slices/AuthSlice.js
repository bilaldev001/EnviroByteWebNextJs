import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Register User
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ formData, router }, thunkAPI) => {
    try {
      let response = await axios.post(`/api/auth/signup`, formData);
      router.push("/");
      toast.success(response?.data?.message);
      return response.data;
    } catch (error) {
      console.log(error);
      let message = error.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ formData, router }, thunkAPI) => {
    try {
      let response = await axios.post(`/api/auth/signin`, formData);
      router.push("/");
      toast.success(response?.data?.message);
      return response.data;
    } catch (error) {
      console.log(error);
      let message = error.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  "user/update",
  async ({ formData, userId }, thunkAPI) => {
    try {
      let response = await axios.patch(`/api/user/${userId}`, formData);
      toast.success(response?.data?.message);
      return response.data;
    } catch (error) {
      console.log(error);
      let message = error.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const blogCount = createAsyncThunk(
  "blogs",
  async (setValidation, thunkAPI) => {
    try {
      let response = await axios.post(`/api/blogs`);
      setValidation(response?.data?.validation);
      return response.data;
    } catch (error) {
      console.log(error);
      let message = error.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

let initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  blogCountData: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(blogCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(blogCount.fulfilled, (state, action) => {
        state.blogCountData = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(blogCount.rejected, (state, action) => {
        state.blogCountData = { validation: false };
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
