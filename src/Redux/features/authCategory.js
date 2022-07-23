import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategory = createAsyncThunk("authCategoryThunk/getAllCategory", async () => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/category/all',
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

const authCategory = createSlice({
    name: "authCategory",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllCategory: null,
    },
    extraReducers: {
        [getAllCategory.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllCategory = action.payload
        },
        [getAllCategory.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default authCategory.reducer