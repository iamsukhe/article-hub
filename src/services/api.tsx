import type { Article } from "../types/Article";

const API_BASE_URL = 'https://article-hub-backend-xi.vercel.app/api';

export const fetchArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) throw new Error('Failed to fetch articles');
    return response.json();
};

export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);
    if (response.status === 404) return undefined;
    if (!response.ok) throw new Error('Failed to fetch article');
    return response.json();
};