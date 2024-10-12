import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Grainy Gradient Background */}
            <div className="bg-gradient"></div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="text-center px-4">
                <div className="text-white text-4xl font-bold mt-20">
                    Welcome to the Storefront!
                </div>
                <div className="text-white text-lg mt-4">
                    <p>Explore our products and artists</p>
                    <p>by clicking on the links in the navbar</p>
                </div>
            </main>
        </div>
    );
}