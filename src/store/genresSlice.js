import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genresService} from "../services/genres.service";

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async (_, {rejectWithValue}) => {
    try {
        const genres = await genresService.getAll();
        return genres.data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        genres: [],
        status: null,
        errors: null,
    },
    reducers: {},
    extraReducers: {
        [fetchGenres.pending]: state => {
            state.status = 'pending';
        },
        [fetchGenres.fulfilled]: (state, action) => {
            state.genres = action.payload.genres;
            state.status = 'fulfilled';
        },
        [fetchGenres.rejected]: state => {
            state.status = 'rejected';
        }
    }
});


export default genresSlice.reducer;