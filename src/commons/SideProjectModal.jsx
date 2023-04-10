import React from "react";
import { CancleIcon } from "../assets/icons";
import petsStore from "../assets/images/side-projects/pets-store.png";
import sideProjects from "../constants/sideProjects";
const SideProjectModal = ({
  img,
  title,
  content,
  isOpenSideProjectModal,
  setIsOpenSideProjectModal,
}) => {
  return (
    <>
      <div
        className={`backdrop bg-black/30 z-10 ${
          isOpenSideProjectModal ? "visible" : "invisible"
        }`}
      ></div>
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 m-auto w-full h-[calc(100%-64px)] flex flex-col items-center bg-white dark:bg-gray-900 my-16 laptop:w-4/5 laptop:h-4/5 laptop:flex-row laptop:pt-0 ${
          isOpenSideProjectModal
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-10 opacity-0 invisible"
        } ease-linear duration-300 z-10`}
      >
        <div className=' relative w-full h-[50%] py-4 overflow-hidden laptop:max-w-[50%] laptop:h-full flex justify-center items-center'>
          <img
            src={petsStore}
            alt=''
            className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full laptop:max-h-full'
          />
        </div>
        <div className='flex flex-col items-center py-4 dark:text-white laptop:w-full laptop:h-full laptop:justify-start'>
          <h3
            className='text-xl font-bold pb-2'
          >
            {sideProjects[0].title}
          </h3>
          <div className=' w-4/5 mx-auto text-base'>
            {sideProjects[0].content.map((item,index)=>{return (<p key={index}>{item}</p>)})}
          </div>
        </div>
        <button
          className='absolute top-[-28px] right-6 laptop:right-0 laptop:top-[-32px]'
          onClick={() => {
            setIsOpenSideProjectModal(false),
              (document.body.style.overflow = "auto");
          }}
        >
          <CancleIcon color='white' size={24} />
        </button>
      </div>
    </>
  );
};

export default SideProjectModal;
