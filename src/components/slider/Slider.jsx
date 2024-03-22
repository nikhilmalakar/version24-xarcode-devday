import React from "react";
import "./slider.css";

export default function Slider() {
  return (
    <div className="mb-20">
      <div className="top-tutor-container mb-10 flex flex-col align-center justify-center font-bold text-xl">

        <div className="top-tutor-gallery flex align-center justify-center">
          <div className="top-tutor-img-box ">
            <a href="https://github.com/xarcode/Blog-API">
              <h5>Simple Blog API</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/nikhilmalakar/drawing-tool">
              <h5>Online Drawing Tool</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/xarcode/URL-Shortner">
              <h5>URL Shortner</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/nikhilmalakar/language-translator">
              <h5>Language Translator</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/nikhilmalakar/bookmark-manager-extension">
              <h5>Bookmark Manager</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/Sankalpd19/House-Price-Prediction">
              <h5>House Price Predictor</h5>
            </a>
          </div>
          <div className="top-tutor-img-box">
            <a href="https://github.com/Sankalpd19/Customer-Churn-Prediction">
              <h5>Customer Churn Predictor</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
