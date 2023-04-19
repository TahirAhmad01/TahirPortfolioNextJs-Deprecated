import React from "react";

function Info({icon}) {
  return (
    <div className="flex justify-center items-center mb-3">
      <div className="h-12 w-12 border dark:bg-gray-200 bg-gray-300 dark:text-black flex justify-center items-center rounded-full text-lg">
        <i className={icon}></i>
      </div>

      <div className="ml-3 text-base">Gurudaspur,natore,bangladesh</div>
    </div>
  );
}

export default Info;
