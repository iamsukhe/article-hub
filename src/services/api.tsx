import type { Article } from "../types/Article";

export const mockArticles: Article[] = [
    {
        id: '1',
        title: 'The Future of Artificial Intelligence',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80',
        category: 'Technology',
        source: 'Tech Daily',
        readTime: 5,
        externalUrl: 'https://example.com/ai',
        content: 'Artificial Intelligence is rapidly evolving, bringing new paradigms to how we work and live. From generative models to autonomous systems, the landscape is shifting daily...'
    },
    {
        id: '2',
        title: '10 Minimalist Design Principles',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        category: 'Design',
        source: 'Creative Hub',
        readTime: 3,
        externalUrl: 'https://example.com/design',
        content: 'Minimalism in design is about stripping away the unnecessary. This article explores the core principles of creating breathing room in your layouts...'
    },
    {
        id: '3',
        title: 'Healthy Eating for Busy Professionals',
        imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
        category: 'Lifestyle',
        source: 'Health Plus',
        readTime: 4,
        externalUrl: 'https://example.com/health',
        content: 'Finding time to cook healthy meals can be tough. Here are quick, nutritious recipes that take under 20 minutes to prepare...'
    },
    {
        id: '4',
        title: 'Demystifying Cryptocurrency Investments',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
        category: 'Finance',
        source: 'Money Matters',
        readTime: 6,
        externalUrl: 'https://example.com/crypto',
        content: 'Cryptocurrency can seem like a daunting frontier for traditional investors. We break down the basics of blockchain technology and how to safely diversify your portfolio...'
    },
    {
        id: '5',
        title: 'Hidden Gems in Kyoto, Japan',
        imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
        category: 'Travel',
        source: 'Wanderlust Mag',
        readTime: 5,
        externalUrl: 'https://example.com/kyoto',
        content: 'Beyond the famous bamboo forests and golden pavilions, Kyoto hides quiet alleyways, secret tea houses, and serene gardens completely untouched by heavy tourism...'
    },
    {
        id: '6',
        title: 'The James Webb Telescope\'s Newest Discoveries',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
        category: 'Science',
        source: 'Cosmos Today',
        readTime: 7,
        externalUrl: 'https://example.com/jwst',
        content: 'Humanity has never seen the cosmos with such clarity. The latest batch of images from the JWST reveals ancient galaxies, star nurseries, and the atmospheric composition of exoplanets...'
    },
    {
        id: '7',
        title: 'Mastering the Pomodoro Technique',
        imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
        category: 'Productivity',
        source: 'Focus Daily',
        readTime: 3,
        externalUrl: 'https://example.com/pomodoro',
        content: 'Struggling to maintain focus? The Pomodoro Technique relies on structured bursts of work followed by short breaks. Here is how to implement it into your daily routine for maximum output...'
    },
    {
        id: '8',
        title: 'The Science of Good Sleep',
        imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
        category: 'Health',
        source: 'Wellness Journal',
        readTime: 4,
        externalUrl: 'https://example.com/sleep',
        content: 'We spend a third of our lives asleep, yet many of us do it poorly. Learn the science behind circadian rhythms and actionable steps to improve your sleep hygiene tonight...'
    },
    {
        id: '9',
        title: 'React Server Components Explained',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
        category: 'Technology',
        source: 'Frontend Weekly',
        readTime: 8,
        externalUrl: 'https://example.com/react-server-components',
        content: 'The introduction of Server Components marks a massive shift in the React ecosystem. Learn how they work, why they improve performance, and how to migrate your existing apps...'
    }
];

export const fetchArticles = async (): Promise<Article[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockArticles), 800); // 800ms simulated delay
    });
};

export const fetchArticleById = async (id: string): Promise<Article | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const article = mockArticles.find(a => a.id === id);
            resolve(article);
        }, 500);
    });
};