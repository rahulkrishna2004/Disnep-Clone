import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "f309df6f12f77be415b71e6f479f7017";

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day`, {
    params: {
      api_key: apiKey
    }
  });
};

export default {
  getTrendingVideos
};
