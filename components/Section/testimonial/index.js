import React from "react";
import Title from "../title";
import FeedbackSlider from "./feedbackSlider";

export default function Testimonial() {

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CLIENT FEEDBACK" />
        <FeedbackSlider />
      </div>
    </>
  );
}
