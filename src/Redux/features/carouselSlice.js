import { createSlice } from "@reduxjs/toolkit";


const carouselSlice = createSlice({
    name: "carouselSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataAllCarousel: null,
    },

})