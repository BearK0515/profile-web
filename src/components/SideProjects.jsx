import React from "react";
import petsStore from "../assets/images/side-projects/pets-store.png";
import sideProjects from "../constants/sideProjects";

const SideProjects = ({ setIsOpenSideProjectModal }) => {
  return (
    <section id="sideProjects" className='flex flex-col items-center w-full h-full py-8 text-4xl font-bold laptop:text-[68px] laptop:leading-[68px] '>
      <div
        className=' flex justify-center py-6'
        onClick={() => console.log(sideProjects)}
      >
        SIDE PROJECTS
      </div>
      <hr className='title-bottom bg-black' />
      <div className='flex flex-col max-w-6xl mx-auto laptop:grid laptop:grid-cols-3 laptop:w-3/5'>
        {sideProjects?.map(({ img, title, content, website }) => (
          <SideProject
            sideProjectImg={petsStore}
            title={title}
            content={content}
            website={website}
            setIsOpenSideProjectModal={setIsOpenSideProjectModal}
          />
        ))}
      </div>
    </section>
  );
};

const SideProject = ({
  sideProjectImg,
  title,
  content,
  website,
  setIsOpenSideProjectModal,
}) => {
  return (
    <div className=' relative flex justify-center items-center '>
      <div
        className='absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center border-2 border-transparent text-white font-normal tracking-wider bg-black/50 pt-4 opacity-0 hover:opacity-100 duration-700 cursor-pointer '
        onClick={() => {
          setIsOpenSideProjectModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <h3 className=' text-xl '>{title}</h3>
        <div className=' w-4/5 text-base text-left overflow-hidden'>
          {content.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
      <img src={sideProjectImg} alt='' className='' />
    </div>
  );
};

export default SideProjects;
