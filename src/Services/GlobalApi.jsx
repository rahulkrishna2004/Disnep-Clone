import React from "react";
import axios from "axios";

const movieBaseUrl = "'https://api.themoviedb.org/3";
const apikey = 'f309df6f12f77be415b71e6f479f7017';

const getTrendingVedios = axios.get(this.movieBaseUrl+"/search/movie?"+apikey)

export default{
    getTrendingVedios
}