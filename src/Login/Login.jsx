import React, { useEffect } from "react";
import "./Login.css";
import login_img from "../assets/Images/login-img.webp";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}ICSTEET_2026_Login`,
        data
      );
      if (response.data.success === true) {
        localStorage.setItem(`ICSTEET_AuthToken`, response.data.token);
        navigate("/ICSTEET_2026_Dashboard");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const LoginDetails = localStorage.getItem("ICSTEET_AuthToken");
    if (LoginDetails) {
      navigate("/ICSTEET_2026_Dashboard");
    }
  }, []);
  return (
    <div className="login">
      <div data-aos-anchor-placement="top-bottom" data-aos="zoom-in-up">
        <img loading="lazy" src={login_img} alt="" />
        <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome Back...</h1>
          <label>
            Email
            <input
              type="email"
              {...register("Email", {
                required: true,
              })}
              placeholder="Enter your email here"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              {...register("Password", { required: true })}
              placeholder="Enter your password here"
              required
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
