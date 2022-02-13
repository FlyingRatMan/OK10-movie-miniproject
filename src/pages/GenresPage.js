import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import {useEffect} from "react";

import {fetchGenres} from "../store/genresSlice";
import './pages.css';

const GenresPage = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres())
    }, []);


    return (
        <div className={'wrap-genres-btns'}>
            {genres.map(genre => {
                return <Link to={`${genre.id}`} key={genre.id} state={genre}>
                    <button className={'genres-btns'}>
                        {genre.name}
                    </button>
                </Link>
            })}

            <Outlet/>
        </div>
    );
};

export {GenresPage};
