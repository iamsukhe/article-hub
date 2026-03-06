import React from 'react';

export const ArticleCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

            <div className="p-5 flex flex-col flex-grow">
                {/* Category & Read Time Skeletons */}
                <div className="flex justify-between items-center mb-4">
                    <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Title Skeleton (2 lines) */}
                <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse w-full"></div>
                <div className="h-6 bg-gray-200 rounded mb-6 animate-pulse w-2/3"></div>

                {/* Source Skeleton */}
                <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse w-1/3 mt-auto"></div>

                {/* Footer Skeleton */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};