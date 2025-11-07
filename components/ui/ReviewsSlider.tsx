import React, { useState } from 'react';
import type { Review } from '../../types';

interface ReviewsSliderProps {
  reviews: Review[];
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex text-secondary">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewsSlider: React.FC<ReviewsSliderProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
      <div className="text-center transition-opacity duration-500 ease-in-out">
        <StarRating rating={currentReview.rating} />
        <p className="text-gray-700 italic text-lg my-4">"{currentReview.text}"</p>
        <p className="font-bold text-primary text-md">
          {currentReview.name} - <span className="font-normal text-gray-500">{currentReview.location}</span>
        </p>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-opacity-80 transition"
        aria-label="Previous review"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-opacity-80 transition"
        aria-label="Next review"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ReviewsSlider;
