import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../services/api';
import type { Article } from '../types/Article';

export const Topics: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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

    // Group articles by category to get counts and a cover image dynamically
    const topics = useMemo(() => {
        const categoryMap = new Map<string, { count: number; imageUrl: string }>();

        articles.forEach(article => {
            if (categoryMap.has(article.category)) {
                categoryMap.get(article.category)!.count += 1;
            } else {
                categoryMap.set(article.category, {
                    count: 1,
                    imageUrl: article.imageUrl // Use the first article's image as the category cover
                });
            }
        });

        // Convert the map back into an array we can map over in JSX
        return Array.from(categoryMap.entries()).map(([name, data]) => ({
            name,
            count: data.count,
            imageUrl: data.imageUrl
        }));
    }, [articles]);

    return (
        <div className="max-w-6xl mx-auto pt-32 px-4 py-12 min-h-[60vh]">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Topics</h1>
            <p className="text-gray-600 text-lg mb-10">
                This is where we will display a grid of all available categories and featured articles for each.
            </p>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map(topic => (
                        <Link
                            key={topic.name}
                            to="/"
                            className="group relative h-48 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
                        >
                            {/* Background Image */}
                            <img
                                src={topic.imageUrl}
                                alt={topic.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/50 transition-colors duration-300"></div>

                            {/* Text Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                                <h2 className="text-3xl font-bold mb-2 tracking-wide">{topic.name}</h2>
                                <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                                    {topic.count} {topic.count === 1 ? 'Article' : 'Articles'}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};