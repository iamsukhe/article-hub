import React from 'react';

export const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh] pt-32">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About ArticleHub</h1>
            <div className="prose prose-lg text-gray-700">
                <p>
                    ArticleHub is your daily source for the best curated content across technology, design, finance, and lifestyle.
                    Our mission is to cut through the noise and deliver high-quality reads directly to you.
                </p>
            </div>
        </div>
    );
};