//crear slice de reduxtoolkit
import { createSlice } from "@reduxjs/toolkit";

//crear slice de reduxtoolkit
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
        selectedMovie: null,
    },
    reducers: {
        setMoviesStore: (state, action) => {
            state.movies = action.payload;
        }
    }
});

//exportar acciones
export const { setMoviesStore } = movieSlice.actions;

//exportar reducer
export default movieSlice.reducer;