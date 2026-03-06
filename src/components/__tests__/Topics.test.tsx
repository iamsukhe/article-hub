import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import * as api from '../../services/api';
import type { Article } from '../../types/Article';
import { Topics } from '../../pages/Topics';

const mockArticles: Article[] = [
    { id: '1', title: 'React Basics', category: 'Frontend', source: 'Blog A', readTime: 3, externalUrl: '', imageUrl: 'frontend-1.jpg', content: '' },
    { id: '2', title: 'Advanced React', category: 'Frontend', source: 'Blog A', readTime: 4, externalUrl: '', imageUrl: 'frontend-2.jpg', content: '' },
    { id: '3', title: 'Vue Setup', category: 'Frontend', source: 'Blog C', readTime: 2, externalUrl: '', imageUrl: 'frontend-3.jpg', content: '' },
    { id: '4', title: 'Node Express', category: 'Backend', source: 'Blog B', readTime: 5, externalUrl: '', imageUrl: 'backend-1.jpg', content: '' },
];

describe('Topics Component', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('renders loading state initially', () => {
        vi.spyOn(api, 'fetchArticles').mockImplementation(() => new Promise(() => { }));

        render(
            <BrowserRouter>
                <Topics isDarkMode={false} />
            </BrowserRouter>
        );

        expect(screen.getByText('Explore Topics')).toBeInTheDocument();

        const spinnerContainer = document.querySelector('.animate-spin');
        expect(spinnerContainer).toBeInTheDocument();
    });

    it('groups articles by category and displays correct counts', async () => {
        vi.spyOn(api, 'fetchArticles').mockResolvedValue(mockArticles);

        render(
            <BrowserRouter>
                <Topics isDarkMode={false} />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Frontend')).toBeInTheDocument();
        });

        expect(screen.getByText('Backend')).toBeInTheDocument();

        expect(screen.getByText('3 Articles')).toBeInTheDocument();
        expect(screen.getByText('1 Articles')).toBeInTheDocument();

        const frontendImage = screen.getByAltText('Frontend') as HTMLImageElement;
        expect(frontendImage.src).toContain('frontend-1.jpg');

        const backendImage = screen.getByAltText('Backend') as HTMLImageElement;
        expect(backendImage.src).toContain('backend-1.jpg');
    });

    it('renders the correct links for each topic', async () => {
        vi.spyOn(api, 'fetchArticles').mockResolvedValue(mockArticles);

        render(
            <BrowserRouter>
                <Topics isDarkMode={false} />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Frontend')).toBeInTheDocument();
        });

        const links = screen.getAllByRole('link');

        expect(links).toHaveLength(2);
        expect(links[0]).toHaveAttribute('href', '/');
        expect(links[1]).toHaveAttribute('href', '/');
    });
});