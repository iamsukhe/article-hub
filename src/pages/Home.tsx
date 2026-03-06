import React, { useState, useEffect, useMemo } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleCardSkeleton } from '../components/ArticleCardSkeleton'; // <-- Import the skeleton
import { fetchArticles } from '../services/api';
import type { Article } from '../types/Article';

export const Home: React.FC = () => {
    // ... (Keep all your existing state and useEffect logic exactly the same) ...
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const data = await fetchArticles();
                setArticles(data);
            } catch (error) {
                console.error("Failed to fetch articles", error);
            } finally {
                setLoading(false);
            }
        };
        loadArticles();
    }, []);

    const categories = useMemo(() => {
        const cats = new Set(articles.map(a => a.category));
        return ['All', ...Array.from(cats)];
    }, [articles]);

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const lowerQuery = searchQuery.toLowerCase();
            const matchesSearch =
                article.title.toLowerCase().includes(lowerQuery) ||
                article.category.toLowerCase().includes(lowerQuery) ||
                article.source.toLowerCase().includes(lowerQuery);

            const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [articles, searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Dark Hero / Search & Filter Section */}
            {/* ... (Keep your hero section exactly the same) ... */}
            <div className="bg-[#141b2d] py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-1">Most read</h1>
                    <p className="text-gray-300 text-sm mb-8">Our reader's highlights</p>

                    {/* Search Input */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by title, category, or source..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    </div>

                    {/* Category Pill Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === cat
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area (Article Cards) */}
            <div className="max-w-6xl mx-auto px-4 mt-8">
                {/* --- UPDATED STATE RENDERING HERE --- */}
                {loading ? (
                    // Render 6 Shimmer UI skeletons in the exact same grid layout
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <ArticleCardSkeleton key={index} />
                        ))}
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                        <h3 className="text-xl text-gray-600 font-medium">No articles found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-4 text-blue-600 hover:underline font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};