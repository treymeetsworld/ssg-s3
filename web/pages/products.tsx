import {ProductType} from "@//util/Types";
import Product from "@/components/Product";
import React, {useEffect, useState} from "react";
import Navbar from "@/components/Navbar";

const ProductPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts().then(r => r);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center relative">
                {/* Grainy Gradient Background */}
                <div className="bg-gradient"></div>

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main className="flex items-center justify-center w-full h-full">
                    <div className="text-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                        <p className="text-2xl font-semibold text-white">Loading...</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Grainy Gradient Background */}
            <div className="bg-gradient"></div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProductPage;