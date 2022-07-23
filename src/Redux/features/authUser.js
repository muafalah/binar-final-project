import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserRegister = createAsyncThunk("authUserThunk/postUserRegister", async ({ username, email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/user/register',
            {
                "username": username.toLowerCase(),
                "email": email.toLowerCase(),
                "password": password,
                "roleId": 1,
            }
        )
        console.log(response.data, "sukses register")
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postUserLogin = createAsyncThunk("authUserThunk/postUserLogin", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/login',
            {
                "email": email.toLowerCase(),
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
        const data = new FormData();
        data.append('username', dataProfile.username);
        data.append('fullName', fullname.toLowerCase());
        data.append('email', dataProfile.email);
        data.append('address', address);
        data.append('phone', phone);
        data.append('img', image);
        data.append('idCity', city);
        const response = await axios.put(process.env.REACT_APP_HOST + '/user/edit/' + dataProfile.userId,
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

export const postRegisterSeller = createAsyncThunk("authUserThunk/postRegisterSeller", async ({ dataProfile, description, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/user/register-seller',
            {
                "username": dataProfile.username,
                "email": dataProfile.email,
                "password": password,
                "description": description,
                "roleId": 2,
            },
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getUserByUsername = createAsyncThunk("authUserThunk/getUserByUsername", async ({ username }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/user/profile/' + username,
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
        dataRegisterSeller: null,
        dataUserByUsername: null,
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

        [postRegisterSeller.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postRegisterSeller.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRegisterSeller = action.payload
        },
        [postRegisterSeller.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getUserByUsername.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getUserByUsername.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataUserByUsername = action.payload
        },
        [getUserByUsername.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default authUser.reducer