import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface ProductCardProps {
    name: string;
    price: string;
    img: string;
    category: string;
    rating: number;
    productId: string;
    inStockValue: number;
    soldStockValue: number;
    visibility: 'on' | 'off';
}
const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    img,
    category,
    rating,
    inStockValue,
    soldStockValue,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 max-w-xs mx-auto"
            style={{ backgroundColor: '#FFF5F7' }} // Soft background color
        >
            <div className="relative group">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-64 object-cover object-center"
                />
                {inStockValue === 0 && (
                    <div className="absolute top-2 right-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">
                        Out of Stock
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-gray-800 py-2 rounded-md hover:bg-gray-50">
                        Quick View
                    </button>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-800">
                        {name}
                    </h3>
                    <span className="text-lg font-semibold text-pink-500">
                        {price}
                    </span>
                </div>

                <p className="text-sm text-gray-500 mb-2">{category}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                className={`h-4 w-4 ${
                                    index < rating ? 'text-yellow-400' : 'text-gray-200'
                                }`}
                            />
                        ))}
                        <span className="ml-1 text-sm text-gray-500">({rating})</span>
                    </div>
                    <span className="text-sm text-gray-500">
                        {soldStockValue} sold
                    </span>
                </div>
            </div>
        </motion.div>
    );
};