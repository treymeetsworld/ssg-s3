import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center relative">
            {/* Header */}
            <header className="absolute top-0 w-full flex justify-between items-center p-6 text-white">
                <h1 className="text-lg font-bold">
                    <a>BLK-BLT</a>
                </h1>
                <nav className="flex space-x-8">

                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Gallery</a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="text-center px-4">
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">S3 STATIC SITE GENERATION</h2>
                <div className="absolute right-7 top-20 bottom-0 w-9 bg-gray-500"></div>
            </main>

            {/* Diagonal Geometric Shape Covering 1/4 of the Top Left */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-1/4 h-1/3 bg-gray-700 transform -rotate-190 opacity-50"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 0 100%)"
                    }}
                ></div>
            </div>
        </div>
    );
}
