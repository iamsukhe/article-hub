import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {
    isDarkMode: boolean;
}

export const NotFound: React.FC<NotFoundProps> = ({ isDarkMode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full pt-20 text-center">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>

            <Link
                to="/"
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
            >
                Go Back Home
            </Link>
        </div>
    );
};