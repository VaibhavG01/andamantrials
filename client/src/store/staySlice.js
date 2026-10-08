import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stayService } from '../api/stayService';

export const fetchStays = createAsyncThunk(
  'stays/fetchStays',
  async (_, { rejectWithValue }) => {
    try {
      const response = await stayService.getStays();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const staySlice = createSlice({
  name: 'stays',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStays.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStays.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default staySlice.reducer;
