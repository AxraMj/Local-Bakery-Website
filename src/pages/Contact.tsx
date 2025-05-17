
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-bakery-cream/30 hero-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-bakery-charcoal/80">
              We'd love to hear from you! Reach out with any questions, special orders, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-bakery-brown mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="w-24 h-1 bg-bakery-gold mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What's the fastest way to place an order?",
                answer:
                  "For the fastest service, we recommend calling us directly at (555) 123-4567. For less urgent orders or custom requests, you can use our contact form or email us.",
              },
              {
                question: "What are your bakery hours?",
                answer:
                  "We are open Monday through Friday from 7:00 AM to 7:00 PM, Saturday from 8:00 AM to 6:00 PM, and Sunday from 8:00 AM to 3:00 PM.",
              },
              {
                question: "Do you offer catering for events?",
                answer:
                  "Yes, we provide catering services for various events including weddings, corporate functions, and private parties. Please contact us at least two weeks in advance to discuss your needs.",
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
    </div>
  );
};

export default Contact;
