import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRentals } from '../services/rentalService';

// Fetch rentals async thunk
export const fetchRentals = createAsyncThunk('rentals/fetchRentals', async () => {
  const response = await getRentals();
  return response;
});

const rentalSlice = createSlice({
  name: 'rentals',
  initialState: {
    rentals: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRentals.fulfilled, (state, action) => {
        state.loading = false;
        state.rentals = action.payload;
      })
      .addCase(fetchRentals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selector for accessing rentals state
export const selectRentals = (state) => state.rentals.rentals;

export default rentalSlice.reducer;
