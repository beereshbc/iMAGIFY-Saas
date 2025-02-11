import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
      className="flex flex-col justify-center items-center text-center my-10"
      initial={({ opacity: 0.2 }, { y: 100 })}
      transition={{ duration: 1 }}
      animate={({ opacity: 1 }, { y: 0 })}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center inline-flex bg-white text-stone-500 px-6 py-1 rounded-full gap-2 border border-neutral-500"
        initial={({ opacity: 0 }, { y: -20 })}
        animate={({ opacity: 1 }, { y: 0 })}
        transition={({ delay: 0.2 }, { duration: 0.8 })}
      >
        <p className="flex"><span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span><a href="www.linkedin.com/in/beereshkumar-b-c-004397341">Beeresh</a></p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h2
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={({ delay: 0.6 }, { duration: 2 })}
      >
        Turn text to <span className="text-blue-500">image</span>, in seconds.
      </motion.h2>
      <motion.p
        className="mt-5 text-center mx-auto max-w-xl "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={({ delay: 0.8 }, { duration: 0.8 })}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </motion.p>
      <motion.button
        onClick={onClickHandler}
        className="bg-black text-white text-sm py-2.5 gap-4 w-auto text-center px-12 rounded-full flex mt-10 sm:text-lg "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          defualt: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>
      <motion.div
        className="mt-16 flex flex-wrap gap-3 items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        {Array(6)
          .fill(" ")
          .map((item, index) => (
            <img
              className="rounded max-sm:w-10 hover:scale-105 transition-all duration-300 cursor-pointer"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              key={index}
              alt=""
              width={70}
            />
          ))}
      </motion.div>
      <motion.p
        className=" mt-2 text-stone-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Generated images from imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
