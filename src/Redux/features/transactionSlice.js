import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTransaction = createAsyncThunk("transactionSliceThunk/getAllTransaction", async ({ idBuyer }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/bid/buyer/all/' + idBuyer,
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

export const postAddTransaction = createAsyncThunk("transactionSliceThunk/postAddTransaction", async ({ idUser, idProduct, bidPrice }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.post(process.env.REACT_APP_HOST + '/bid/buyer/add',
            {
                "userId": idUser,
                "productId": idProduct,
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

export const putEditTransaction = createAsyncThunk("transactionSliceThunk/putEditTransaction", async ({ idBid, bidStatus, bidPrice }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.put(process.env.REACT_APP_HOST + '/bid/buyer/edit/' + idBid,
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

export const delRemoveTransaction = createAsyncThunk("transactionSliceThunk/delRemoveTransaction", async ({ idBid }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/bid/buyer/delete/' + idBid,
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

const transactionSlice = createSlice({
    name: "transactionSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllTransaction: null,
        dataAddTransaction: null,
        dataEditTransaction: null,
        dataRemoveTransaction: null,
    },
    extraReducers: {
        [getAllTransaction.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllTransaction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllTransaction = action.payload
        },
        [getAllTransaction.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postAddTransaction.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddTransaction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddTransaction = action.payload
        },
        [postAddTransaction.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putEditTransaction.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putEditTransaction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataEditTransaction = action.payload
        },
        [putEditTransaction.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveTransaction.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveTransaction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveTransaction = action.payload
        },
        [delRemoveTransaction.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default transactionSlice.reducer