import React from 'react';
import { FaShieldAlt, FaTshirt, FaTruck, FaCreditCard, FaUndo } from 'react-icons/fa';

const Trust = () => {
  return (
    <div className="bg-rose-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center space-y-2">
          <FaShieldAlt className="text-rose-900 text-4xl" />
          <p className="text-gray-700 text-center">Trustworthy Website</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaTshirt className="text-rose-900 text-4xl" />
          <p className="text-gray-700 text-center">Quality Clothes</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaTruck className="text-rose-900 text-4xl" />
          <p className="text-gray-700 text-center">Fast Delivery</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaCreditCard className="text-rose-900 text-4xl" />
          <p className="text-gray-700 text-center">Secure Payments</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaUndo className="text-rose-900 text-4xl" />
          <p className="text-gray-700 text-center">Easy Returns</p>
        </div>
      </div>
    </div>
  );
};

export default Trust;