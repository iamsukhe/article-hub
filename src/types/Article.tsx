export interface Article {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    source: string;
    readTime: number; // in minutes
    externalUrl: string;
    content: string;
}