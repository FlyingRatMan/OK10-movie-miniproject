import './card_style.css';

const MovieDetails = ({movie}) => {
    const {title, overview, backdrop_path, release_date, vote_average} = movie;

    return (
        <div className={'wrap details'}>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} width={'900px'}/>

            <div className={'details-info'}>
                <div className={'details-title'}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>
                <div className={'details-rate'}>
                    <p><span className={'highlight'}>Release date: </span>{release_date}</p>
                    <p><span className={'highlight'}>Rating: </span>{vote_average}/10</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
