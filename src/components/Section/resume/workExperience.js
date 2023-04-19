import React, { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import Icon from "../../../assets/images/work.webp";
import useWindowDimensions from "../../../hook/getWindowDimensions";
import CertificateModal from "./certificateModal";

export default function WorkExperience({ work }) {
  const {
    description,
    endDate,
    startDate,
    workTitle,
    position,
    location,
    certificates,
  } = work || {};
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const [contents, setContent] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    setContent(certificates);
  };

  return (
    <>
      <div className="p-6 flex items-center">
        <div className=" mr-6 hidden lg:block overflow-hidden">
          <Zoom>
            <img src={Icon} alt="work_ico" className="w-64" />
          </Zoom>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <div className="overflow-hidden w-full">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h2 className="font-medium text-lg ">
                    <Fade left>{workTitle}</Fade>
                  </h2>
                  <div className="text-gray-500 dark:text-gray-200 text-sm">
                    <Fade left delay={150}>
                      <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-2">
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="bx bxs-briefcase-alt-2"></i> {position}
                        </span>
                        <span className="inline-flex items-center capitalize gap-1">
                          <i className="fa-solid fa-location-dot text-xs"></i>{" "}
                          {location}
                        </span>
                      </div>
                    </Fade>
                  </div>
                </div>

                <div className="text-gray-500 dark:text-gray-200 text-xs mt-1 md:mt-0">
                  <Fade
                    left={width < 768 ? true : false}
                    right={width > 768 ? true : false}
                    duration={1300}
                  >
                    <div className=" flex items-center ">
                      <div className="mr-1">
                        <i className="fa-regular fa-calendar-days text-xs"></i>
                      </div>
                      <div>{startDate}</div>
                      <div className="mx-1"> - </div>
                      <div>{endDate}</div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Fade up>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
              {certificates &&
                certificates.map((certificate, idx) => {
                  const { image, title } = certificate || {};
                  return (
                    <div
                      key={idx}
                      className="rounded-xl cursor-pointer flex items-center mt-3"
                      onClick={handleOpen}
                    >
                      <img
                        src={image}
                        alt={title}
                        className="w-28 rounded-md overflow-hidden"
                      />
                      <div className="ml-2 text-gray-400"> {title}</div>
                    </div>
                  );
                })}
            </Fade>
          </div>
        </div>
      </div>

      <CertificateModal
        contents={contents}
        open={isOpen}
        setOpen={setOpen}
        handleOpen={handleOpen}
      />
    </>
  );
}
