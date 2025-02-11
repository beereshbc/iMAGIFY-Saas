import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setIsLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col justify-center items-center min-h-[90vh]"
    >
      <div>
        <div className="relative">
          <img className="sm:max-w-sm w-80 rounded" src={image} alt="" />
          <span
            className={`absolute bottom-0 left-0 bg-blue-500 h-1 ${
              isLoading ? "w-full transition-all duration-[10s]" : "w-0"
            }  `}
          />
        </div>
      </div>
      <p className={isLoading ? "" : "hidden"}>Loading....</p>

      {isImageLoaded ? (
        <div className="flex gap-4 text-sm p-0.5 mt-10 text-black justify-center ">
          <p
            onClick={() => setIsImageLoaded(false)}
            className="bg-transparent border border-zinc-900 rounded-full py-3 px-8 cursor-pointer text-black"
          >
            Generate Image
          </p>
          <a
            className="bg-black py-3 px-10 rounded-full text-white"
            download
            href={image}
          >
            Download
          </a>
        </div>
      ) : (
        <div className="flex w-full flex-wrap max-w-xl p-0.5 mt-10 rounded-full text-white text-sm bg-neutral-200">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter prompt here..."
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 py-4 placeholder-clr"
          />
          <button
            type="submit"
            className="bg-neutral-800 px-10 sm:px-16 py-3 rounded-full "
          >
            Generate
          </button>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
