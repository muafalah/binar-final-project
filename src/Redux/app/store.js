import { configureStore } from '@reduxjs/toolkit';
import authUser from '../features/authUser';
import carouselSlice from '../features/carouselSlice';
import categorySlice from '../features/categorySlice';
import citySlice from '../features/citySlice';
import notificationSlice from '../features/notificationSlice';
import offerSlice from '../features/offerSlice';
import productSlice from '../features/productSlice';
import transactionSlice from '../features/transactionSlice';
import wishlistSlice from '../features/wishlistSlice';

export const store = configureStore({
  reducer: {
    authUserReducer: authUser,
    cityReducer: citySlice,
    categoryReducer: categorySlice,
    productReducer: productSlice,
    offerReducer: offerSlice,
    transactionReducer: transactionSlice,
    wishlistReducer: wishlistSlice,
    notificationReducer: notificationSlice,
    carouselReducer: carouselSlice,
  },
});
