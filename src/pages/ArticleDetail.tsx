import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleById } from '../services/api';
import type { Article } from '../types/Article';

interface ArticleDetailProps {
    isDarkMode: boolean;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ isDarkMode }) => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadArticle = async () => {
            if (!id) return;
            setLoading(true);
            const data = await fetchArticleById(id);
            setArticle(data || null);
            setLoading(false);
        };
        loadArticle();
    }, [id]);

    if (loading) return <div className={`flex justify-center items-center h-screen pt-32 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}><div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${isDarkMode ? 'border-[#FFC44D]' : 'border-[#668077]'}`}></div></div>;

    if (!article) return <div className={`text-center py-20 pt-32 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-[#668077]'}`}>Article not found</div>;

    return (
        <div className={`max-w-3xl mx-auto px-4 pt-32 pb-16 min-h-screen transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <Link to="/" className={`group font-semibold hover:text-[#FFC44D] mb-8 inline-flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-[#668077]'}`}>
                ← Back to Articles
            </Link>

            <img src={article.imageUrl} alt={article.title} className="w-full h-64 md:h-[400px] object-cover rounded-2xl mb-8 shadow-sm" />

            <div className="flex gap-4 items-center mb-6">
                <span className={`text-xs font-bold uppercase px-4 py-1.5 rounded-full shadow-sm bg-[#FFC44D] ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`}>{article.category}</span>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{article.readTime} min read</span>
            </div>

            <h1 className={`text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight ${isDarkMode ? 'text-white' : 'text-[#668077]'}`}>{article.title}</h1>

            <div className={`prose prose-lg leading-relaxed mb-12 max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className={`inline-block bg-[#FFC44D] px-8 py-3.5 rounded-xl font-bold shadow-sm transition-all ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`}>
                Read Full Original Article
            </a>
        </div>
    );
};