import {Route, Routes} from "react-router-dom";

import './App.css';
import {MovieListPage, GenresPage, NotFoundPage, MovieDetailPage, MoviesPage, GenreListPage} from './pages';
import Layout from "./components/layout/Layout";


function App() {
    return (
        <>
            <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'movies'} element={<MoviesPage/>}>
                            <Route index element={<MovieListPage/>}/>
                            <Route path={'details'} element={<MovieDetailPage/>}/>
                        </Route>

                        <Route path={'genres'} element={<GenresPage/>}>
                            <Route path={':genreId'} element={<GenreListPage/>}/>
                            <Route path={'details'} element={<MovieDetailPage/>}/>
                        </Route>
                        <Route path={'*'} element={<NotFoundPage/>}/>
                    </Route>
            </Routes>
        </>
    );
}

export default App;
