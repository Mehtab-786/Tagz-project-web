import { motion } from "framer-motion";
import sagar from '../assets/images/sagar-bhalotia.webp';
import anish from '../assets/images/anish.webp';
import businesstoday from '../assets/images/bstoday.webp';
import economictimes from '../assets/images/economictimes.webp';
import inc42 from '../assets/images/inc42.webp';
import slurp from '../assets/images/slurp.webp';
import toi from '../assets/images/timeofindia.webp';
import sharkTank from '../assets/images/sharktankimage.webp';

export default function About() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto space-y-16">
      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold mt-10 ">About TagZ Foods</h1>
        <p className="text-lg text-gray-700 font-medium oswald-text">
          Founded in June 2019 by Anish Basu Roy and Sagar Bhalotia in Bangalore, TagZ Foods redefined Indian snacking by introducing the first-ever popped potato chips in India—featuring 50% less fat than traditional chips.
        </p>
      </motion.section>

      {/* Milestones */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="p-6 bg-yellow-100 rounded-xl">
          <h2 className="text-3xl font-bold">₹70 Lakh</h2>
          <p className="mt-1">Seed Investment via Shark Tank Season 1</p>
        </div>
        <div className="p-6 bg-green-100 rounded-xl">
          <h2 className="text-3xl font-bold">$2 Million</h2>
          <p className="mt-1">Pre‑Series A Funding from 9Unicorns, Agility Ventures & more</p>
        </div>
        <div className="p-6 bg-blue-100 rounded-xl">
          <h2 className="text-3xl font-bold">×9 Growth</h2>
          <p className="mt-1">Sales grew nine-fold in FY22; achieved profitability</p>
        </div>
      </motion.section>

      {/* Founders */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-center text-3xl font-semibold">Meet the Founders</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="text-center">
            <img loading="lazy" src={anish} alt="Anish Basu Roy" className="w-48 h-48 object-cover rounded-full shadow-lg mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Anish Basu Roy</h3>
            <p className="text-gray-600">Co‑Founder & CEO</p>
          </div>
          <div className="text-center">
            <img loading="lazy" src={sagar} alt="Sagar Bhalotia" className="w-48 h-48 object-cover rounded-full shadow-lg mb-4 mx-auto"  />
            <h3 className="text-xl font-bold">Sagar Bhalotia</h3>
            <p className="text-gray-600">Co‑Founder</p>
          </div>
        </div>
      </motion.section>

      {/* Shark Tank Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-3xl font-semibold ">Pitched on Shark Tank India</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-xl oswald-text">
          TagZ Foods made a memorable appearance on Shark Tank India Season 1, securing ₹70 lakh in funding. Their innovative approach to healthy snacking impressed the sharks and viewers alike.
        </p>
        <img loading="lazy" src={sharkTank} alt="TagZ Shark Tank India" className="w-full max-w-3xl aspect-video object-top object-cover mx-auto rounded-xl shadow-md " />
      </motion.section>

      {/* Media Logos */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-center text-3xl font-semibold">As Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img loading="lazy" src={economictimes} alt="Economic Times" className="w-2/5 aspect-video opacity-80 hover:opacity-100 transition" />
          <img loading="lazy" src={inc42} alt="INC42" className="w-2/5 aspect-video opacity-80 hover:opacity-100 transition" />
          <img loading="lazy" src={businesstoday} alt="Business Today" className="w-2/5 aspect-video opacity-80 hover:opacity-100 transition" />
          <img loading="lazy" src={slurp} alt="Slurp" className="w-2/5 aspect-video opacity-80 hover:opacity-100 transition" />
          <img loading="lazy" src={toi} alt="Times of India" className="w-2/5 aspect-video opacity-80 hover:opacity-100 transition" />
        </div>
      </motion.section>

      {/* Vision Forward */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-center space-y-4"
      >
        <p className="text-lg text-gray-700 max-w-3xl mx-auto ">
          From a single facility in 2019 to six manufacturing units today, TagZ Foods is building an omnichannel snacking powerhouse—planning exports across Asia and targeting ₹1,000 crore in annual revenue within a few years.
        </p>
      </motion.section>
    </div>
  );
}
