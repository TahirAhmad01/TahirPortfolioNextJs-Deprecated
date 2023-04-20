import React from "react";
import Title from "../title";
// import Feedback from "./feedback";
import SimpleSlider from "./Slider";
import FeedbackSlider from "./feedbackSlider";

export default function Testimonial() {
  // const options = {
  //   margin: 30,
  //   responsiveClass: true,
  //   smartSpeed: 200,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     640: {
  //       items: 2,
  //     },
  //     1280: {
  //       items: 3,
  //     },
  //     2000: {
  //       items: 4,
  //     },
  //   },
  // };

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CLIENT FEEDBACK" />
        <FeedbackSlider />
      </div>
    </>
  );
}
