import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center my-20 py-12"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer testimonials
      </h1>
      <p className="mb-12 text-gray-500">What Our Users Are Saying</p>
      <div className="flex flex-wrap gap-6 ">
        {testimonialsData.map((items, index) => (
          <div
            key={index}
            className=" bg-white/20 border shadow-lg cursor-pointer rounded-lg p-12 m-auto w-80 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={items.image}
                className="rounded-full w-14 justify-center items-center mx-auto py-8"
                alt=""
              />
              <h2 className="text-xl font-semibold mt-3">{items.name}</h2>
              <p className="text-gray-500 mb-4">{items.role}</p>
              <div className="flex mb-4">
                {Array(items.stars)
                  .fill("")
                  .map((star, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">{items.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
