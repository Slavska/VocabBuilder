import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api/",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post("/users/signup", body);

      return user.data;
    } catch (error) {
      toast.warn(
        error.response.status === 409
          ? "Provided email already exists"
          : "Bad request"
      );
      return rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post("/users/signin", body);
      setToken(user.data.token);
      localStorage.setItem("refreshToken", user.data.token);
      localStorage.setItem("accessToken", user.data.token);
      return user.data;
    } catch (error) {
      toast.warn(
        error.response.status === 403
          ? "Email doesn'\t exist or password is wrong"
          : "Bad request"
      );
      return rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/signout");
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/user",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(accessToken);
      const { data } = await instance.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
