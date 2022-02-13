import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMovies} from "../store/moviesSlice";
import MovieCard from "../components/movie/MovieCard";
import './pages.css';

const GenreListPage = () => {
    const {state} = useLocation();
    const {page, movies, status, errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies({page: 1, genreId: state.id}))
    }, [state]);

    const onPrevClick = () => {
        dispatch(fetchMovies({page: page - 1, genreId: state.id}));
    };
    const onNextClick = () => {
        dispatch(fetchMovies({page: page + 1, genreId: state.id}));
    };

    return (
        <>
            <div className={'home-page wrap'}>{movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}</div>

            <div className={'wrap btns'}>
                <button onClick={onPrevClick} className={'home-page_btn'}>Prev</button>
                <button onClick={onNextClick} className={'home-page_btn'}>Next</button>
            </div>
        </>
    );
};

export {GenreListPage};
