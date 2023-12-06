import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { instance } from "../auth/operations";

export const fetchCategories = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchWords = createAsyncThunk(
  "words/all",
  async ({ page, search, category, verb, perPage }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `words/all?keyword=${search}&category=${category}&isIrregular=${verb}&page=${page}&perPage=${perPage}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCategories = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsCreate = createAsyncThunk(
  "words/create",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post(`words/create`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAdd = createAsyncThunk(
  "words/add",
  async (wordId, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/add/${wordId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWords = createAsyncThunk(
  "words/delete",
  async (wordsId, { rejectWithValue }) => {
    try {
      await instance.delete(`words/delete/${wordsId}`);
      return wordsId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsEdit = createAsyncThunk(
  "words/edit",

  async ({ wordsId, values }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`words/edit/${wordsId}`, {
        ...values,
      });
      return data;
    } catch (error) {
      ("z");
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAll = createAsyncThunk(
  "words/all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/all`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsOwn = createAsyncThunk(
  "words/own",
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`words/own?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsStatistics = createAsyncThunk(
  "words/statistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`words/statistics`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsTasks = createAsyncThunk(
  "words/tasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`words/tasks`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const wordsAnswers = createAsyncThunk(
  "words/answers",
  async (answers, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/answers", answers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
