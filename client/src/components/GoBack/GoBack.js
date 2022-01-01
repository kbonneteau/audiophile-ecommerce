import "./GoBack.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button">
      <button className="back-button__button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default GoBack;
