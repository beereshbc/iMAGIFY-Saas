import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  //front-end back-end connecting example
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(backendUrl);

    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error.message);
      toast.error(data.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/30 z-10 backdrop-blur-sm text-white">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white mx-2 flex-wrap p-10 text-slate-500 rounded-xl "
      >
        <h1 className="text-center text-2xl font-medium text-neutral-700 ">
          {state}
        </h1>
        <p className="text-sm mx-auto text-center">
          Welcome back! Please sign in to continue
        </p>

        {state === "SignUp" && (
          <div className="flex gap-2 mt-5 px-6 py-2 border items-center border-gray-500 rounded-full ">
            <img width={25} src={assets.profile_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="flex gap-2 mt-5 px-6 py-2 border items-center border-gray-500 rounded-full ">
          <img width={20} src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none bg-white"
            type="mail"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex gap-2 mt-5 px-6 py-2 border items-center border-gray-500 rounded-full ">
          <img width={14} src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="font-medium text-sm text-blue-400 cursor-pointer mt-2 ml-2">
          Forgot password?
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-4">
          {state === "SignUp" ? " Create Account" : "Login"}
        </button>
        {state === "SignUp" ? (
          <p className="text-center mt-4 text-sm text-gray-500 ">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 ml-2 cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-center mt-4 text-sm text-gray-500 ">
            Don’t have an account?
            <span
              onClick={() => setState("SignUp")}
              className="text-blue-500 ml-2 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        )}
        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default Login;
