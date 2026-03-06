import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { fetchArticles } from '../../services/api';
import type { Article } from '../../types/Article';

vi.mock('../../services/api', () => ({
    fetchArticles: vi.fn(),
}));

const mockArticles: Article[] = [
    { id: '1', title: 'React Performance Tips', category: 'Engineering', readTime: 4, source: 'Blog', imageUrl: '', content: '', externalUrl: '' },
    { id: '2', title: 'Healthy Habits', category: 'Lifestyle', readTime: 3, source: 'Blog', imageUrl: '', content: '', externalUrl: '' },
    { id: '3', title: 'Advanced TypeScript', category: 'Engineering', readTime: 6, source: 'Blog', imageUrl: '', content: '', externalUrl: '' }
];

describe('Home Component Behaviors', () => {

    beforeEach(() => {
        vi.clearAllMocks();

        (fetchArticles as any).mockResolvedValue(mockArticles);
    });

    it('renders all articles initially after loading', async () => {
        render(<BrowserRouter><Home isDarkMode={false} /></BrowserRouter>);

        expect(await screen.findByText('React Performance Tips')).toBeInTheDocument();
        expect(screen.getByText('Healthy Habits')).toBeInTheDocument();
        expect(screen.getByText('Advanced TypeScript')).toBeInTheDocument();
    });

    it('filters articles based on search query', async () => {
        const user = userEvent.setup();
        render(<BrowserRouter><Home isDarkMode={false} /></BrowserRouter>);

        await screen.findByText('React Performance Tips');

        const searchInput = screen.getByPlaceholderText('Search articles...');
        await user.type(searchInput, 'TypeScript');

        expect(screen.getByText('Advanced TypeScript')).toBeInTheDocument();
        expect(screen.queryByText('React Performance Tips')).not.toBeInTheDocument();
    });

    it('filters articles based on category selection', async () => {
        const user = userEvent.setup();
        render(<BrowserRouter><Home isDarkMode={false} /></BrowserRouter>);

        await screen.findByText('React Performance Tips');

        const engineeringButton = screen.getByRole('button', { name: 'Engineering' });
        await user.click(engineeringButton);

        expect(screen.getByText('React Performance Tips')).toBeInTheDocument();
        expect(screen.getByText('Advanced TypeScript')).toBeInTheDocument();
        expect(screen.queryByText('Healthy Habits')).not.toBeInTheDocument();
    });

    it('displays "No articles found" when search matches nothing', async () => {
        const user = userEvent.setup();
        render(<BrowserRouter><Home isDarkMode={false} /></BrowserRouter>);

        await screen.findByText('React Performance Tips');

        const searchInput = screen.getByPlaceholderText('Search articles...');
        await user.type(searchInput, 'GibberishSearchQuery');

        expect(screen.getByText('No articles found')).toBeInTheDocument();
    });
});