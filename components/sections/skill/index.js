import skillsList from '@/utils/skillData.json';
import Title from '../title';
import ProgressBar from './progressBar';

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title title="skill" />
        <div className="flex flex-wrap">
          {skillsList?.length > 0 &&
            skillsList?.map((skill, idx) => {
              const { name, progress } = skill || {};
              return <ProgressBar name={name} progress={progress} key={idx} />;
            })}
        </div>
      </div>
    </>
  );
}
