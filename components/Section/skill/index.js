import { useEffect, useState } from "react";
import Title from "../title";
// import Skills from "./../../../utils/skillData.json";
import axios from "axios";
import ProgressBar from "./progressBar";

export default function Skill() {
  const [skillsList, setSkillsList] = useState([]);
  
  useEffect(()=> {
    axios.get("/api/skillData").then((res) => {
    console.log(res?.data);
    setSkillsList(res?.data);
  });
  },[])

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
