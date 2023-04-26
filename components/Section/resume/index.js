import React from "react";
import educationList from "../../../utils/educationList.json";
import workList from "../../../utils/workList";
import Title from "../title";
import Education from "./education";
import WorkExperience from "./workExperience";

export default function Resume() {
  let experience;
  let university;

  experience = workList
    .sort((b, a) => a.id - b.id)
    .map((work, idx) => {
      return (
        <span key={idx}>
          <WorkExperience work={work} />
        </span>
      );
    });

  university = educationList
    .sort((b, a) => a.id - b.id)
    .map((education, idx) => {
      return (
        <span key={idx}>
          <Education education={education} />
        </span>
      );
    });

  return (
    <>
      <div className="containerCustom gap">
        <Title title="Resume" />
        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden mb-7">
          <div className="px-5 py-4 border-gray-200 border-b-2 dark:border-gray-700 font-semibold text-xl">
            Work Experience
          </div>
          {experience}
        </div>

        <div className="grid grid-cols-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <div className="px-5 py-4 border-gray-200 border-b-2 dark:border-gray-700 font-semibold text-xl">
            Education
          </div>
          {university}
        </div>
      </div>
    </>
  );
}
