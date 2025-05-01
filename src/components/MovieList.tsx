import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';
import { Film } from 'lucide-react';

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, loading, error, searchQuery }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center mb-2">
            <Film size={24} className="text-blue-500 animate-spin" />
          </div>
          <p className="text-gray-400">Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 text-red-300 p-4 rounded-lg text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
        <Film size={48} className="text-gray-600 mb-4" />
        <h3 className="text-xl text-gray-300 font-medium mb-2">No movies found</h3>
        {searchQuery ? (
          <p className="text-gray-400">
            We couldn't find any movies matching "{searchQuery}"
          </p>
        ) : (
          <p className="text-gray-400">Try searching for a movie title</p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;