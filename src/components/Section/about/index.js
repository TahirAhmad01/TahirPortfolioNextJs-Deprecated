import React from "react";
import { Fade, Zoom } from "react-reveal";
import picture from "../../.../../../assets/images/myPic.jpg";
import Title from "../title";
import Info from "./info";

export default function About() {
  return (
    <div className=" flex items-center flex-wrap relative">
      {/* <div className="w-full lg:w-1/2 ">
        <Zoom>
          <img src={picture} alt="" className="w-full" />
        </Zoom>
      </div> */}
      <div className="containerCustom gap overflow-hidden">
        {/* <h4 className="  mt-7 md:mt-0 text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          About Me
        </h4> */}

        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3>Hello! I Am Tahir Ahmad.</h3>{" "}
              <p className="text-sm">
                As an experienced front-end developer with React.js, I have been
                actively involved in web development since 2020. My skill set
                includes proficiency in HTML5, CSS3, CSS3 Animation, Bootstrap,
                JavaScript, jQuery, jQuery Animation, React.js, Redux, and
                Next.js. I am also adept at converting PSD, image, and PDF
                designs into clean and responsive HTML code. With a keen eye for
                creating stunning website effects and a focus on maintaining
                clean and effective cross-browser support, I ensure seamless
                performance across different platforms. I am also an active
                contributor to open-source projects on GitHub, showcasing my
                commitment to the development community. My expertise in clean
                coding practices ensures that I deliver efficient and
                maintainable code for optimal website performance.
              </p>
              <div className="mt-5">
                <Fade up>
                  <Info name="email" details="tahirahmad0234@gamil.com" />
                  <Info name="phone" details="+8801610881871" />
                  <Info name="address" details="Rajshahi, Bangladesh" />
                  <Info name="status" details="Available" />
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <img src={picture} alt="" className="w-full" />
            </div>{" "}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
