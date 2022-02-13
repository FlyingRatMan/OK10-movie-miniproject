import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import genresReducer from "./genresSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        theme: themeReducer,
    }
});

export default store;