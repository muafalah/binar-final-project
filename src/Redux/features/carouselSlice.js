import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCarousel = createAsyncThunk("carouselSliceThunk/getAllCarousel", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/carousel/all',
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getDetailCarousel = createAsyncThunk("carouselSliceThunk/getDetailCarousel", async ({ idCarousel }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/carousel/details/' + idCarousel,
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

export const postAddCarousel = createAsyncThunk("carouselSliceThunk/postAddCarousel", async ({ name, link, image }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const data = new FormData();
        data.append('carouselName', name);
        data.append('link', link);
        data.append('img', image);
        const response = await axios.post(process.env.REACT_APP_HOST + '/carousel/add',
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

export const putEditCarousel = createAsyncThunk("carouselSliceThunk/putEditCarousel", async ({ idCarousel, name, link, image }) => {
    try {
        if (image) {
            const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
            const data = new FormData();
            data.append('carouselName', name);
            data.append('link', link);
            data.append('img', image);
            const response = await axios.put(process.env.REACT_APP_HOST + '/carousel/edit/' + idCarousel,
                data,
                {
                    headers: {
                        "Authorization": `Bearer ${UserToken.token}`
                    }
                }
            )
            return response.data
        } else {
            const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
            const data = new FormData();
            data.append('carouselName', name);
            data.append('link', link);
            const response = await axios.put(process.env.REACT_APP_HOST + '/carousel/edit/' + idCarousel,
                data,
                {
                    headers: {
                        "Authorization": `Bearer ${UserToken.token}`
                    }
                }
            )
            return response.data
        }
    } catch (error) {
        return error.response.data
    }
})

export const delRemoveCarousel = createAsyncThunk("carouselSliceThunk/delRemoveCarousel", async ({ idCarousel }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.delete(process.env.REACT_APP_HOST + '/carousel/delete/' + idCarousel,
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

const carouselSlice = createSlice({
    name: "carouselSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllCarousel: null,
        dataDetailCarousel: null,
        dataAddCarousel: null,
        dataEditCarousel: null,
        dataRemoveCarousel: null,
    },
    extraReducers: {
        [getAllCarousel.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAllCarousel.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAllCarousel = action.payload
        },
        [getAllCarousel.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getDetailCarousel.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getDetailCarousel.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataDetailCarousel = action.payload
        },
        [getDetailCarousel.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postAddCarousel.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddCarousel.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddCarousel = action.payload
        },
        [postAddCarousel.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putEditCarousel.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putEditCarousel.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataEditCarousel = action.payload
        },
        [putEditCarousel.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delRemoveCarousel.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delRemoveCarousel.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRemoveCarousel = action.payload
        },
        [delRemoveCarousel.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default carouselSlice.reducer