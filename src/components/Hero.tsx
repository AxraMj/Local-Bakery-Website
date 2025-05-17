
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center hero-pattern">
      {/* Overlay with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bakery-cream/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 text-bakery-gold font-medium tracking-wider uppercase text-sm md:text-base"
          >
            Artisanal Bakery Since 1995
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-bakery-brown"
          >
            Freshly Baked <br />
            <span className="text-bakery-gold">Heavenly Treats</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-bakery-charcoal/80 mb-8 max-w-2xl"
          >
            Experience the warmth and aroma of our freshly baked goods, crafted with love using traditional recipes and premium ingredients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services"
              className="bg-bakery-brown hover:bg-bakery-brown/90 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-bakery-cream text-bakery-brown border border-bakery-brown font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Order Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-10 right-10 md:right-20 lg:right-40 w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-full shadow-xl hidden md:block"
      />
    </div>
  );
};

export default Hero;
