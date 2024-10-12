import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
};

const products: Product[] = [
    { id: 1, name: 'Product 1',description:"", price: 29.99, quantity: 1, imageUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Product 2',description:"", price: 19.99, quantity: 2, imageUrl: 'https://via.placeholder.com/100' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    res.status(200).json(products);
}