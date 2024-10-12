import {useState} from "react";
import {ProductType} from "@/util/Types";
import Navbar from "@/components/Navbar";

const Cart = ({}) => {

    const tempCartItems: ProductType[] = [
        { id: 1, name: 'Product 1',description:"", price: 29.99, quantity: 1, imageUrl: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Product 2',description:"", price: 19.99, quantity: 2, imageUrl: 'https://via.placeholder.com/100' },
    ];
    const [cartItems, setCartItems] = useState<ProductType[]>(tempCartItems);

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

    const handleCheckout = (cartItems: ProductType[]) => {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add some products.");
            return;
        }
        alert(`Purchasing ${cartItems.length} items for $${total}`);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const subtotal = parseFloat(calculateTotal());
    const tax = (subtotal * 0.1).toFixed(2);
    const total = (subtotal * 1.1).toFixed(2);

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center relative">
                {/* Grainy Gradient Background */}
                <div className="bg-gradient"></div>

                {/* Navbar */}
                <Navbar/>

                <div className="nav-bottom absolute top-20 w-[95%] h-[1px] bg-red-100 mx-auto"></div>

                {/* Main Content */}
                <main className="flex items-start justify-center w-full h-full p-10 space-x-8">
                    {/* Cart Items Section - 2/3 of the page */}
                    <div className="w-2/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
                        <p className="text-xl font-semibold">Shopping Cart Items</p>
                        {/* Cart items will go here */}
                    </div>

                    {/* Cart Total Section - 1/3 of the page */}
                    <div className="w-1/3 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 shadow-lg">
                        <p className="text-xl font-semibold">Cart Total</p>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white">Subtotal</p>
                            <p className="text-white">${subtotal}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white">Tax (10%)</p>
                            <p className="text-white">${tax}</p>
                        </div>
                        <div className="flex justify-between items-center font-bold">
                            <p className="text-white">Total</p>
                            <p className="text-white">${total}</p>
                        </div>
                        <div className="flex justify-between items-center font-bold">
                            <button
                                onClick={() => handleCheckout(cartItems)}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Checkout
                            </button>
                        </div>
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
            <Navbar/>

            <div className="nav-bottom absolute top-20 w-[95%] h-[1px] bg-red-100 mx-auto"></div>

            {/* Main Content */}
            <main className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">Shopping Cart</h1>

                {/* Grid Layout for Cart Items and Order Summary */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 backdrop-blur-md bg-white/30 border border-white/50 rounded-lg shadow-lg p-8">

                    {/* Cart Items - Takes 2/3 of the page */}
                    <div className="lg:col-span-2">
                        {cartItems.map((product) => (
                            <div key={product.id}
                                 className="flex justify-between items-center bg-white bg-opacity-10 rounded-lg shadow-md p-4 mb-4">
                                {/* Product Image and Info */}
                                <div className="flex items-center">
                                    <img src={product.imageUrl} alt={product.name}
                                         className="w-20 h-20 object-cover rounded-lg mr-4"/>
                                    <div>
                                        <h2 className="text-lg font-bold text-black">{product.name}</h2>
                                        <p className="text-white">${product.price.toFixed(2)}</p>
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

                    {/* Order Summary - Takes 1/3 of the page */}
                    <div className="bg-white bg-opacity-10 rounded-lg shadow-md p-6">
                        <p className="text-xl font-semibold">Cart Total</p>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white">Subtotal</p>
                            <p className="text-white">${subtotal}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white">Tax (10%)</p>
                            <p className="text-white">${tax}</p>
                        </div>
                        <div className="flex justify-between items-center font-bold">
                            <p className="text-white">Total</p>
                            <p className="text-white">${total}</p>
                        </div>
                        <button
                            onClick={() => handleCheckout(cartItems)}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </main>
        </div>

    );
};
export default Cart;