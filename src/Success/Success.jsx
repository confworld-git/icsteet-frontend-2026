import React from "react";
import "./Success.css";
import pay_success from "../assets/Images/pay-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentStatus, amount, time, Category, Type, Title } =
    location.state || {};
  console.log(location.state);
  return (
    <div className="payment_Success_Page">
      <div>
        <img loading="lazy" src={pay_success} alt="" />
        <h1>Payment Successful...</h1>
        <div className="payment_status">
          <li>Payment Status : {paymentStatus}</li>
          <li>Total Amount : {amount / 100}</li>
          <li>Date & Time : {time}</li>
          <li id="Product_detail">
            <p>Product Details : </p>
            <p>
              <span>{Category}</span>
              <br />
              <span>{Type}</span>
              <br />
              <span style={{ color: "#ff3c87", fontWeight: "700" }}>
                {Title}
              </span>
            </p>
          </li>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
