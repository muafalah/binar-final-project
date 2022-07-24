import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllWishlist = createAsyncThunk("wishlistSliceThunk/getAllWishlist", async ({ idUser }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/wishlist/all/' + idUser,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getMiniWishlist = createAsyncThunk("wishlistSliceThunk/getMiniWishlist", async ({ idUser }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/wishlist/mini/' + idUser,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getCheckWishlist = createAsyncThunk("wishlistSliceThunk/getCheckWishlist", async ({ idUser, idProduct }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/wishlist/check/' + idUser + '/' + idProduct,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postAddWishlist = createAsyncThunk("wishlistSliceThunk/postAddWishlist", async ({ idProduct, idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.post(process.env.REACT_APP_HOST + '/wishlist/add',
            {
                "productId": idProduct,
                "userId": idUser,
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

export const delRemoveWishlist = createAsyncThunk("wishlistSliceThunk/delRemoveWishlist", async ({ idProduct, idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/wishlist/delete/' + idProduct + '/' + idUser,
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

export const delRemoveAllWishlist = createAsyncThunk("wishlistSliceThunk/delRemoveWishlist", async ({ idUser }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/wishlist/delete-all/' + idUser,
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

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllWishlist: null,
        dataMiniWishlist: null,
        dataCheckWishlist: null,
        dataAddWishlist: null,
        dataRemoveWishlist: null,
        dataRemoveAllWishlist: null,
    },
    extraReducers: {
        [getAllWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllWishlist = action.payload
        },
        [getAllWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getMiniWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getMiniWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataMiniWishlist = action.payload
        },
        [getMiniWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getCheckWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getCheckWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataCheckWishlist = action.payload
        },
        [getCheckWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postAddWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddWishlist = action.payload
        },
        [postAddWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveWishlist = action.payload
        },
        [delRemoveWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveAllWishlist.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveAllWishlist.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveAllWishlist = action.payload
        },
        [delRemoveAllWishlist.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default wishlistSlice.reducer