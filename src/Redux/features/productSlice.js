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

export const postAddProduct = createAsyncThunk("productSliceThunk/postAddProduct", async ({ userId, name, category, price, serialNumber, description, image }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const data = new FormData();
        data.append('userId', userId);
        data.append('productName', name);
        data.append('categoryId', category);
        data.append('price', price);
        data.append('serialNumber', serialNumber);
        data.append('description', description);
        data.append('photo1', image[0]);
        data.append('photo2', image[1]);
        data.append('photo3', image[2]);
        data.append('photo4', image[3]);
        const response = await axios.post(process.env.REACT_APP_HOST + '/product/add',
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

export const putEditStatusProduct = createAsyncThunk("productSliceThunk/putEditStatusProduct", async ({ idProduct, productStatus }) => {
    try {
        const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
        const response = await axios.put(process.env.REACT_APP_HOST + '/prodcut/edit/status' + idProduct,
            {
                "productStatus": productStatus,
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

export const putEditProduct = createAsyncThunk("categorySliceThunk/putEditProduct", async ({ idProduct, idCategory, idUser, productName, serialNumber, price, description, image, productStatus }) => {
    try {
        if (image[0].check || image[1].check || image[2].check || image[3].check) {
            const UserToken = JSON.parse(localStorage.getItem("TokenSecondGadget"))
            const data = new FormData();
            data.append('categoryId', idCategory);
            data.append('userId', idUser);
            data.append('productName', productName);
            data.append('serialNumber', serialNumber);
            data.append('price', price);
            data.append('description', description);
            data.append('productStatus', productStatus);
            const response = await axios.put(process.env.REACT_APP_HOST + '/product/edit/' + idProduct,
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
            data.append('categoryId', idCategory);
            data.append('userId', idUser);
            data.append('productName', productName);
            data.append('serialNumber', serialNumber);
            data.append('price', price);
            data.append('description', description);
            data.append('photo1', image[0]);
            data.append('photo2', image[1]);
            data.append('photo3', image[2]);
            data.append('photo4', image[3]);
            data.append('productStatus', productStatus);
            const response = await axios.put(process.env.REACT_APP_HOST + '/product/edit/' + idProduct,
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

export const getSearchProductByKeyword = createAsyncThunk("productSliceThunk/getSearchProductByKeyword", async ({ fullName }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/filter-by?productName=' + fullName,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getSearchProductByFilter = createAsyncThunk("productSliceThunk/getSearchProductByFilter", async ({ fullName, idCategory, idCity }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/product/all?productName=' + fullName + '&categoryId=' + idCategory + '&idCity=' + idCity,
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

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
        dataAddProduct: null,
        dataEditStatusProduct: null,
        dataEditProduct: null,
        dataSearchProductByKeyword: null,
        dataSearchProductByFilter: null,
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

        [postAddProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAddProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataAddProduct = action.payload
        },
        [postAddProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putEditStatusProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putEditStatusProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataEditStatusProduct = action.payload
        },
        [putEditStatusProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [putEditProduct.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [putEditProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataEditProduct = action.payload
        },
        [putEditProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getSearchProductByKeyword.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getSearchProductByKeyword.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataSearchProductByKeyword = action.payload
        },
        [getSearchProductByKeyword.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getSearchProductByFilter.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getSearchProductByFilter.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataSearchProductByFilter = action.payload
        },
        [getSearchProductByFilter.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default productSlice.reducer