import React from "react";
import Title from "../title";
import Skills from "./../../../utils/skillData.json";
import ProgressBar from "./progressBar";

export default function Skill() {
  return (
    <>
      <div className=" containerCustom gap">
        <Title title="skill" />
        <div className="flex flex-wrap">
          {Skills.map((skill, idx) => {
            const {name, progress} = skill || {};
            return (
              <ProgressBar
                name={name}
                progress={progress}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
