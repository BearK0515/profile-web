import React from "react";
import jobs from "../constants/jobs";

const WorkExperience = () => {
  return (
    <section id='work-experiece' className=' flex flex-col items-center py-16'>
      <div
        className=' w-44 h-60 bg-Logo dark:bg-darkLogo bg-cover animate-bounce'
      />
      <div className=' max-w-6xl w-full h-full bg-white dark:bg-gray-900 mx-auto my-8 text-4xl font-bold laptop:text-[68px] laptop:leading-[68px] laptop:w-4/5'>
        <div className=' flex justify-center py-6 dark:text-white'>WORK EXPERIENCE</div>
        <hr className='title-bottom bg-black dark:bg-white' />
        <div className='timeline-container relative w-full p-10 pb-30 before:left-1/2 before:translate-x-1/2 before:-translate-y-5'>
          {jobs?.map(({ job, company, time, content }, index) => (
            <WorkExperienceCard
            key={index}
              index={index + 1}
              job={job}
              company={company}
              time={time}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

const WorkExperienceCard = ({ index, job, company, time, content }) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "items-end" : ""
      } select-none`}
    >
      <div
        className={`relative w-1/3 group job-card flex flex-col items-center justify-center pb-4 ${
          index % 2 === 0
            ? "before:-left-[calc(50%+4px)] after:-left-[calc(50%)]"
            : "before:-right-[calc(50%+12px)] after:-right-[calc(50%)]"
        } hover:bg-blue-600 hover:shadow-[3px_3px_6px_5px_rgba(0,0,0,0.3)]`}
      >
        <div className=' relative w-full'>
          <h3 className=' text-2xl text-center'>{job}</h3>
          <div className='text-xl text-center'>{company}</div>
          <div className=' absolute -right-1 -top-8 text-base text-blue-500 dark:text-white'>{time}</div>
        </div>
        <div
          className={`absolute top-[calc(100%+20px)] ${
            index % 2 === 0 ? "right-0" : "left-0"
          } m-auto w-[calc(100vw-100px)] ${content[0] === "" ? "":"p-6"} rounded-md bg-red-500 text-white text-base opacity-0 z-20 invisible group-hover:opacity-100 group-hover:visible group-hover:scale-100 duration-300 laptop:max-w-xl`}
        >
          {content.map((item,index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
