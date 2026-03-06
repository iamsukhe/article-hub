import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#141b2d] border-b border-gray-800 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo/Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl leading-none">A</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-white">
                        ArticleHub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Home
                    </Link>
                    {/* Changed from <a> to <Link> */}
                    <Link to="/topics" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Topics
                    </Link>
                    {/* Changed from <a> to <Link> */}
                    <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        About Us
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
            </div>
        </header>
    )
};