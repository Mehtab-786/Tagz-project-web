import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import {chipss  ,chipss1  ,chipss2  ,chipssHover  ,chipss1Hover  ,chipss2Hover} from '../../utils/images'

import { useNavigate } from "react-router-dom";

export default function ProductShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const products = [
    {
      name: "Flavour Blast",
      image: chipss,
      hoverImage: chipssHover,
      oldPrice: "₹539",
      newPrice: "₹299"
    },
    {
      name: "All in one combo",
      image: chipss1,
      hoverImage: chipss1Hover,
      oldPrice: "₹876",
      newPrice: "₹499"
    },
    {
      name: "Cocktail Special",
      image: chipss2,
      hoverImage: chipss2Hover,
      oldPrice: "₹751",
      newPrice: "₹349"
    }
  ];

  return (
    <div
      ref={ref}
      className="w-full min-h-[90vh] bg-gradient-to-r from-[#2dbebb] via-[#abc250] to-[#edc518] flex flex-col items-center px-6 md:px-16 py-10 gap-5 mb-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white sm:mb-6 mb-0  dm-serif-text-regular-italic"
      >
        Our Best Products
      </motion.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} inView={inView} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, inView }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate =  useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.1, delay:0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-transparent shadow-2xl rounded-xl p-4 flex flex-col items-center justify-between min-h-[400px] transition-all duration-300 "
    >
      <motion.img 
        loading="lazy"
        src={isHovered ? product.hoverImage : product.image}
        alt={product.name}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full aspect-video object-cover rounded-md mb-4 transition-all duration-500"
      />
      <h3 className="text-xl font-semibold mb-2 lobster-two-bold text-white">{product.name}</h3>
      <div className="flex gap-2 items-center mb-4">
        <span className="text-gray-100 font-semibold text-lg line-through lobster-two-regular">
          {product.oldPrice}
        </span>
        <span className="text-xl font-bold text-green-700 lobster-two-regular">
          {product.newPrice}
        </span>
      </div>
      <button
        onClick={() => navigate('/products')}
        className={`px-6 py-2 rounded-full transition-all duration-300 border cursor-pointer`}
      >
        Explore
      </button>
    </motion.div>
  );
}
