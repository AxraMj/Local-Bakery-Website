
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Sourdough Bread",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Our signature sourdough with a perfect crust and complex flavor.",
    },
    {
      id: 2,
      name: "Chocolate Croissant",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Flaky, buttery layers with rich chocolate filling.",
    },
    {
      id: 3,
      name: "Berry Tart",
      image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Fresh seasonal berries atop our sweet pastry cream.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4">Our Signature Creations</h2>
            <div className="w-24 h-1 bg-bakery-gold mx-auto mb-8"></div>
            <p className="text-lg text-bakery-charcoal/80 max-w-2xl mx-auto">
              Experience our most popular baked goods, crafted with care and the finest ingredients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bakery-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-bakery-charcoal/80 mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-block text-bakery-brown font-medium hover:text-bakery-gold transition-colors duration-300 border-b-2 border-bakery-gold pb-1"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Baker at work"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute w-full h-full top-4 left-4 border-2 border-bakery-gold rounded-lg -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-bakery-gold font-medium tracking-wider uppercase text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-6">
                Baking Traditions Since 1995
              </h2>
              <p className="text-bakery-charcoal/80 mb-6">
                Golden Crust began as a small family-operated bakery with a passion for authentic baking methods. Our founder, Emma Baker, learned traditional European techniques from her grandmother and brought those time-honored recipes to our community.
              </p>
              <p className="text-bakery-charcoal/80 mb-8">
                Today, we maintain those same high standards while continuously innovating. Every loaf, pastry, and cake is crafted with attention to detail, using locally-sourced ingredients whenever possible.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-bakery-brown hover:bg-bakery-brown/90 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Visit Our Bakery
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <TestimonialCarousel />
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-bakery-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Baked Goods?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Place an order for pickup or visit our store to enjoy the full range of our freshly baked products.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-bakery-brown hover:bg-bakery-cream transition-colors duration-300 font-medium py-3 px-8 rounded-md"
              >
                Order Now
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-bakery-brown/80 border-2 border-white transition-colors duration-300 font-medium py-3 px-8 rounded-md"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
