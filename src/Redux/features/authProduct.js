import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLatestProduct = createAsyncThunk("authProductThunk/getLatestProduct", async () => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/latest',
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

const authProduct = createSlice({
    name: "authProduct",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataLatestProduct: null,
    },
    extraReducers: {
        [getLatestProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getLatestProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataLatestProduct = action.payload
        },
        [getLatestProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default authProduct.reducer