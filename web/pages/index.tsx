import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Grainy Gradient Background */}
            <div className="bg-gradient"></div>

            {/* Header */}
            <header className="absolute top-0 w-full pt-6 text-white">
                <div className="w-[95%] mx-auto flex justify-between items-center">
                    <div className="relative ">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Search..."
                        />
                    </div>
                    <h2 className="title text-xl font-bold text-white">
                        <a>STOREFRONT</a>
                    </h2>
                    <nav className="flex space-x-8">
                        <Link href="/ProductPage">Products</Link>
                        <Link href="/ArtistsPage">Artists</Link>
                        <Link href="/Cart">Cart</Link>
                    </nav>
                </div>
            </header>

            <div className="nav-bottom absolute top-20 w-[95%] h-[1px] bg-red-100 mx-auto"></div>
            {/* Main Content */}
            <main className="text-center px-4">
            </main>
        </div>
    );
}