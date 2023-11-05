import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('bookmarked') ? JSON.parse(localStorage.getItem('bookmarked')) : [];

const QuoteSlice = createSlice({
    name: 'bookmarked',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            localStorage.setItem("bookmarked", JSON.stringify(action.payload))
            return action.payload
        },
        dropCredentials: (state, action) => {
            const removedIndex = action.payload
            const updatedBookmarks = state.filter((_, index) => index !== removedIndex);
            localStorage.setItem("bookmarked", JSON.stringify(updatedBookmarks));
            return updatedBookmarks
        }
    }
})

export const { setCredentials, dropCredentials } = QuoteSlice.actions
export default QuoteSlice.reducer