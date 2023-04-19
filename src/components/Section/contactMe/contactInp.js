import React from "react";
import { Fade } from "react-reveal";

export default function ContactInp({ delay, type, placeholder, ...rest }) {
  return (
    <>
      <Fade up delay={delay}>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md shadow-md  border-1 border-gray-200 focus:border-transparent focus:outline-transparent focus:ring-0 p-3 text-black"
          {...rest}
        />
      </Fade>
    </>
  );
}
