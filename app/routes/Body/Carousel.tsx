
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const slides = [
        { id: 1, src:'/carouselimg.jpg' , alt: 'Clothing Item 1', link: '/item/1' },
        { id: 3, src: '/carouselimg.jpg', alt: 'Clothing Item 3', link: '/item/3' },
        { id: 4, src: '/carouselimg.jpg', alt: 'Clothing Item 4', link: '/item/4' },
        { id: 5, src: '/carouselimg.jpg', alt: 'Clothing Item 5', link: '/item/5' },
        { id: 2, src: '/carouselimg.jpg', alt: 'Clothing Item 2', link: '/item/2' },
    ];

    const changeSlide = (direction: number) => {
        setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
    };

    const handleSlideClick = (link: string) => {
        navigate(link); 
    };

    return (
        <div className="relative max-w-full overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full cursor-pointer" onClick={() => handleSlideClick(slide.link)}>
                        <img src={slide.src} alt={slide.alt} className="object-center w-full h-[18rem]" />
                    </div>
                ))}
            </div>
            <button onClick={() => changeSlide(-1)} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
                &#10094;
            </button>
                    <button onClick={() => changeSlide(1)} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full">
                        &#10095;
                    </button>
                </div>
            );
        };
        
        export default Carousel;