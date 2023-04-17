import React from "react";

const AboutMe = () => {
  return (
    <section className='flex flex-col items-center max-w-6xl w-4/5 h-full bg-white dark:bg-gray-900 dark:text-white mx-auto my-8 text-4xl font-bold laptop:text-[68px] laptop:leading-[68px] laptop:w-3/5'>
      <div className=' flex justify-center py-6'>ABOUT ME</div>
      <hr className='title-bottom bg-black dark:bg-white' />
      <div className=' text-base px-10'>
        <h3 className='text-xl font-black'>【自我介紹】</h3>
        <span className=' block mb-4'>
          我是前端工程師，在Alpha
          camp完成所有前端課程，學習了網頁使用的HTML、CSS、Javascript，以及前端框架利器(React)，用RWD依版面需求切換、RESRful串接API、Git版本控制等前端必須技能。
        </span>
        <span className=' block mb-4'>
          過去做過食品研發、營養師、藥局等工作，都是需要溝通討論、表達想法的工作，對團隊溝通與合作更容易上手。
        </span>
        <h3 className='text-xl font-black'>【團隊合作經歷】</h3>
        <span className=' block mb-4'>
          完成課程也跟其他同期同學一起完成了前後分離專案，如twitter專案、寵物購物網。開發過程中，也會使用課程沒有教的技術Redux、第三方登入(google、Line)等，這些都需要另外爬文、尋找教學影片或是用ChatGPT尋找使用方法。
        </span>
        <span className=' block mb-4'>
          團隊合作需要面對大量溝通與配合，還要製作前置文件作業，過程用scrum方式開發，彼此可以有效掌握進度並且互相支援。
        </span>
        <h3 className='text-xl font-black'>【小作品開發】</h3>
        <span className=' block mb-4'>
          個人網站是自己一個人開發的作品，從UI樣式到功能發想，前置作業抓取圖片、任務清單、驗收標準等全部都需要自己來，單獨開發的速度相對快一點，便學習使用tailwind，後台功能使用firebase的登入、上傳圖片、上傳資料、讀取資料的功能。
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
