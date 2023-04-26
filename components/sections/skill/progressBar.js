import React from "react";
import { Fade } from "react-reveal";

export default function ProgressBar({ name, progress, color, ...rest }) {
  //   useCountUp({ ref: "counter", end: 1234567 });

  return (
    <React.Fragment>
      <div className="mb-4 w-full md:w-1/2 px-2" {...rest}>
        <div className="flex justify-between mb-1">
          <span
            className={`text-base font-semibold text-black dark:text-white uppercase`}
          >
            {name}
          </span>
          <span className={`text-sm font-medium text-black dark:text-white`}>
            {progress}%{/* <span id="counter" /> */}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
          <Fade left>
            <div
              className={`bg-${
                color || "blue-700"
              } bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-full rounded-full`}
              style={{ width: progress + "%" }}
            ></div>{" "}
          </Fade>
        </div>
      </div>
    </React.Fragment>
  );
}
