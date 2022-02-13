import {axiosService} from "./axios.service";
import {endpoint} from "../constatnts/urls";

const api_key = 'd4641bbf2c4c779378d190fff6f19838';

export const genresService = {
    getAll: () => axiosService.get(endpoint.genres, {params: {api_key}}),
};

