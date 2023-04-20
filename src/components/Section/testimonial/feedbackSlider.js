import React from "react";
import Slider from "react-slick";
import FeedbackCard from "./feedbackCard";
import { Slide } from "react-reveal";
import feedbackList from "@/utils/feedbackList.json";

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
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

console.log(feedbackList);

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
          {feedbackList.map((feedback, idx) => {
            const { name, star, description } = feedback || {};
            return (
              <div>
                <Slide up>
                  <FeedbackCard
                    name={name}
                    star={star}
                    description={description}
                  />
                </Slide>
              </div>
            );
          })}
          {/* <div>
            <Slide up>
              <FeedbackCard />
            </Slide>
          </div>{" "}
          <div>
            <Slide up>
              <FeedbackCard />
            </Slide>
          </div>{" "}
          <div>
            <Slide up>
              <FeedbackCard />
            </Slide>
          </div> */}
        </Slider>
      </div>
    </>
  );
}
