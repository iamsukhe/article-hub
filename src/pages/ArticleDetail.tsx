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
            // Added pt-32 to clear the floating header, changed spinner color to Green
            <div className="flex justify-center items-center h-screen pt-32">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#668077]"></div>
            </div>
        );
    }

    if (!article) {
        return (
            // Added pt-32 to clear the floating header
            <div className="text-center py-20 pt-32">
                <h2 className="text-2xl font-bold text-[#668077]">Article not found</h2>
                <Link to="/" className="text-[#FFC44D] font-bold hover:underline hover:text-[#e0ac43] mt-4 inline-block transition-colors">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        // Added pt-32 to the main wrapper
        <div className="max-w-3xl mx-auto px-4 pt-32 pb-16">

            <Link to="/" className="group text-[#668077] font-semibold hover:text-[#FFC44D] mb-8 inline-flex items-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Articles
            </Link>

            <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 md:h-[400px] object-cover rounded-2xl mb-8 shadow-sm"
            />

            <div className="flex gap-4 items-center mb-6">
                {/* Updated category pill to use the yellow theme color */}
                <span className="text-xs font-bold uppercase text-[#668077] bg-[#FFC44D] px-4 py-1.5 rounded-full shadow-sm">
                    {article.category}
                </span>
                <span className="text-sm font-medium text-gray-500">{article.readTime} min read</span>
                <span className="text-sm font-medium text-gray-500 border-l pl-4 border-gray-300">{article.source}</span>
            </div>

            {/* Updated title color to the primary green text color */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#668077] mb-8 leading-tight tracking-tight">
                {article.title}
            </h1>

            <div className="prose prose-lg prose-p:text-gray-600 prose-headings:text-[#668077] prose-a:text-[#FFC44D] leading-relaxed mb-12 max-w-none">
                {article.content}
            </div>

            {/* Updated CTA button to use the new theme */}
            <a
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FFC44D] text-[#668077] px-8 py-3.5 rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
                Read Full Original Article
            </a>
        </div>
    );
};