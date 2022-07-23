import { configureStore } from '@reduxjs/toolkit';
import authCategory from '../features/authCategory';
import authProduct from '../features/authProduct';
import authUser from '../features/authUser';
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
    authCategoryReducer: authCategory,
    authProductReducer: authProduct,
    cityReducer: citySlice,
    categoryReducer: categorySlice,
    productReducer: productSlice,
    offerReducer: offerSlice,
    transactionReducer: transactionSlice,
    wishlistReducer: wishlistSlice,
    notificationReducer: notificationSlice,
  },
});
