import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 backdrop-blur-md shadow-sm rounded-2xl transition-all duration-300 mb-12 border ${isDarkMode ? 'bg-gray-800/80 border-gray-700/50' : 'bg-white/70 border-white/50'}`}>
            <div className="px-6 h-16 flex items-center justify-between w-full">

                {/* Logo/Brand */}
                <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-[#FFC44D] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                        <span className={`font-bold text-xl leading-none ${isDarkMode ? 'text-gray-900' : 'text-[#668077]'}`}>A</span>
                    </div>
                    <span className={`text-xl font-black tracking-tight mr-4 ${isDarkMode ? 'text-white' : 'text-[#668077]'}`}>
                        ArticleHub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/" className={`text-sm font-semibold hover:text-[#FFC44D] transition-colors ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>Home</Link>
                        <Link to="/topics" className={`text-sm font-semibold hover:text-[#FFC44D] transition-colors ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>Topics</Link>
                        <Link to="/about" className={`text-sm font-semibold hover:text-[#FFC44D] transition-colors ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>About Us</Link>
                    </nav>

                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-colors focus:outline-none ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:text-[#FFC44D]' : 'bg-gray-100 text-gray-500 hover:text-[#FFC44D]'}`}
                    >
                        {!isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className={`md:hidden hover:text-[#FFC44D] transition-colors focus:outline-none ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 pb-6 rounded-b-2xl ${isDarkMode ? 'border-gray-700 bg-gray-800/90' : 'border-gray-200 bg-white/90'}`}>
                    <Link to="/" onClick={closeMenu} className={`block text-base font-semibold hover:text-[#FFC44D] ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>Home</Link>
                    <Link to="/topics" onClick={closeMenu} className={`block text-base font-semibold hover:text-[#FFC44D] ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>Topics</Link>
                    <Link to="/about" onClick={closeMenu} className={`block text-base font-semibold hover:text-[#FFC44D] ${isDarkMode ? 'text-gray-300' : 'text-[#668077]'}`}>About Us</Link>
                </div>
            )}
        </header>
    );
};