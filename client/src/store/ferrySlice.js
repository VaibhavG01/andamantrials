import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ferryService } from '../api/ferryService';

export const fetchFerries = createAsyncThunk(
  'ferries/fetchFerries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ferryService.getFerries();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchFerries = createAsyncThunk(
  'ferries/searchFerries',
  async (searchParams, { rejectWithValue }) => {
    try {
      const response = await ferryService.searchFerries(searchParams);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ferrySlice = createSlice({
  name: 'ferries',
  initialState: {
    items: [],
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFerries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFerries.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(searchFerries.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default ferrySlice.reducer;
