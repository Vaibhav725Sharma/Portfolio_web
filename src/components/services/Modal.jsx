import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, description, link }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            Click For More
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
