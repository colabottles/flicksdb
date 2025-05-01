import React, { ReactNode } from 'react';
import { Film } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center md:justify-start">
            <Film size={28} className="text-blue-500 mr-2" />
          </div>
        </div>
      </header>

      <h1 className="text-2xl font-bold">FlicksDB</h1>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>Movie data provided by <a href="https://www.themoviedb.org" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">TMDb</a></p>
          <p className="mt-2">© {new Date().getFullYear()} MovieFinder</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;