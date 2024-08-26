import React from "react";
import "./Popup.scss";

const Popup = ({ onClose, content }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-text">{content}</div>
      </div>
    </div>
  );
};

export default Popup;
