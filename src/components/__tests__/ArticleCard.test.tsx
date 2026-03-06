import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import type { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard';

const mockArticle: Article = {
    id: '1',
    title: 'Understanding React Server Components',
    category: 'Tech',
    readTime: 5,
    source: 'TechCrunch',
    externalUrl: 'https://example.com',
    imageUrl: 'https://example.com/image.png',
    content: 'Some content here'
};

describe('ArticleCard Component', () => {
    it('renders article data correctly', () => {
        render(
            <BrowserRouter>
                <ArticleCard article={mockArticle} isDarkMode={false} />
            </BrowserRouter>
        );

        // Verify Title
        expect(screen.getByText('Understanding React Server Components')).toBeInTheDocument();

        // Verify Category
        expect(screen.getByText('Tech')).toBeInTheDocument();

        // Verify Source
        expect(screen.getByText(/Source: TechCrunch/i)).toBeInTheDocument();

        // Verify Read Time
        expect(screen.getByText('5 min read')).toBeInTheDocument();

        // Verify External Link href
        const externalLink = screen.getByText('External Link ↗');
        expect(externalLink).toHaveAttribute('href', 'https://example.com');
    });
});