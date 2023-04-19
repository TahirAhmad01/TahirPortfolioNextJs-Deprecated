import React from "react";
import Slider from "react-slick";
import FeedbackCard from "./feedbackCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:text-gray-500 dark:before:text-gray-400 before:content-['→'] !hidden lg:!block`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:text-gray-500 dark:before:text-gray-400 before:content-['←'] !hidden lg:!block`}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

export default function FeedbackSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="dark:!text-white">
        <Slider {...settings}>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
          <div>
            <FeedbackCard />
          </div>
        </Slider>
      </div>
    </>
  );
}
