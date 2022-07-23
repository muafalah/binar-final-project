import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCity = createAsyncThunk("citySliceThunk/getAllCity", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/city/display-all',
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const citySlice = createSlice({
    name: "citySlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllCity: null,
    },
    extraReducers: {
        [getAllCity.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllCity.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllCity = action.payload
        },
        [getAllCity.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default citySlice.reducer