import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../services/movies.service";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({page, genreId} = {page: 1}, {rejectWithValue}) => {
    try {
        const movies = await moviesService.getByPage(page, genreId);
        return movies.data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
});

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        page: null,
        movies: [],
        status: null,
        errors: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = 'pending';
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.page = action.payload.page;
            state.movies = action.payload.results;
            state.status = 'fulfilled';
        },
        [fetchMovies.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }
});


export default moviesSlice.reducer;