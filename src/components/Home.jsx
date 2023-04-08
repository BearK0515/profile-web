import React from "react";
import { CakeResumeIcon, GithubIcon } from "../assets/icons";
import Carousel from "../commons/Carousel";

const slides = ["前端工程師", "營養師", "外送員", "藥師助理", "磁磚師傅"];

const Home = ({}) => {
  return (
    <section
      id='home'
      className=' flex flex-col items-center justify-between w-full h-[calc(100vh-3rem)] bg-home dark:bg-darkHome bg-fixed bg-cover bg-center py-8'
    >
      <div className=' text-4xl text-white font-bold laptop:text-[68px] laptop:leading-[68px] '>
        <div className=' flex justify-center py-6'>BearK's PROFILES</div>
        <div className=' flex justify-between h-10 laptop:h-16'>
          <span className='mr-8'>I'm a</span>
          <Carousel slides={slides} autoSlide={true} autoSlideInterval={1000} />
        </div>
      </div>
      <div className=' flex gap-4'>
        <a
          href='https://github.com/BearK0515'
          target='_blank'
          className=' cursor-pointer'
          title='Github'
        >
          <GithubIcon size={30} color='white' />
        </a>
        <a
          href='https://www.cakeresume.com/s--qT3QtAnioznjNCIxYr9HAg--/harry-hsu0515'
          target='_blank'
          className=' cursor-pointer'
          title='CakeResume'
        >
          <CakeResumeIcon size={30} color='white' />
        </a>
      </div>
    </section>
  );
};

export default Home;
