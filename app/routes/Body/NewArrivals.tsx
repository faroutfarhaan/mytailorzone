// NewArrivals.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const newArrivals = [
    { id: 1, src: 'path/to/newdress1.jpg', alt: 'New Dress 1', link: '/newdress/1' },
    { id: 2, src: 'path/to/newdress2.jpg', alt: 'New Dress 2', link: '/newdress/2' },
    { id: 3, src: 'path/to/newdress3.jpg', alt: 'New Dress 3', link: '/newdress/3' },
    { id: 4, src: 'path/to/newdress4.jpg', alt: 'New Dress 4', link: '/newdress/4' },
    { id: 5, src: 'path/to/newdress5.jpg', alt: 'New Dress 5', link: '/newdress/5' },
    { id: 6, src: 'path/to/newdress6.jpg', alt: 'New Dress 6', link: '/newdress/6' },
    { id: 7, src: 'path/to/newdress7.jpg', alt: 'New Dress 7', link: '/newdress/7' },
    { id: 8, src: 'path/to/newdress8.jpg', alt: 'New Dress 8', link: '/newdress/8' },
    { id: 9, src: 'path/to/newdress9.jpg', alt: 'New Dress 9', link: '/newdress/9' },
    { id: 10, src: 'path/to/newdress10.jpg', alt: 'New Dress 10', link: '/newdress/10' },
    { id: 11, src: 'path/to/newdress11.jpg', alt: 'New Dress 11', link: '/newdress/11' },
    { id: 12, src: 'path/to/newdress12.jpg', alt: 'New Dress 12', link: '/newdress/12' },
];

const NewArrivals = () => {
    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate('/newarrivals'); 
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-center mb-4">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {newArrivals.map((item) => (
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

export default NewArrivals;