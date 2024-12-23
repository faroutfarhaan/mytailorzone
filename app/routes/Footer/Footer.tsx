import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-rose-50 text-gray-700 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-rose-900">About MyTailorZone</h3>
                    <p className="text-gray-600">Your premier destination for custom tailoring solutions. We combine tradition with technology to deliver perfect fits.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-rose-900">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-600 hover:text-rose-700 transition-colors">Home</Link></li>
                        <li><Link to="/services" className="text-gray-600 hover:text-rose-700 transition-colors">Services</Link></li>
                        <li><Link to="/measurements" className="text-gray-600 hover:text-rose-700 transition-colors">Measurements</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-rose-700 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-rose-900">Contact Info</h3>
                    <div className="text-gray-600 space-y-2">
                        <p>Email: info@mytailorzone.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Address: 123 Fashion Street, Style City, ST 12345</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-rose-900">Newsletter</h3>
                    <div className="flex flex-col space-y-2">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-4 py-2 bg-white border border-rose-200 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-rose-400 text-white rounded-md hover:bg-rose-500 transition-colors"
                        >
                            Subscribe
                        </button>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-600 text-2xl"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-600 text-2xl"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-600 text-2xl"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-600 text-2xl"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-rose-200">
                <p className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()} MyTailorZone. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;