import React from "react";
import { CakeResumeIcon, GithubIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className='h-32 flex flex-col gap-4 items-center justify-center bg-basic-black text-white'>
      <div className=' w-full  flex justify-center items-center gap-4 '>
        <GithubIcon size={30} color='white' className=' cursor-pointer' />
        <CakeResumeIcon size={30} color='white' className=' cursor-pointer' />
      </div>
      <span>© 2023 by BearK. Powered and secured by happy</span>
    </footer>
  );
};

export default Footer;
