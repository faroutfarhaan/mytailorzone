import React from 'react';
import "app/app.css";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full flex flex-row justify-between items-center px-4 py-2 bg-rose-50 text-gray-700 shadow-md">
            <div className="flex items-center space-x-2">
                <img 
                    src="/logo.png" 
                    alt="MyTailorZone Logo" 
                    className="h-10 w-10 object-contain"
                />
                <h1 className="text-xl font-bold hidden sm:block">MyTailorZone</h1>
            </div>
            <nav className="flex items-center space-x-6">
                <button className="p-2 hover:bg-pink-100 rounded-full transition-colors">
                    <span className="sr-only">Search</span>
                    🔍
                </button>
                <a href="/wishlist" className="flex items-center hover:text-rose-400 transition-colors">
                    <span className="hidden sm:block">Wishlist</span>
                </a>
                <a href="/cart" className="flex items-center hover:text-rose-400 transition-colors">
                    <span className="hidden sm:block">Cart</span>
                </a>
                <a href="/account" className="flex items-center hover:text-rose-400 transition-colors">
                    <span className="hidden sm:block">Account</span>
                </a>
            </nav>
        </header>
    );
};

export default Header;