import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "@Firebase/auth";

const LoginModal = ({
  isLogin,
  setIsLogin,
  isOpenLoginModal,
  setIsOpenLoginModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      if (data.user.accessToken) {
        setIsOpenLoginModal(false);
        setIsLogin(true);
        return localStorage.setItem("isAuth", true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLogin) {
      setIsOpenLoginModal(false);
    }
  }, [isLogin]);

  return (
    <>
      {isLoading && (
        <h2 className=' h-screen w-screen flex justify-center items-center  bg-white text-5xl'>
          Loading...
        </h2>
      )}
      <div
        className={`backdrop bg-black/30 z-10 ${
          isOpenLoginModal ? "visible" : "invisible"
        }`}
        onClick={() => setIsOpenLoginModal(false)}
      ></div>
      <div className=' w-96 flex flex-col gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-10 z-10'>
        <h2 className=' text-center text-xl'>管理員登入</h2>
        <input
          type='text'
          className='h-12 bg-blue-200 p-4 rounded-md shadow-md outline-none'
          placeholder='請輸入信箱'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='h-12 bg-blue-200 p-4 rounded-md shadow-md outline-none'
          placeholder='請輸入密碼'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='bg-blue-500 rounded-md text-white p-2'
          onClick={handleSubmit}
        >
          登入
        </button>
      </div>
    </>
  );
};

export default LoginModal;
