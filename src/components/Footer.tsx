
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bakery-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="text-3xl font-bold text-white font-playfair mb-6">
              Golden<span className="text-bakery-gold">Crust</span>
            </div>
            <p className="mb-6 text-white/80">
              We are an artisanal bakery dedicated to crafting delicious baked goods using traditional techniques and the finest ingredients available.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bakery-gold" />
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bakery-gold" />
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/services#bread">Artisan Bread</FooterLink>
              <FooterLink to="/services#pastries">Pastries</FooterLink>
              <FooterLink to="/services#cakes">Custom Cakes</FooterLink>
              <FooterLink to="/services#catering">Catering</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-bakery-gold" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-bakery-gold shrink-0 mt-0.5" />
                <span className="text-white/80">123 Baker Street, Sweetville, CA 92101</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-bakery-gold" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-bakery-gold" />
                <span className="text-white/80">hello@goldencrust.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Bakery Hours</h3>
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            <div className="px-6 py-3 bg-white/10 rounded-lg">
              <p className="font-semibold">Mon - Fri</p>
              <p className="text-white/80">7:00 AM - 7:00 PM</p>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg">
              <p className="font-semibold">Saturday</p>
              <p className="text-white/80">8:00 AM - 6:00 PM</p>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg">
              <p className="font-semibold">Sunday</p>
              <p className="text-white/80">8:00 AM - 3:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Golden Crust Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  Icon: React.FC<any>;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-bakery-gold hover:text-bakery-brown transition-colors duration-300"
    >
      <Icon size={18} />
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="text-white/80 hover:text-bakery-gold transition-colors duration-300">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
