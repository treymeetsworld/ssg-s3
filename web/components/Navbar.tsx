// web/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <header className="absolute top-0 w-full pt-6 text-white">
            <div className="w-[95%] mx-auto flex justify-between items-center">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                        placeholder="Search..."
                    />
                </div>
                <h2 className="title text-xl font-bold text-white">
                    <Link href="/">STOREFRONT</Link>
                </h2>
                <nav className="flex space-x-8">
                    <Link href="/products">Products</Link>
                    <Link href="/artists">Artists</Link>
                    <Link href="/cart">Cart</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;