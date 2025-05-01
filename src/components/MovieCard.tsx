import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  // Format release date to show only the year
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  
  // Truncate overview if it's too long
  const truncatedOverview = movie.overview.length > 150 
    ? `${movie.overview.substring(0, 150)}...` 
    : movie.overview;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="aspect-[2/3] relative">
        <img 
          src={imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 font-semibold px-2 py-1 rounded-md flex items-center text-sm">
          <Star size={16} className="mr-1" />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{movie.title}</h3>
        
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{releaseYear}</span>
        </div>
        
        <p className="text-gray-300 text-sm flex-grow">
          {truncatedOverview || 'No overview available.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;