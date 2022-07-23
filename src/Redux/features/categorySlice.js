import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategory = createAsyncThunk("categorySliceThunk/getAllCategory", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/category/all',
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postAddCategory = createAsyncThunk("categorySliceThunk/postAddCategory", async ({ name, image }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const data = new FormData();
        data.append('categoryName', name);
        data.append('image', image);
        const response = await axios.post(process.env.REACT_APP_HOST + '/category/add',
            data,
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

export const putEditCategory = createAsyncThunk("categorySliceThunk/putEditCategory", async ({ idCategory, name, image }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const data = new FormData();
        data.append('categoryName', name);
        data.append('image', image);
        const response = await axios.put(process.env.REACT_APP_HOST + '/category/edit/' + idCategory,
            data,
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

export const delRemoveCategory = createAsyncThunk("categorySliceThunk/delRemoveCategory", async ({ idCategory }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/category/delete/' + idCategory,
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

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllCategory: null,
        dataAddCategory: null,
        dataRemoveCategory: null
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

        [postAddCategory.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddCategory = action.payload
        },
        [postAddCategory.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveCategory.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveCategory = action.payload
        },
        [delRemoveCategory.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default categorySlice.reducer