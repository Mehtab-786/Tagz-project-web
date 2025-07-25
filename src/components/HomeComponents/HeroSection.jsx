import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pic7 from "../../assets/images/pic 7.jpg";

function HeroSection() {
  const fullText = "“Crunch that Hits Different — Taste the TAG!”";
  const [displayedText, setDisplayedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  min-h-[90vh] bg-gradient-to-r from-[#edc518] via-[#abc250] to-[#2dbebb] flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10 gap-10">
      {/* Text & Buttons */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 200 }}
          className="bg-black/30 backdrop-blur-md px-6 py-8 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-tight lobster-two-regular">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <button
            className="bg-white text-amber-700 font-semibold px-6 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md"
            onClick={() => alert("Order flow coming soon!")}
          >
            Order Now
          </button>
          <button
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md"
            onClick={() => navigate("/products")}
          >
            Explore Tagz
          </button>
        </div>
      </div>

      {/* Image */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img loading="lazy"
          src={pic7}
          alt="TAG snack"
          className="rounded-xl shadow-xl max-h-[70vh] w-auto object-contain"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
