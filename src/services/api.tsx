import type { Article } from "../types/Article";

// Production Environment
const API_BASE_URL = 'https://article-hub-backend-xi.vercel.app/api';

// Local Development Environment (Uncomment the line below to use your local server)
// const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Fetches all articles from the API.
 * @returns A promise that resolves to an array of Articles.
 */
export const fetchArticles = async (): Promise<Article[]> => {
    const response = await fetch(`${API_BASE_URL}/articles`);
    if (!response.ok) throw new Error('Failed to fetch articles');
    return response.json();
};

/**
 * Fetches a single article by its unique ID.
 */
export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
    const response = await fetch(`${API_BASE_URL}/articles/${id}`);

    // Handle 404 specifically to return undefined instead of throwing
    if (response.status === 404) return undefined;

    if (!response.ok) throw new Error('Failed to fetch article');
    return response.json();
};