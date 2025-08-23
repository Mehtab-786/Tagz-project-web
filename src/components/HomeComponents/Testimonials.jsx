import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      title: "CRAZY TASTY",
      description:
        "Nothing makes me happier than a snack that i know is tasty and healthy at the same time. This one is bang on on both!!!!",
      name: "Prathyush Rao",
    },
    {
      title: "Appealing and cracking good Snack...",
      description:
        "From a vibrantly colourful pack stacked at the store to an appetizing wholesome snack, these chips are as good in taste as they are for our health",
      name: "Priyanshu",
    },
    {
      title: "Amazing Snack",
      description:
        "Amazing taste, crisp and delicious!! Loved all the flavours. Can finish in one sitting. Would definitely recommend to all!!",
      name: "Sunmbul Khan",
    },
    {
      title:
        "Tasty, enriched flavours, high quality and price add up to a complete package.",
      description:
        "I enjoyed every single bite of it. Each flavour can be differentiated. Considering the quality, the price is reasonable. Ideal for those who want a different taste from the regular ones. Quality of packaging is too good. I would recommend everyone to have a try to this awesome product.",
      name: "Riddhi Mukherjee",
    },
    {
      title: "Kids Love it !!!",
      description:
        "We got a pack of 5 and both the kids and us adults loved it. Amazing product - healthy and way better than other existing chips options , and really tasty. As a young family we welcome this product as it allows for genuinely fun snacking without the guilt.",
      name: "Priya Veembur",
    },
    {
      title: "Crispy Deliciousness",
      description:
        "Already tried all 3 flavors and still not able to decide which one is best as I loved all of them. I was looking for some nachos option and end up ordering this and to my delight they turned out to be really good.",
      name: "Chitrangana",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
  return (
    <div className="my-10 px-4 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-xl md:text-4xl pl-5 font-bold sm:text-center text-start mb-8 dm-serif-text-regular-italic"
      >
        Some Words From Our Customers
      </motion.h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-[1200px] px-4 py-8"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <motion.div
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white shadow-xl px-6 py-8 rounded-2xl text-center w-[30%] sm:w-full max-w-md h-[300px] flex flex-col justify-between border-2 border-transparent bg-clip-padding bg-gradient-to-r from-[#dfcd7c] via-[#acbc6c] to-[#76d7d5]"
            >
              <div className="text-4xl text-purple-500 mb-1">
                <Quote />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {testimonial.title.length > 20
                    ? testimonial.title.slice(0, 25) + "..."
                    : testimonial.title}
                </h3>
                <p className="text-gray-700 italic leading-tight text-base px-2">
                  “
                  {testimonial.description.length > 200
                    ? testimonial.description.slice(0, 200)
                    : testimonial.description}
                  ..<span className="text-blue-500 text-xs">more</span>”
                </p>
              </div>

              <div className="mt-4 font-semibold text-lg text-gray-900">
                — {testimonial.name}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
