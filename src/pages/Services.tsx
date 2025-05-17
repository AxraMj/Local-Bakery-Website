
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "bread", name: "Artisan Bread" },
    { id: "pastries", name: "Pastries" },
    { id: "cakes", name: "Cakes" },
    { id: "catering", name: "Catering" },
  ];

  const products = [
    {
      id: 1,
      name: "Sourdough Bread",
      category: "bread",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$6.50",
      description: "Our signature sourdough with a perfect crust and complex flavor developed over 24 hours.",
    },
    {
      id: 2,
      name: "Baguette",
      category: "bread",
      image: "https://images.unsplash.com/photo-1603362591194-6b92634cf0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$4.00",
      description: "Traditional French baguette with crisp crust and light, airy interior.",
    },
    {
      id: 3,
      name: "Chocolate Croissant",
      category: "pastries",
      image: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$4.50",
      description: "Flaky, buttery layers with rich dark chocolate filling.",
    },
    {
      id: 4,
      name: "Almond Danish",
      category: "pastries",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$4.75",
      description: "Delicate pastry with sweet almond filling and sliced almonds on top.",
    },
    {
      id: 5,
      name: "Red Velvet Cake",
      category: "cakes",
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$38.00",
      description: "Classic red velvet with cream cheese frosting, perfect for any celebration.",
    },
    {
      id: 6,
      name: "Carrot Cake",
      category: "cakes",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "$36.00",
      description: "Moist carrot cake with walnuts, pineapple, and cream cheese frosting.",
    },
    {
      id: 7,
      name: "Breakfast Catering",
      category: "catering",
      image: "https://images.unsplash.com/photo-1620921586333-d3b7c74509c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "From $15/person",
      description: "Selection of pastries, mini quiches, fruit platters, and coffee service.",
    },
    {
      id: 8,
      name: "Wedding Cake Service",
      category: "catering",
      image: "https://images.unsplash.com/photo-1623428454614-abaf7ee58089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "Custom Quote",
      description: "Personalized wedding cake design and dessert bar options for your special day.",
    },
  ];

  const filteredProducts = 
    activeCategory === "all" 
      ? products 
      : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-bakery-cream/30 hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Our Artisanal Offerings
            </h1>
            <p className="text-lg text-bakery-charcoal/80 mb-8">
              Discover our range of freshly baked goods, custom cakes, and catering services for all your special occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories & Gallery */}
      <section className="py-16 bg-white" id="products">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? "bg-bakery-brown text-white"
                    : "bg-bakery-cream/50 text-bakery-brown hover:bg-bakery-cream"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                id={product.category}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-bakery-brown">
                      {product.name}
                    </h3>
                    <span className="text-bakery-gold font-medium">{product.price}</span>
                  </div>
                  <p className="text-bakery-charcoal/80 mb-4">
                    {product.description}
                  </p>
                  <div className="flex">
                    <span className="inline-block bg-bakery-cream/50 text-bakery-brown px-3 py-1 text-sm rounded-full">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-16 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-bakery-gold font-medium tracking-wider uppercase text-sm mb-4 block">
                  Made Just For You
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-6">
                  Custom Orders
                </h2>
                <p className="text-bakery-charcoal/80 mb-6">
                  Need something special? We create custom cakes, dessert tables, and catering packages tailored to your specific needs and preferences.
                </p>
                <p className="text-bakery-charcoal/80 mb-8">
                  Contact us at least 48 hours in advance for regular orders, and 2 weeks for wedding cakes and large event catering.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center bg-bakery-brown hover:bg-bakery-brown/90 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
                >
                  Request a Quote
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Custom cake"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-bakery-gold mx-auto mb-6"></div>
            <p className="text-lg text-bakery-charcoal/80 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions about our bakery products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do you accommodate dietary restrictions?",
                answer:
                  "Yes, we offer a variety of options including gluten-free, vegan, and nut-free items. Please inform us of any allergies when placing your order.",
              },
              {
                question: "How far in advance should I order a custom cake?",
                answer:
                  "For regular custom cakes, we recommend placing your order at least one week in advance. For wedding cakes or large events, please contact us 2-3 months ahead of time.",
              },
              {
                question: "Do you deliver?",
                answer:
                  "Yes, we offer local delivery for orders over $50 within a 15-mile radius. Delivery fees vary based on distance. Wedding cake delivery and setup is available at additional cost.",
              },
              {
                question: "Can I get a tasting before ordering a wedding cake?",
                answer:
                  "Absolutely! We offer wedding cake consultations and tasting sessions by appointment. These include samples of our most popular cake flavors, fillings, and frostings.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-bakery-cream/20 rounded-lg p-6"
              >
                <h3 className="text-lg md:text-xl font-semibold text-bakery-brown mb-3">
                  {faq.question}
                </h3>
                <p className="text-bakery-charcoal/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
