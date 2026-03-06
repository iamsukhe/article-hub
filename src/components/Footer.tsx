import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="text-2xl font-black tracking-tight text-white mb-4 inline-block">
                        ArticleHub.
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        Your daily source for the best articles in technology, design, finance, and lifestyle. Curated carefully to save you time.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                        <li><Link to="/topics" className="hover:text-blue-400 transition-colors">Popular Topics</Link></li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Connect</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} ArticleHub. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};