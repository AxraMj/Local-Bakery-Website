
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      content: "(555) 123-4567",
    },
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      content: "hello@goldencrust.com",
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      content: "123 Baker Street, Sweetville",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-bakery-charcoal/80 max-w-2xl mx-auto"
          >
            Have a question or want to place an order? Reach out to us and we'll
            get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-bakery-gold"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bakery-cream text-bakery-brown mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-bakery-brown mb-2">
                {item.title}
              </h3>
              <p className="text-bakery-charcoal/80">{item.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bakery-cream/30 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-bakery-brown mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-bakery-charcoal font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-bakery-brown/20 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-bakery-charcoal font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-bakery-brown/20 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-bakery-charcoal font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-bakery-brown/20 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-bakery-charcoal font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-bakery-brown/20 focus:outline-none focus:ring-2 focus:ring-bakery-gold/50"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-bakery-brown hover:bg-bakery-brown/90 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215284598917!2d-73.9867306!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1654637272333!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bakery Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
