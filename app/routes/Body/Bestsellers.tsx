// Bestseller.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const bestsellers = [
    { id: 1, src: 'path/to/dress1.jpg', alt: 'Dress 1', link: '/dress/1' },
    { id: 2, src: 'path/to/dress2.jpg', alt: 'Dress 2', link: '/dress/2' },
    { id: 3, src: 'path/to/dress3.jpg', alt: 'Dress 3', link: '/dress/3' },
    { id: 4, src: 'path/to/dress4.jpg', alt: 'Dress 4', link: '/dress/4' },
    { id: 5, src: 'path/to/dress5.jpg', alt: 'Dress 5', link: '/dress/5' },
    { id: 6, src: 'path/to/dress6.jpg', alt: 'Dress 6', link: '/dress/6' },
    { id: 7, src: 'path/to/dress7.jpg', alt: 'Dress 7', link: '/dress/7' },
    { id: 8, src: 'path/to/dress8.jpg', alt: 'Dress 8', link: '/dress/8' },
    { id: 9, src: 'path/to/dress9.jpg', alt: 'Dress 9', link: '/dress/9' },
    { id: 10, src: 'path/to/dress10.jpg', alt: 'Dress 10', link: '/dress/10' },
    { id: 11, src: 'path/to/dress11.jpg', alt: 'Dress 11', link: '/dress/11' },
    { id: 12, src: 'path/to/dress12.jpg', alt: 'Dress 12', link: '/dress/12' },
];

const Bestseller = () => {
    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate('/bestsellers'); // Link to the bestsellers page
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-center mb-4">Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bestsellers.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        onClick={() => navigate(item.link)}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={handleShowMore}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Show More
                </button>
            </div>
        </div>
    );
};

export default Bestseller;