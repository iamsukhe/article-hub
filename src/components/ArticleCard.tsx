import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types/Article';

interface ArticleCardProps {
    article: Article;
    isDarkMode: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, isDarkMode }) => {
    return (
        <div className={`flex flex-col rounded-xl shadow-md overflow-hidden transition-all duration-300 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-semibold uppercase px-2 py-1 rounded ${isDarkMode ? 'bg-[#FFC44D]/10 text-[#FFC44D]' : 'bg-blue-50 text-blue-600'}`}>
                        {article.category}
                    </span>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{article.readTime} min read</span>
                </div>

                <Link to={`/articles/${article.id}`} className={`hover:text-[#FFC44D] transition-colors`}>
                    <h2 className={`text-xl font-bold mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {article.title}
                    </h2>
                </Link>

                <p className={`text-sm mb-4 flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Source: {article.source}
                </p>

                <div className={`mt-auto flex justify-between items-center pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                    <Link to={`/articles/${article.id}`} className={`text-sm font-medium hover:text-[#FFC44D] transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Read More
                    </Link>
                    <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-[#FFC44D] hover:text-white' : 'text-blue-600 hover:text-blue-800'}`}>
                        External Link ↗
                    </a>
                </div>
            </div>
        </div>
    );
};