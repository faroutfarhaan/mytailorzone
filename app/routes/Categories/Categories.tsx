
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
    { id: 1, name: 'Dresses', logo: 'path/to/dress-logo.png', link: '/category/dresses' },
    { id: 2, name: 'Tops', logo: 'path/to/top-logo.png', link: '/category/tops' },
    { id: 3, name: 'Bottoms', logo: 'path/to/bottom-logo.png', link: '/category/bottoms' },
    { id: 4, name: 'Outerwear', logo: 'path/to/outerwear-logo.png', link: '/category/outerwear' },
    { id: 5, name: 'Shoes', logo: 'path/to/shoes-logo.png', link: '/category/shoes' },
    { id: 6, name: 'Accessories', logo: 'path/to/accessories-logo.png', link: '/category/accessories' },
    { id: 7, name: 'Activewear', logo: 'path/to/activewear-logo.png', link: '/category/activewear' },
    { id: 8, name: 'Swimwear', logo: 'path/to/swimwear-logo.png', link: '/category/swimwear' },
];

const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (link: string) => {
        navigate(link);
    };

    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-center mb-4">Shop by Category</h2>
            <div className="flex flex-wrap justify-center space-x-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                        onClick={() => handleCategoryClick(category.link)}
                    >
                        <img src={category.logo} alt={category.name} className="w-16 h-16 mb-2" />
                        <span className="text-sm font-medium">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;