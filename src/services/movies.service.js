import {axiosService} from "./axios.service";
import {endpoint} from "../constatnts/urls";

const api_key = 'd4641bbf2c4c779378d190fff6f19838';

export const moviesService = {
    getByPage: (page, withGenres) => axiosService.get(endpoint.movie, {params: {api_key, page, with_genres: withGenres}}),
};
