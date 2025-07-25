import background from "../../assets/images/video-background.webp";
import post from "../../assets/images/shikhar.webp";
import tagz from "../../assets/videos/videoplayback.mp4";
import { motion } from "motion/react";

function VideoSection() {
  return (
    <section
      className=" w-full bg-no-repeat bg-[center_60%] bg-contain flex items-center justify-center px-4 py-10 "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-5xl  w-full mx-auto text-center space-y-6">
        {/* Gradient Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold rubik-wet-paint-regular text-transparent bg-clip-text bg-gradient-to-r from-[#b8990f] via-[#98b81c] to-[#11acaa] leading-tight sm:leading-snug "
        >
          No Fry, Only Fly — Get High on Flavour with TagZ!
        </motion.h1>

        {/* Subheading or Quote (optional) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs sm:text-xl  text-gray-500 mb-5 font-semibold max-w-2xl mx-auto dm-serif-text-regular"
        >
          The crunch you crave, the taste you deserve — 50% less fat, 200% more
          fun!
        </motion.p>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-[960px] aspect-video rounded-2xl flex items-start  justify-center overflow-hidden mx-auto"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[80%] rounded-2xl aspect-video object-cover"
            poster={post}
          >
            <source src={tagz} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;
