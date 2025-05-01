import { MovieSearchResponse } from '../types/movie';

const API_KEY = 'f312ac2cb63002f508d52fd432cea28d';
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Searches for movies based on a query string
 */
export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<MovieSearchResponse> => {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Gets popular movies
 */
export const getPopularMovies = async (
  page: number = 1
): Promise<MovieSearchResponse> => {
  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};