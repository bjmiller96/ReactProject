import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        author: 'Author',
        cover_type: 'Cover Type',
        date_published: 'Date Published',
        isbn: 'ISBN',
        pages: 'Pages',
        title: 'Title'
    },
    reducers: {
        chooseAuthor: (state, action) => {state.author = action.payload},
        chooseCover: (state, action) => {state.cover_type = action.payload},
        chooseDate: (state, action) => {state.date_published = action.payload},
        chooseISBN: (state, action) => {state.isbn = action.payload},
        choosePages: (state, action) => {state.pages = action.payload},
        chooseTitle: (state, action) => {state.title = action.payload} 
    }
})

export const reducer = rootSlice.reducer
export const {chooseAuthor, chooseCover, chooseDate, chooseISBN, choosePages, chooseTitle} = rootSlice.actions