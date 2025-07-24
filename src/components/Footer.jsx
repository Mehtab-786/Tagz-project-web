import React, { useState } from "react";
import instagram from '../assets/logo/instagram.svg'
import facebook from '../assets/logo/facebook.svg'
import linkedin from '../assets/logo/linkedin.svg'


import TagzLogo from "../assets/logo/logo-mask.webp";
import ZeptoLogo from "../assets/logo/zepto.jpg";
import InstamartLogo from "../assets/logo/instsmart.png";
import AmazonLogo from "../assets/logo/amazon.jpg";
import BlinkitLogo from "../assets/logo/blinkit.jpg";
import FlipkartLogo from "../assets/logo/flipkart.jpg";
import DunzoLogo from "../assets/logo/dunzo.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-neutral-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-3">
          <img src={TagzLogo} alt="TagZ" className="w-36" />
          <p className="text-sm text-neutral-300">Snack smarter with TagZ – bold taste, no compromise.</p>
          <p className="text-xs text-neutral-500 mt-2">&copy; {new Date().getFullYear()} TagZ Foods</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Contact Us", "Terms & Conditions", "Privacy Policy", "Returns & Refunds", "FAQ"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-amber-400 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-neutral-300 mb-3">Exclusive offers & latest launches.</p>
          <div className="flex overflow-hidden rounded-md w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 text-gray-300 outline-1 border-b "
            />
            <button
              onClick={handleSubscribe}
              className="bg-amber-500 px-4 text-sm font-semibold hover:bg-amber-600"
            >
              Submit
            </button>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 mt-5">
            <img src={linkedin} className="w-5 h-5 hover:text-amber-400 transition cursor-pointer bg-white" alt="" />
            <img src={facebook} className="w-5 h-5 hover:text-amber-400 transition cursor-pointer bg-white" alt="" />
            <img src={instagram} className="w-5 h-5 hover:text-amber-400 transition cursor-pointer bg-white" alt="" />
          </div>
        </div>

        {/* Partners */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Available On</h4>
          <div className="grid grid-cols-3 gap-3">
            {[ZeptoLogo, InstamartLogo, AmazonLogo, BlinkitLogo, FlipkartLogo, DunzoLogo].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="Partner Logo"
                className="h-8 w-full object-contain grayscale hover:grayscale-0 transition duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
