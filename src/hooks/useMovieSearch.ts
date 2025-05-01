import { useState, useEffect } from 'react';
import { Movie, MovieSearchResponse } from '../types/movie';
import { searchMovies, getPopularMovies } from '../services/movieApi';

interface UseMovieSearchResult {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  totalResults: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
}

export const useMovieSearch = (): UseMovieSearchResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let response: MovieSearchResponse;
        
        if (searchQuery.trim()) {
          response = await searchMovies(searchQuery, currentPage);
        } else {
          response = await getPopularMovies(currentPage);
        }
        
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setTotalResults(response.total_results);
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, [searchQuery, currentPage]);

  const setPage = (page: number) => {
    // Ensure we're within valid page bounds
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    totalResults,
    searchQuery,
    setSearchQuery,
    setPage,
  };
};