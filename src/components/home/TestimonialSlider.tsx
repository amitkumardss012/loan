import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Small Business Owner',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'FinanceFlo transformed my business by providing quick capital when I needed it most. The process was seamless, and the customer service was exceptional. I highly recommend their services.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Software Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'I was skeptical about online loan platforms, but FinanceFlo exceeded all my expectations. Their EMI calculator helped me plan my finances, and the application process was straightforward and quick.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Getting a loan for my home renovation was a breeze with FinanceFlo. The competitive interest rates and flexible repayment options made it the perfect choice for my needs.',
    rating: 4
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex justify-center mb-16">
        <button 
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors duration-300 mr-4"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} className="text-primary-600" />
        </button>
        <button 
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} className="text-primary-600" />
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
        >
          <div className="mb-8">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
          
          <div className="flex mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[currentIndex].rating} size={24} className="text-gray-300 fill-gray-300" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-800 mb-8">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          <div>
            <p className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</p>
            <p className="text-gray-600">{testimonials[currentIndex].position}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;