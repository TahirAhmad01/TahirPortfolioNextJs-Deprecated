import React from "react";
import socialBtnList from "../utils/socialBtnList.json";
import SocialBtn from "./socialBtn";

export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-100 rounded-sm shadow dark:bg-gray-800 ">
        <div className="lg:flex lg:items-center lg:justify-between text-center p-5 lg:p-2 containerCustom">
          <span className="text-sm text-gray-500 lg:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://Qubartech.com/" className="hover:underline">
              Qubartech
            </a>
            . All Rights Reserved.
          </span>
          <div className="icons text-gray-600 dark:text-white/60 flex justify-center flex-wrap mt-2 lg:mt-0">
            {socialBtnList.map((btn, idx) => {
              const { link, hover, icon } = btn || {};
              return (
                <SocialBtn
                  key={idx}
                  link={link}
                  hover={`${hover}`}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
