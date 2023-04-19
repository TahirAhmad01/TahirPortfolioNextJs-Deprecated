import React from "react";

function Button({name, ...rest}) {
  return (
    <button
      type="button"
      className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-5 md:px-9 py-3.5 text-center mr-2 mb-2 text-white   "
      {...rest}
    >
      {name}
    </button>
  );
}

export default Button;
