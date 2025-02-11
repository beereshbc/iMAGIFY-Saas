import React from "react";
import { assets, stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center mt-20 my-32"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl text-center mb-2 font-semibold">
        How it works
      </h1>
      <p className=" mb-8 text-neutral-500 text-center text-lg ">
        Transform Words Into Stunning Images
      </p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((step, index) => (
          <div
            className="flex gap-4 rounded-lg items-center p-5 px-8 bg-white/20 border shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 "
            key={index}
          >
            <img width={40} src={step.icon} alt="" />
            <div className="">
              <h2 className="text-xl font-medium">{step.title}</h2>
              <p className="text-sm text-neutral-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
