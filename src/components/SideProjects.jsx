import React from "react";
import petsStore from "../assets/images/side-projects/pets-store.png";

const SideProjects = () => {
  return (
    <section className='flex flex-col items-center w-full h-full py-8 text-4xl font-bold laptop:text-[68px] laptop:leading-[68px] '>
      <div className=' flex justify-center py-6'>SIDE PROJECTS</div>
      <hr className='title-bottom bg-black' />
      <div className='flex flex-col max-w-6xl mx-auto laptop:grid laptop:grid-cols-3 laptop:w-3/5'>
        <SideProject sideProjectImg={petsStore} />
      </div>
    </section>
  );
};

const SideProject = ({ sideProjectImg, title, content }) => {
  return (
    <div className=' relative flex justify-center items-center '>
      <div className=' absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center border-2 border-transparent text-white font-normal tracking-wider bg-black/50 pt-8 opacity-0 hover:opacity-100 duration-500 cursor-pointer '>
        <h3 className=' text-xl'>title</h3>
        <div className=' text-base'>content</div>
      </div>
      <img src={sideProjectImg} alt='' className='' />
    </div>
  );
};

export default SideProjects;
