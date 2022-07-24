import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postAddNotification = createAsyncThunk("notificationSliceThunk/postAddNotification", async ({ idBid }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.post(process.env.REACT_APP_HOST + '/notification/add/',
            {
                "bidId": idBid,
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

export const getMiniBuyerNotification = createAsyncThunk("notificationSliceThunk/getMiniBuyerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/notification/buyer/mini/' + idUser,
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

export const getMiniSellerNotification = createAsyncThunk("notificationSliceThunk/getMiniSellerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/notification/seller/mini/' + idUser,
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

export const delRemoveAllBuyerNotification = createAsyncThunk("wishlistSliceThunk/delRemoveAllBuyerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/notification/buyer/delete-all/' + idUser,
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

export const delRemoveAllSellerNotification = createAsyncThunk("wishlistSliceThunk/delRemoveAllSellerNotification", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/notification/seller/delete-all/' + idUser,
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
        dataAddNotification: null,
        dataAllBuyerNotification: null,
        dataAllSellerNotification: null,
        dataMiniBuyerNotification: null,
        dataMiniSellerNotification: null,
        dataRemoveAllBuyerNotification: null,
        dataRemoveAllSellerNotification: null,
    },
    extraReducers: {
        [postAddNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddNotification = action.payload
        },
        [postAddNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

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

        [getMiniBuyerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getMiniBuyerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataMiniBuyerNotification = action.payload
        },
        [getMiniBuyerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getMiniSellerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getMiniSellerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataMiniSellerNotification = action.payload
        },
        [getMiniSellerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveAllBuyerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveAllBuyerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveAllBuyerNotification = action.payload
        },
        [delRemoveAllBuyerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveAllSellerNotification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveAllSellerNotification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveAllSellerNotification = action.payload
        },
        [delRemoveAllSellerNotification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default notificationSlice.reducer