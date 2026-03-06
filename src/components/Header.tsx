import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 bg-white/70 backdrop-blur-md border border-white/50 shadow-sm rounded-2xl transition-all duration-300 mb-12">
            <div className="px-6 h-16 flex items-center justify-between w-full">

                {/* Logo/Brand */}
                <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#FFC44D] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                        <span className="text-[#668077] font-bold text-xl leading-none">A</span>
                    </div>
                    <span className="text-xl font-black tracking-tight text-[#668077] mr-4">
                        ArticleHub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex items-center">
                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/" className="text-sm font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                            Home
                        </Link>
                        <Link to="/topics" className="text-sm font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                            Topics
                        </Link>
                        <Link to="/about" className="text-sm font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                            About Us
                        </Link>
                    </nav>

                    {/* Mobile Menu Button with Toggle Action */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-6 text-[#668077] hover:text-[#FFC44D] transition-colors focus:outline-none"
                    >
                        {isMenuOpen ? (
                            // Close (X) Icon when menu is open
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon when menu is closed
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/40 px-6 py-4 flex flex-col gap-4 pb-6">
                    <Link to="/" onClick={closeMenu} className="block text-base font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                        Home
                    </Link>
                    <Link to="/topics" onClick={closeMenu} className="block text-base font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                        Topics
                    </Link>
                    <Link to="/about" onClick={closeMenu} className="block text-base font-semibold text-[#668077] hover:text-[#FFC44D] transition-colors">
                        About Us
                    </Link>
                </div>
            )}
        </header>
    )
};