import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByUsername = createAsyncThunk("productSliceThunk/getProductByUsername", async ({ username }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/user/' + username,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getLatestProduct = createAsyncThunk("productSliceThunk/getLatestProduct", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/latest',
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getDetailProduct = createAsyncThunk("productSliceThunk/getDetailProduct", async ({ idProduct }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/detail/' + idProduct,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getRelatedProduct = createAsyncThunk("productSliceThunk/getRelatedProduct", async ({ idCategory }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/related/' + idCategory,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

// export const delRemoveProduct = createAsyncThunk("productSliceThunk/delRemoveProduct", async ({idProduct}) => {
//     try {
//         const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
//         const response = await axios.delete(process.env.REACT_APP_HOST + '/category/delete/' + idProduct,
//             {
//                 headers: {
//                     "Authorization": `Bearer ${UserToken.token}`
//                 }
//             }
//         )
//         return response.data
//     } catch (error) {
//         return error.response.data
//     }
// })

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataProductByUsername: null,
        dataLatestProduct: null,
        dataDetailProduct: null,
        dataRelatedProduct: null,
    },
    extraReducers: {
        [getProductByUsername.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getProductByUsername.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataProductByUsername = action.payload
        },
        [getProductByUsername.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

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

        [getDetailProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getDetailProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataDetailProduct = action.payload
        },
        [getDetailProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getRelatedProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getRelatedProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRelatedProduct = action.payload
        },
        [getRelatedProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default productSlice.reducer