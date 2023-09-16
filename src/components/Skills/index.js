import React from "react";
import "./Skill.css";
import {SkillsData} from "../../data/SkillsData";
import SkillCard from "./SkillCard";

function Skill() {
  const data = SkillsData;
  return (
    <div className="skills">
    <label className="section-title">Skills</label>
    <div className="skills-container">
      {data.map((item) => {
        return (
          <div className="skills-section">
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
 );
}

export default Skill;