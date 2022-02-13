import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMovies} from "../store/moviesSlice";
import MovieCard from "../components/movie/MovieCard";
import './pages.css';


const MovieListPage = () => {
    const {page, movies, status, errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, []);

    const onPrevClick = () => {
        dispatch(fetchMovies({page: page - 1}));
    };
    const onNextClick = () => {
        dispatch(fetchMovies({page: page + 1}));
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

export {MovieListPage};
