import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="dark:bg-gray-950 text-white py-12 border-t dark:border-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="text-2xl font-black tracking-tight text-white mb-4 inline-block hover:text-[#FFC44D] transition-colors">
                        ArticleHub.
                    </Link>
                    <p className="text-white/80 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                        Your daily source for the best articles in technology, design, finance, and lifestyle. Curated carefully to save you time.
                    </p>
                </div>
                <div>
                    <h3 className="text-[#FFC44D] font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm font-medium">
                        <li><Link to="/" className="hover:text-[#FFC44D] dark:text-gray-300 dark:hover:text-[#FFC44D] transition-colors">Home</Link></li>
                        <li><Link to="/topics" className="hover:text-[#FFC44D] dark:text-gray-300 dark:hover:text-[#FFC44D] transition-colors">Popular Topics</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#FFC44D] font-bold mb-4">Connect</h3>
                    <ul className="space-y-2 text-sm font-medium">
                        <li><a href="#" className="hover:text-[#FFC44D] dark:text-gray-300 dark:hover:text-[#FFC44D] transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-[#FFC44D] dark:text-gray-300 dark:hover:text-[#FFC44D] transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-[#FFC44D] dark:text-gray-300 dark:hover:text-[#FFC44D] transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-white/20 dark:border-gray-800 text-sm text-white/70 dark:text-gray-500 flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} ArticleHub. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0 font-medium">
                    <a href="#" className="hover:text-[#FFC44D] dark:hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#FFC44D] dark:hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};