import React from "react";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home-page">
        <div className="topic">
          <h1>
            Pure refreshment, enjoy our <span> irresistible</span> smoothies!
          </h1>
        </div>
        <div className="image">
          <img
            src="/images/smoothiee.png"
            alt="Smoothie"
            className="smoothie-image"
          />
        </div>
      </div>

      <div className="home-btn">
        <button >Order now </button>
      </div>
    </div>
  );
};

export default Homepage;
