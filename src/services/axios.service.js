import axios from "axios";

import baseURL from "../constatnts/urls";

export const axiosService = axios.create({baseURL});