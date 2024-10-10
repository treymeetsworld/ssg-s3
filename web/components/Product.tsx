import React from 'react';
import {ProductType} from "@/util/Types";


type ProductPageProps = {
    product: ProductType;
    };

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {

    const handleAddToCart = (product: ProductType) => {
        console.log('Added to cart:', product);
        alert('Added to cart: '+ product);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                        <p className="mt-4 text-gray-600">{product.description}</p>
                        <p className="mt-6 text-2xl font-semibold text-gray-800">${product.price.toFixed(2)}</p>
                    </div>

                    <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
