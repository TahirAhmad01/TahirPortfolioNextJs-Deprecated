import React from "react";

function SocialBtn({ icon, hover, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <button className={`${hover} customButton duration-300`}>
          <i className={`${icon}  hover:scale-110`}></i>
        </button>
      </a>
    </>
  );
}

export default SocialBtn;
