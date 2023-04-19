import React from "react";
import Ratings from "./ratings";

export default function Feedback({ star, name, description }) {
  const rating = [];
  for (let i = 0; i < (star || 5); i++) {
    rating.push(<Ratings key={i} />);
  }

  return (
    <>
      <blockquote className="rounded-lg bg-gray-100 p-8 h-full">
        <div className="flex items-center">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-16 w-16 rounded-full object-cover"
          />

          <div className="ml-4">
            <div className="flex justify-start gap-0.5 text-green-500">
              {rating}
            </div>

            <p className="mt-1 text-lg font-medium text-gray-700">{name}</p>
          </div>
        </div>

        <p
          className="mt-4 text-gray-500 h-24 overflow-y-auto scrollbar-hide"
          numberOfLines={3}
        >
          {description}
        </p>
      </blockquote>
    </>
  );
}
