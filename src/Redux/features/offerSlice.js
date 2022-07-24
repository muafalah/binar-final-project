import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOffer = createAsyncThunk("offerSliceThunk/getAllOffer", async ({ idSeller }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/bid/seller/all/' + idSeller,
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

export const getDetailOffer = createAsyncThunk("offerSliceThunk/getDetailOffer", async ({ idBid }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/bid/detail/' + idBid,
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

export const putEditOffer = createAsyncThunk("offerSliceThunk/putEditOffer", async ({ idBid, bidStatus, bidPrice }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.put(process.env.REACT_APP_HOST + '/bid/seller/edit/' + idBid,
            {
                "bidStatus": bidStatus,
                "bidPrice": bidPrice,
            },
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

const offerSlice = createSlice({
    name: "offerSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllOffer: null,
        dataDetailOffer: null,
        dataEditOffer: null,
    },
    extraReducers: {
        [getAllOffer.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllOffer.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllOffer = action.payload
        },
        [getAllOffer.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getDetailOffer.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getDetailOffer.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataDetailOffer = action.payload
        },
        [getDetailOffer.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putEditOffer.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putEditOffer.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataEditOffer = action.payload
        },
        [putEditOffer.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default offerSlice.reducer