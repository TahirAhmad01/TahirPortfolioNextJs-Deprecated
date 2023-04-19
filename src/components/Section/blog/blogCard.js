import React from "react";

export default function BlogCard({ img, title, description }) {
  return (
    <>
      <div className="w-full h-full flex flex-col my-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/#">
          <img
            className="rounded-t-lg h-64 object-cover w-full"
            src={img}
            alt=""
          />
        </a>
        <div className="p-5 flex flex-col justify-between h-full">
          <a
            href="/#"
            className="text-lg font-semibold  text-gray-900 dark:text-white flex-grow mb-[-15px]"
          >
            {title}
          </a>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            <p>{description}</p>
          </div>
          <div>
            <a
              href="/#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
