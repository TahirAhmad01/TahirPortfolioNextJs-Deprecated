import React from "react";

export default function Info({ name, details }) {
  return (
    <>
      <div className="flex py-1 flex-wrap">
        <div className="w-full md:w-[85px] capitalize">{name} :</div>
        <div className="font-semibold">{details}</div>
      </div>
    </>
  );
}
