import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./Share.scss"

const Share = () => {
  return (
    <div>
      <div className="share-container">
        <p className="share-text">share</p>
        <span className="separator"></span>
        <div className="icon-container">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Share;
