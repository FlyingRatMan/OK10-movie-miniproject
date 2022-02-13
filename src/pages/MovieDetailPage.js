import {useLocation} from "react-router-dom";

import MovieDetails from "../components/movie/MovieDetails";

const MovieDetailPage = () => {
    const {state} = useLocation();

    return (
        <>
            <MovieDetails movie={state}/>
        </>
    );
};

export {MovieDetailPage};
