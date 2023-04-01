import React from "react";
import SkillIcon from "../commons/SkillIcon";
import skillIconsStyle from "../constants/skillIconsStyle";
import skills from "../constants/skills";

const Skills = () => {
  return (
    <section id="skills" className=' flex flex-col items-center justify-between w-full h-full bg-skills bg-fixed bg-cover bg-center py-8'>
      <div className=' w-full h-full text-4xl text-white font-bold laptop:text-[68px] laptop:leading-[68px] '>
        {/* Title */}
        <div
          className=' flex justify-center py-6'
          onClick={() => console.log(skills[0])}
        >
          SKILLS
        </div>
        <hr className='title-bottom' />
        <div className=' h-full flex flex-col justify-between items-center laptop:grow'>
          {/* Logo + content */}
          <div className=' max-w-4xl justify-between gap-6 mx-auto laptop:flex  laptop:w-4/5'>
            <Skill
              icon={skills[0].WorkSkill.icon}
              title={skills[0].WorkSkill.title}
              content={skills[0].WorkSkill.content}
            />
            <Skill
              icon={skills[1].WebFrontend.icon}
              title={skills[1].WebFrontend.title}
              content={skills[1].WebFrontend.content}
            />
            <Skill
              icon={skills[2].LanguageSkill.icon}
              title={skills[2].LanguageSkill.title}
              content={skills[2].LanguageSkill.content}
            />
          </div>
          {/* 跑馬燈 */}
          <div className=' max-w-lg w-4/5 h-10 flex flex-nowrap items-center overflow-hidden'>
            <div className=' w-auto flex flex-row animate-marquee1'>
              {skillIconsStyle?.map(({ borderColor, textColor, title }) => (
                <SkillIcon
                  borderColor={borderColor}
                  textColor={textColor}
                  title={title}
                />
              ))}
            </div>
            <div className=' w-auto flex flex-row animate-marquee2 animation-delay'>
              {skillIconsStyle?.map(({ borderColor, textColor, title }) => (
                <SkillIcon
                  borderColor={borderColor}
                  textColor={textColor}
                  title={title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill單欄內容
const Skill = ({ icon, content, title }) => {
  return (
    <div className='flex flex-col items-center gap-4 w-full mb-4 laptop:w-1/3'>
      {/* icon */}
      <div className={`animate-ping2 w-[125px] h-[125px] ${icon} bg-cover text-white`} />
      {/* title */}
      <h3 className='text-2xl'>{title}</h3>
      {/* content */}
      <div className=' text-base w-4/5 laptop:w-full'>
        {content?.map((item) => (
          <li className=' pb-2 '>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Skills;
