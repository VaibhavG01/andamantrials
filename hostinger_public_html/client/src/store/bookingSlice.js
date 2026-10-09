import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bookingService } from '../api/bookingService';

export const fetchMyBookings = createAsyncThunk(
  'bookings/fetchMyBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await bookingService.getMyBookings();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (bookingPayload, { rejectWithValue }) => {
    try {
      const response = await bookingService.createBooking(bookingPayload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    userBookings: [],
    activeBooking: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.userBookings = action.payload;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.activeBooking = action.payload;
        state.userBookings.unshift(action.payload);
      });
  },
});

export default bookingSlice.reducer;
