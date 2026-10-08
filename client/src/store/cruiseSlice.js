import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cruiseService } from '../api/cruiseService';

export const fetchCruises = createAsyncThunk(
  'cruises/fetchCruises',
  async (_, { rejectWithValue }) => {
    try {
      const response = await cruiseService.getCruises();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cruiseSlice = createSlice({
  name: 'cruises',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCruises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCruises.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default cruiseSlice.reducer;
