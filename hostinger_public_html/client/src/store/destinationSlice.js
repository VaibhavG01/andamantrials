import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { destinationService } from '../api/destinationService';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await destinationService.getDestinations();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDestinationBySlug = createAsyncThunk(
  'destinations/fetchDestinationBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await destinationService.getDestinationBySlug(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const destinationSlice = createSlice({
  name: 'destinations',
  initialState: {
    items: [],
    selectedDestination: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDestinationBySlug.fulfilled, (state, action) => {
        state.selectedDestination = action.payload;
      });
  },
});

export default destinationSlice.reducer;
