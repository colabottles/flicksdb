import React from 'react';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import { useMovieSearch } from './hooks/useMovieSearch';

function App() {
  const {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    totalResults,
    searchQuery,
    setSearchQuery,
    setPage,
  } = useMovieSearch();

  return (
    <Layout>
      <div className="space-y-8">
        {/* Search section */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} initialQuery={searchQuery} />
        </div>
        
        {/* Results info */}
        {!loading && movies.length > 0 && (
          <div className="flex justify-between items-center flex-wrap mb-4">
            <h2 className="text-xl font-semibold">
              {searchQuery 
                ? `Results for "${searchQuery}"`
                : 'Popular Movies'}
            </h2>
            <p className="text-gray-400">
              {totalResults} movies found • Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
        
        {/* Movie list */}
        <MovieList 
          movies={movies} 
          loading={loading} 
          error={error}
          searchQuery={searchQuery}
        />
        
        {/* Pagination controls */}
        {movies.length > 0 && (
          <div className="mt-10 pb-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;