import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleById } from '../services/api';
import type { Article } from '../types/Article';

export const ArticleDetail: React.FC = () => {
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">Article not found</h2>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">← Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">← Back to Articles</Link>

            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-6 shadow-md"
            />

            <div className="flex gap-3 items-center mb-4">
                <span className="text-sm font-semibold uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime} min read</span>
                <span className="text-sm text-gray-500 border-l pl-3 border-gray-300">{article.source}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>

            <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
                {article.content}
            </div>

            <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
                Read Full Original Article
            </a>
        </div>
    );
};