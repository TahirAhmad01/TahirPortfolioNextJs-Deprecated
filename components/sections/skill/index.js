// import skillsList from '@/utils/skillData.json';
import skillsList from '@/utils/skillsList.json';
import { Fade } from 'react-reveal';
import Title from '../title';

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title title="skill" />

        {/* {skillsList?.length > 0 &&
            skillsList?.map((skill, idx) => {
              const { name, progress } = skill || {};
              return (
                <>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" />
                  <ProgressBar name={name} progress={progress} key={idx} />
                </>
              );
            })} */}
        {/* <div className="grid grid-cols-2 gap-2 w-full row-start-auto"> */}
        {skillsList?.length > 0 &&
          skillsList?.map((skill, idx) => {
            const { name, list } = skill;
            return (
              <div className="my-5" key={idx}>
                <Fade up delay={idx * 20} cascade>
                  <div className="mb-1 capitalize text-xs font-medium dark:text-gray-100">{name}</div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {list?.map((list, idx) => {
                      const { name, icon,position,progress } = list || {};

                      return (
                        <div
                          className="px-4 py-3 dark:bg-[#263249] bg-white shadow-md rounded-lg relative overflow-hidden"
                          key={idx}
                        >
                          <Fade left>
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-full z-10 rounded-lg blur-md" style={{ width: progress + "%" }}>
                            <div className="backdrop-blur-  xl bg-white/80 dark:bg-[#0b1327]/60 h-full w-full"></div>
                          </div>
                          </Fade>
                          <div className="flex items-center z-20 gap-2 relative">
                          <img
                            src={`${
                              icon
                                ? icon
                                : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                            }`}
                            className="w-auto h-5 text-white"
                          />
                          <div className="capitalize text-md  line-clamp-1">{name} <span className="dark:text-gray-400 text-gray-500 text-xs">( {position} )</span></div>
                        </div></div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            );
          })}
        {/* </div> */}
      </div>
    </>
  );
}
