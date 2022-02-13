import {Link} from "react-router-dom";

import './card_style.css';

const MovieCard = ({movie}) => {
    return (
        <div className={'card'}>
            <img className={'card-img'} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                 alt={movie.title}
                 width={'230px'}/>

            <p className={'card-title'}>{movie.title}</p>

            <Link to={'details'} state={movie}><button className={'card-btn'}>Show details</button></Link>
        </div>

    );
};

export default MovieCard;
