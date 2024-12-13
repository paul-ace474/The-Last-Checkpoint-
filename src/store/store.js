import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import carSlice from '../features/carSlice.jsx';
import rentalSlice from '../features/rentalSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    cars: carSlice,
    rentals: rentalSlice,
  },
});
