import React from "react";
import { CakeResumeIcon, GithubIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className='h-32 flex flex-col gap-4 items-center justify-center bg-basic-black text-white'>
      <div className=' w-full  flex justify-center items-center gap-4 '>
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
      <span>© 2023 by BearK. Powered and secured by happy</span>
    </footer>
  );
};

export default Footer;
