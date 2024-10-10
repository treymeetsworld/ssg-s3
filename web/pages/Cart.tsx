import {useState} from "react";
import {ProductType} from "@/util/Types";

const Cart = ({}) => {

    const [cartItems, setCartItems] = useState<ProductType[]>([])

    const handleUpdateQuantity = (id: number, quantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleCheckout = (product: ProductType) => {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add some products.");
            return;
        }
        alert(`Purchasing ${product.name} for $${product.price}`);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl font-semibold text-gray-800">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    {cartItems.map((product) => (
                        <div key={product.id} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 mb-4">
                            {/* Product Image and Info */}
                            <div className="flex items-center">
                                <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                                <div>
                                    <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}
                                    disabled={product.quantity === 1}
                                    className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <p className="text-lg">{product.quantity}</p>
                                <button
                                    onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}
                                    className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemoveItem(product.id)}
                                className="text-red-500 hover:text-red-700 font-semibold"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="text-gray-800">${calculateTotal()}</p>
                    </div>
                    <button
                        onClick={() => handleCheckout}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Cart;