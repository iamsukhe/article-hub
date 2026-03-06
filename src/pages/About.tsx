import React from 'react';

interface AboutProps {
    isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    return (
        <div className={`max-w-4xl mx-auto px-4 py-12 min-h-[60vh] pt-32 transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About ArticleHub</h1>
            <div className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                    ArticleHub is your daily source for the best curated content across technology, design, finance, and lifestyle.
                    Our mission is to cut through the noise and deliver high-quality reads directly to you.
                </p>
            </div>
        </div>
    );
};