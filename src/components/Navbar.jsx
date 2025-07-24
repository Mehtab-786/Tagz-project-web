import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#8ABB6C] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.1 }}
          whileHover={{ scale: 1.08 }}
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          LabTag
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
          className="hidden md:flex space-x-6 text-gray-700 text-lg"
        >
          <Link to="/" className="hover:text-blue-600 transition font-semibold">Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition font-semibold">Products</Link>
          <Link to="/about" className="hover:text-blue-600 transition font-semibold">About</Link>
          <Link to="/login" className="hover:text-blue-600 transition font-semibold">Login</Link>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-gray-800"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear", }}
            className="md:hidden px-6 pb-4 flex flex-col gap-4  text-gray-700 text-lg bg-white shadow-md"
          >
            <Link to="/" onClick={toggleMenu} className=" hover:text-blue-600">Home</Link>
            <Link to="/products" onClick={toggleMenu} className="hover:text-blue-600">Products</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-blue-600">About</Link>
            <Link to="/login" onClick={toggleMenu} className="hover:text-blue-600">Login</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
