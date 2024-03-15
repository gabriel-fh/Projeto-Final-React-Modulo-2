import axios from "axios";
import { tmdbData } from "../types";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "0d4f40d64c681dc4928cd496c1941ccc";

export const getTrending = async (
  type: string,
  page?: number,
  endPoint?: string
): Promise<tmdbData[]> => {
  const url = `${BASE_URL}${endPoint? `${endPoint}/${type}` : `trending/${type}/week`}`;
  const params = {
    api_key: API_KEY,
    ...(endPoint === "discover" && {
      include_adult: false, 
      include_video: false,
      sort_by: 'popularity.desc', 
      with_genres: [16, 10751], 
      certification_country: "US", 
      certification: 'PG'
    }),
    page: page,
  };
  
  const response = await axios.get(url, { params });
  console.log(response.data.results);
  return response.data.results as tmdbData[];
};