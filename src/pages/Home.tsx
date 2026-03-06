import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleCardSkeleton } from '../components/ArticleCardSkeleton';
import { fetchArticles } from '../services/api';
import type { Article } from '../types/Article';

interface HomeProps {
    isDarkMode: boolean;
}

export const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const ITEMS_PER_PAGE = 6;
    const VISIBLE_CATEGORIES = 8;

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsDropdownOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    const categories = useMemo(() => {
        const cats = new Set(articles.map(a => a.category));
        return ['All', ...Array.from(cats)];
    }, [articles]);

    const visibleCategories = categories.slice(0, VISIBLE_CATEGORIES);
    const hiddenCategories = categories.slice(VISIBLE_CATEGORIES);

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const lowerQuery = searchQuery.toLowerCase();
            const matchesSearch = article.title.toLowerCase().includes(lowerQuery) || article.category.toLowerCase().includes(lowerQuery) || article.source.toLowerCase().includes(lowerQuery);
            const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [articles, searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
    const currentArticles = filteredArticles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className={`min-h-screen pb-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="pt-32 px-4 max-w-6xl mx-auto">
                <h1 className={`text-4xl font-bold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-[#668077]'}`}>All Articles</h1>
                <p className={`text-sm mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Browse {articles.length} articles</p>

                {/* Search */}
                <div className="relative mb-8 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full pl-12 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FFC44D] shadow-sm transition-all ${isDarkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white text-[#668077] border-gray-200'}`}
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    {visibleCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm border ${selectedCategory === cat
                                    ? `bg-[#FFC44D] border-[#FFC44D] ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`
                                    : `${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'}`
                                }`}
                        >
                            {cat}
                        </button>
                    ))}

                    {hiddenCategories.length > 0 && (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1 border shadow-sm ${hiddenCategories.includes(selectedCategory)
                                    ? `bg-[#FFC44D] border-[#FFC44D] ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`
                                    : `${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'}`
                                    }`}
                            >
                                {hiddenCategories.includes(selectedCategory) ? selectedCategory : `+${hiddenCategories.length} more`}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className={`absolute top-full left-0 mt-2 w-48 border rounded-xl shadow-xl z-10 py-2 max-h-60 overflow-y-auto ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                                    {hiddenCategories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === cat
                                                ? `bg-[#FFC44D]/20 ${isDarkMode ? 'text-[#FFC44D]' : 'text-[#668077]'}`
                                                : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'}`
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, index) => <ArticleCardSkeleton key={index} isDarkMode={isDarkMode} />)}
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className={`text-center py-20 rounded-2xl border border-dashed shadow-sm ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-[#668077]'}`}>No articles found</h3>
                        <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Try adjusting your search or filter criteria.</p>
                        <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="mt-4 text-[#FFC44D] hover:underline font-bold">Clear all filters</button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentArticles.map(article => <ArticleCard key={article.id} article={article} isDarkMode={isDarkMode} />)}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-12">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg border font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-[#668077] hover:bg-gray-100'}`}
                                >
                                    Previous
                                </button>
                                <div className="flex gap-1 mx-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-lg font-bold transition-colors ${currentPage === i + 1
                                                ? `bg-[#FFC44D] shadow-md ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`
                                                : `${isDarkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg border font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-[#668077] hover:bg-gray-100'}`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};