import React, { useContext } from "react";
import { plans, assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, setShowLogin, loadCreditsData, token, backendUrl } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );

          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success('"ಕ್ರೆಡಿಟ್ ಬಂತು ನೋಡ್ರಿ!" 😄');
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col mt-6 min-h-[70vh] m-auto justify-center items-center mx-auto"
    >
      <p className="py-2 cursor-pointer px-2 w-40 text-center mb-4  border rounded-full border-gray-300 bg-white text-sm text-gray-500">
        OUR PLANS
      </p>
      <h2 className="font-semibold text-xl sm:text-2xl">This credits are completly <span className="text-green-600">FREE</span>  you can add it the payment is only testing purpose you can buy dummy... your amount not diduct from your account</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col w-3xl flex-wrap p-20 justify-center shadow-md items-center bg-white rounded-lg hover:scale-105 transition-all duration-300"
          >
            <img className="mb-5" src={assets.logo_icon} width={35} alt="" />
            <h2 className="font-semibold text-xl mb-3">{plan.id}</h2>
            <p className="text-neutral-500 text-sm mb-3">{plan.desc}</p>
            <p className="font-semibold text-xl text-zinc-900 mb-4">
              ₹{plan.price}{" "}
              <span className="text-xs text-gray-600">/{plan.credits}</span>{" "}
              credits
            </p>
            <button
              onClick={() => paymentRazorpay(plan.id)}
              className="bg-black  text-white py-2 px-8 rounded mt-5"
            >
              {user ? "Purchase" : "Get started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
