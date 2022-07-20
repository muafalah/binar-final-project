import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserRegister = createAsyncThunk("authUserThunk/postUserRegister", async ({ username, email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/user/register',
            {
                "username": username,
                "email": email,
                "password": password,
                "roleId": 1,
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postUserLogin = createAsyncThunk("authUserThunk/postUserLogin", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/login',
            {
                "email": email,
                "password": password,
            },
        )
        localStorage.setItem("TokenSecondGadget", JSON.stringify({ token: response.data.data.access_token }))
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getUserVerification = createAsyncThunk("authUserThunk/getUserVerification", async () => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.get(process.env.REACT_APP_HOST + '/user/verification',
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

export const putUserEdit = createAsyncThunk("authUserThunk/putUserEdit", async ({ dataProfile, image, fullname, phone, city, address }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.put(process.env.REACT_APP_HOST + '/user/update-profile/' + dataProfile.userId,
            {
                "username": dataProfile.username,
                "fullname": fullname,
                "email": dataProfile.email,
                "password": dataProfile.password,
                "address": address,
                "phone": phone,
                "img": image,
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

export const postRegisterSeller = createAsyncThunk("authUserThunk/postRegisterSeller", async ({ dataProfile, username, description }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/user/register-seller',
            {
                "username": dataProfile.username,
                "email": dataProfile.email,
                "password": dataProfile.password,
                "description": description,
                "roles": 2,
            },
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const authUser = createSlice({
    name: "authUser",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataUserRegister: null,
        dataUserLogin: null,
        dataUserVerification: null,
        dataUserEdit: null,
    },
    extraReducers: {
        [postUserRegister.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postUserRegister.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataUserRegister = action.payload
        },
        [postUserRegister.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postUserLogin.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postUserLogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataUserLogin = action.payload
        },
        [postUserLogin.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getUserVerification.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getUserVerification.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataUserVerification = action.payload
        },
        [getUserVerification.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putUserEdit.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putUserEdit.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataUserEdit = action.payload
        },
        [putUserEdit.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default authUser.reducer