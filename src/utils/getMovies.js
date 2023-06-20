import Axios from 'axios'

const KEY = import.meta.env.VITE_API_KEY || "becc835ca9afb82404817c82b7516150"
const URL = import.meta.env.VITE_BASE_URL || 'https://api.themoviedb.org/3'
let currentPage = 1
const urlFavorites = `${URL}/movie/popular?language=es-CO&page=${currentPage}&api_key=${KEY}`
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${KEY}`
};



export const getMovies = async () => {
  const response = await Axios.get(urlFavorites, {headers})
  return response.data
}


export const getMovieById = async (id)=>{
  const response = await Axios.get(`${URL}/movie/${id}?language=es-CO&api_key=${KEY}`, {headers})
  return response.data
}