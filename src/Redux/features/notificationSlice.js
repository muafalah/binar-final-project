import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBuyerNotification = createAsyncThunk("notificationSliceThunk/getAllBuyerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/notification/buyer/all/' + idUser,
            {
                headers: {
                    "Authorization": `Bearer ${UserToken.token}`
                }
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getAllSellerNotification = createAsyncThunk("notificationSliceThunk/getAllSellerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/notification/seller/all/' + idUser,
            {
                headers: {
                    "Authorization": `Bearer ${UserToken.token}`
                }
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const notificationSlice = createSlice({
    name: "notificationSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllBuyerNotification: null,
        dataAllSellerNotification: null,
    },
    extraReducers: {
        [getAllBuyerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllBuyerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllBuyerNotification = action.payload
        },
        [getAllBuyerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getAllSellerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllSellerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllSellerNotification = action.payload
        },
        [getAllSellerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default notificationSlice.reducer