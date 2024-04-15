import aboutInfo from '@/utils/about';
import Image from 'next/image';
import { Fade, Zoom } from 'react-reveal';
import picture from '../../.../../../assets/images/myPic.jpg';
import Title from '../title';
import Info from './info';

export default function About() {
  const { heading, description, information } = aboutInfo || {};

  return (
    <div className=" flex items-center flex-wrap relative">
      <div className="containerCustom gap overflow-hidden">
        <Title title="about me" />

        <div className="md:grid items-center md:gap-3 lg:gap-4 grid-cols-9 md:col-start-9">
          <div className="md:col-span-5 lg:col-span-5 lg:pr-28">
            <Fade up cascade>
              <h3>{heading}</h3>{' '}
              <p className="text-sm flex flex-col gap-2 text-justify">
                {description.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </p>
              <div className="mt-5">
                <Fade up>
                  {information?.map((info, idx) => {
                    const { name, details } = info || {};
                    return <Info name={name} details={details} key={idx} />;
                  })}

                  {/* <Info name="phone" details="+8801610881871" />
                  <Info name="phone" details="Rajshahi, Bangladesh" />
                  <Info name="status" details="Available" /> */}
                </Fade>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div className="relative h-auto w-full mt-5 md:mt-0 overflow-hidden rounded-xl md:col-span-4 lg:col-span-4 aspect-[4/4]">
              <Image
                fill
                priority
                src={picture}
                alt="Tahir's image"
                className="w-full h-auto"
              />
            </div>{' '}
          </Zoom>
        </div>
      </div>
    </div>
  );
}
