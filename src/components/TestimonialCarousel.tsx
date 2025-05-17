
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Regular Customer",
    quote: "Golden Crust's pastries are simply divine! Their croissants transport me straight to Paris every morning. I can't start my day without them.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Local Food Blogger",
    quote: "As someone who reviews bakeries professionally, I can confidently say Golden Crust stands out for their commitment to quality ingredients and authentic techniques.",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Wedding Planner",
    quote: "I exclusively recommend Golden Crust to my clients for wedding cakes. Their designs are not only beautiful but also incredibly delicious. They've never disappointed!",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    };

    startAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto py-16 px-4">
      <div className="absolute top-0 left-0 right-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown inline-block relative">
          What Our Customers Say
          <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-bakery-gold" />
        </h2>
      </div>
      
      <div className="overflow-hidden py-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-bakery-gold">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <svg className="w-8 h-8 text-bakery-gold mb-4 opacity-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13456 9H5.25C4.83579 9 4.5 8.66421 4.5 8.25V6.5C4.5 4.01472 6.51472 2 9 2H9.75C10.1642 2 10.5 2.33579 10.5 2.75V6.25C10.5 7.21649 9.71649 8 8.75 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19.1346 9H15.25C14.8358 9 14.5 8.66421 14.5 8.25V6.5C14.5 4.01472 16.5147 2 19 2H19.75C20.1642 2 20.5 2.33579 20.5 2.75V6.25C20.5 7.21649 19.7165 8 18.75 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-lg md:text-xl text-bakery-charcoal/90 mb-6 italic">
              {testimonials[currentIndex].quote}
            </p>
            <h3 className="text-xl font-medium text-bakery-brown">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-bakery-charcoal/70">
              {testimonials[currentIndex].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white text-bakery-brown border border-bakery-brown hover:bg-bakery-cream transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white text-bakery-brown border border-bakery-brown hover:bg-bakery-cream transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 mx-1 rounded-full transition-colors duration-200 ${
              currentIndex === index ? 'bg-bakery-gold' : 'bg-bakery-brown/30'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
