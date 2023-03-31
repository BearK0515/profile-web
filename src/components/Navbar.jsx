import React, { useEffect, useState } from "react";
import { CakeResumeIcon, GithubIcon, UserIcon } from "../assets/icons";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToogleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    if (!isOpenMenu) {
      document.body.style.overflow = "hidden";
    }
    if (isOpenMenu) {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860) {
        setIsOpenMenu(true);
      } else {
        setIsOpenMenu(false);
      }
    };
    if (window.innerWidth >= 860){
      setIsOpenMenu(true);
    }
      window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='flex flex-row-reverse bg-basic-black p-6'>
        <div
          className=' w-6 h-6 z-20 flex items-center cursor-pointer laptop:hidden '
          onClick={handleToogleMenu}
        >
          <div
            className={`menu relative before:content before:-top-2 before:transform ${
              isOpenMenu
                ? "before:-rotate-45 before:translate-y-2 before:transition-all before:duration-300"
                : ""
            } after:content after:top-2 after:transform ${
              isOpenMenu
                ? "after:rotate-45 after:-translate-y-2 after:transition-all after:duration-300"
                : ""
            }`}
            style={{ width: isOpenMenu ? "0" : "" }}
          ></div>
        </div>
        <div
          className={`w-screen h-screen flex flex-col items-center gap-4 bg-basic-black p-6 fixed top-0 bottom-0 left-0 right-0  z-10 transition-all duration-300 ease-in-out${
            isOpenMenu ? "" : "transform translate-x-full overflow-hidden"
          }
          laptop:flex-row laptop:h-6 laptop:justify-center laptop:gap-6`}
        >
          <div className='menu-btn normal-case flex items-center gap-6 laptop:gap-2 laptop:order-last laptop:flex-row-reverse'>
            <UserIcon size={30} />
            Log in
          </div>
          <div className='menu-btn'>Home</div>
          <div className='menu-btn'>Skills</div>
          <div className='menu-btn'>Side Projects</div>
          <div className='menu-btn'>About Me</div>
          <div className='menu-btn'>Work Experience</div>
          <div className='flex gap-4'>
            <GithubIcon size={30} color='white' className=' cursor-pointer' />
            <CakeResumeIcon
              size={30}
              color='white'
              className=' cursor-pointer'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
