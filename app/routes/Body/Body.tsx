import React from 'react';
import Carousel from './Carousel';
import Categories from '../Categories/Categories';
import Bestseller from './Bestsellers';
import NewArrivals from './NewArrivals';
const Body: React.FC = () => {
    return (
        <main className="min-h-screen bg-rose-50">
            
            <Carousel />
            <Categories />
            <Bestseller />
            <NewArrivals />
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-pink-900">
                            Custom Tailoring for Your Perfect Fit
                        </h1>
                        <p className="text-lg text-pink-600">
                            Experience the luxury of perfectly fitted clothing tailored just for you
                        </p>
                        <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg transition-colors">
                            Book Appointment
                        </button>
                    </div>
                    <div className="hidden md:block">
                        {/* Add your hero image here */}
                        <div className="aspect-w-16 aspect-h-9 rounded-lg bg-pink-100">
                            {/* Image placeholder */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-rose-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-pink-800">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Cards */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
                                <div className="mb-4">
                                    {/* Icon placeholder */}
                                    <div className="w-12 h-12 rounded-full bg-pink-100" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-pink-800">Service Title</h3>
                                <p className="text-pink-600">
                                    Description of the service goes here. Keep it brief and engaging.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-pink-200 text-pink-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">
                        Book your appointment today and experience the perfect fit
                    </p>
                    <button className="bg-white text-pink-500 px-8 py-3 rounded-lg hover:bg-pink-50 transition-colors">
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Body;
