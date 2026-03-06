import React from 'react';

interface SkeletonProps {
    isDarkMode: boolean;
}

export const ArticleCardSkeleton: React.FC<SkeletonProps> = ({ isDarkMode }) => {
    return (
        <div className={`flex flex-col rounded-xl shadow-md overflow-hidden animate-pulse border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <div className={`w-full h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <div className={`h-6 w-20 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    <div className={`h-4 w-16 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>

                <div className={`h-6 w-full rounded mb-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className={`h-6 w-3/4 rounded mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                <div className={`h-4 w-1/3 rounded mb-4 flex-grow ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>

                <div className={`mt-auto flex justify-between items-center pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    <div className={`h-4 w-20 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    <div className={`h-4 w-24 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
            </div>
        </div>
    );
};