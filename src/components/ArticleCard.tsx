import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types/Article';

interface ArticleCardProps {
    article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime} min read</span>
                </div>

                <Link to={`/articles/${article.id}`} className="hover:text-blue-600">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {article.title}
                    </h2>
                </Link>

                <p className="text-sm text-gray-500 mb-4 flex-grow">
                    Source: {article.source}
                </p>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                    <Link
                        to={`/articles/${article.id}`}
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Read More
                    </Link>
                    <a
                        href={article.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                        External Link ↗
                    </a>
                </div>
            </div>
        </div>
    );
};