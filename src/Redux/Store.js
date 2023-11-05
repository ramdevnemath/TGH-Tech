import { configureStore } from "@reduxjs/toolkit"
import QuoteReducer from "./Slices/QuoteSlice"

const  store = configureStore({
    reducer: {
        bookmarked: QuoteReducer
    },
    devTools: true
})

export default store