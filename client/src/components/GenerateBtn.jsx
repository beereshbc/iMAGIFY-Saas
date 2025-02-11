import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl py-6 md:py-16 text-gray-600 font-semibold mb-2">
          See the magic. Try now
        </h2>
        <button
          onClick={onClickHandler}
          className="bg-black text-white text-sm py-2.5 gap-4 w-auto text-center px-12 rounded-full flex  mb-5 sm:text-lg hover:scale-105 transition-all duration-300 "
        >
          Generate Images
          <img className="h-6" src={assets.star_group} alt="" />
        </button>
      </div>
      <div></div>
    </motion.div>
  );
};

export default GenerateBtn;
