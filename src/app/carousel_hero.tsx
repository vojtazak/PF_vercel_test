import { useState, useEffect} from 'react';

const Carousel = () => {
    const images = [
        {
            src: 'https://via.placeholder.com/800x400?text=Image+1',
            caption: 'Welcome to PlayFight',
          },
          {
            src: 'https://via.placeholder.com/800x400?text=Image+2',
            caption: 'This is the second image caption',
          },
          {
            src: 'https://via.placeholder.com/800x400?text=Image+3',
            caption: 'This is the third image caption',
          },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    {/*const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };*/}

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto slide after a certain interval
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        // Cleanup interval when component unmounts or on re-render
        return () => clearInterval(interval);
    }, [currentIndex]); // Dependency on currentIndex

    return (
        <div className="relative w-full max-w-xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, idx) => (
                    <div key={idx} className="carousel-item w-full flex-shrink-0 relative">
                    <img
                      src={images[idx].src}
                      alt={`Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Text overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 ">
                      <p className="text-lg font-bold">{images[idx].caption}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => goToSlide(idx)} //Make dot clickable 
                        className={`cursor-pointer h-1 w-8 ${currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Carousel;
