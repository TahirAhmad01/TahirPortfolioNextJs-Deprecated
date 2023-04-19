import React, { useState } from "react";
import {
  HorizontalScrollContainer,
  HorizontalScrollItem,
} from "react-simple-horizontal-scroller";
import buttonList from "../../../utils/buttonList";
import projectList from "../../../utils/projectList";

export default function ProjectButton({ setItem }) {
  const [activeBtn, setActiveBtn] = useState("all");
  const filterItem = (category) => {
    setActiveBtn(category);
    if (category === "all") {
      setItem(projectList);
    } else {
      const updateItem = projectList.filter((item) =>
        item.category.includes(category)
      );
      setItem(updateItem);
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        <HorizontalScrollContainer>
          <div className="flex items-center w-full">
            <span className="flex m-auto">
              {buttonList.map((btn, idx) => (
                <HorizontalScrollItem id={idx} key={idx}>
                  <button
                    className={`mx-1 my-1  py-1 px-4 capitalize bg-slate-200 hover:bg-slate-300 rounded-3xl text-sm min-w-[4.5rem]  ${
                      activeBtn === btn.category
                        ? "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl text-white"
                        : "dark:text-black"
                    }`}
                    onClick={() => filterItem(btn.category)}
                  >
                    {btn.name}
                  </button>
                </HorizontalScrollItem>
              ))}
            </span>
          </div>
        </HorizontalScrollContainer>
      </div>
    </>
  );
}
