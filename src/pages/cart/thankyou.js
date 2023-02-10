import React from "react";
import "./thankyou.css";
import { useNavigate } from "react-router-dom";
import Shoplogo from "../../assets/shop.jpg";

export const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className="thankyou_card">
        <div className="notfound">
        <h1>Thankyou...!</h1>
        <h2>For Buying.!</h2>
        <p>For more Go back to the Home</p>
        <p className="home_btn" onClick={() => navigate("/")}> click here! </p>
        <div className="img123">
          <img src={Shoplogo} />
        </div>
        </div>
        
    </div>
  )
};