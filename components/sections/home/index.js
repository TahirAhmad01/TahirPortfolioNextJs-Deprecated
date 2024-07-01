import avatar from '@/assets/images/avater.webp';
import useWindowDimensions from '@/hook/getWindowDimensions';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-reveal';
import Typed from 'react-typed';
import Wave from 'react-wavify';
import SocialBtn from '../../socialBtn';
import socialBtnList from './../../../utils/socialBtnList.json';
import Button from './button';

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={`lightBg dark:darkBg relative  ${
        height > 694 && width > 992 && 'h-screen'
      }`}
    >
      {/* // */}
      <div className="w-full h-full background bg-lightBgImg dark:bg-darkBgImg">
        {' '}
        <div className="h-auto md:h-full bg-black/15 pt-24 py-8 containerCustom relative z-10">
          <div className="backdrop-blur-xl bg-white/60 dark:bg-[#0b1327]/80 rounded-2xl h-full w-full relative overflow-hidden">
            <div
              className={`flex items-center justify-center flex-col overflow-hidden h-full w-full relative z-20 pt-20 md:pb-28 pb-32`}
            >
              <div className="relative h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full bg-white mb-4">
                <Image src={avatar} alt="avatar" fill={true} priority={true} />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium pb-4 pt-2 ">
                <Fade up cascade>
                  {process.env.fullName}
                </Fade>
              </h2>{' '}
              <Typed
                strings={[
                  'Full-stack Web Developer',
                  'Javascript Developer',
                  'React Developer',
                  'Ruby Developer',
                  'Web Designer',
                ]}
                typeSpeed={90}
                backSpeed={80}
                loop
                className="text-md md:text-xl text-gray-600 dark:text-gray-300"
              />
              <div className="icons mt-4 text-gray-600 dark:text-white/60 flex justify-center flex-wrap">
                {socialBtnList.map((btn, idx) => {
                  const { link, hover, icon } = btn || {};
                  return (
                    <span key={idx}>
                      <SocialBtn
                        key={idx}
                        link={link}
                        hover={hover}
                        icon={icon}
                      />
                    </span>
                  );
                })}
              </div>
              <div className="flex mt-5">
                <Link href="/contact">
                  <Button name="Get in touch" />
                </Link>

                {/* https://drive.google.com/file/d/1Fk19gxqaJQnGJ8ThNbvC-MySTzK6N57c/view?usp=drive_link */}
                <a
                  href="https://drive.google.com/uc?export=download&id=133oZZsA2HoTxaVnt_4ZwJPPYjTkjopKs"
                  download
                >
                  <Button name="Download CV" />
                </a>
              </div>
            </div>
            <Wave
              fill="#fff4"
              paused={false}
              options={{
                height: 50,
                amplitude: 50,
                speed: 0.15,
                points: 3,
              }}
              className="absolute bottom-0 z-10 "
            />
            <Wave
              fill="#fff5"
              paused={false}
              options={{
                height: 70,
                amplitude: 30,
                speed: 0.2,
                points: 5,
              }}
              className="absolute bottom-0 z-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
