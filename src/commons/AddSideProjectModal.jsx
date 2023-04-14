import React, { useState } from "react";
import { useImage } from "../hooks/useImage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../utils/firebase";

const AddSideProjectModal = ({
  isOpenAddSideProjectModal,
  setIsOpenAddSideProjectModal,
}) => {
  const { image, handleUpload, handleRemove, inputRef } = useImage();
  const [title, setTitle] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    const text = event.target.value;
    const paragraphs = text.split("\n");
    setParagraphs(paragraphs);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      const imageRef = ref(storage, `sideProjects/${image.file.name}`);
      const uploadTask = await uploadBytesResumable(imageRef, image.file);
      uploadTask.task.on(
        "state_changed",
        (snapshot) => {
          console.log("Uploaded a blob or file!");
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await getDownloadURL(
            ref(storage, `sideProjects/${image.file.name}`)
          );
          await addDoc(collection(db, "sideProjecs"), {
            title: title,
            url: url,
            description: paragraphs,
          });
          setTitle("");
          setTextareaValue("");
          setParagraphs([]);
          setProgress(0);
          setIsOpenAddSideProjectModal(false);
        }
      );
    }
  };

  return (
    <>
      <div
        className={`backdrop bg-black/30 z-30 ${
          isOpenAddSideProjectModal ? "visible" : "invisible"
        }`}
        onClick={() => {
          setIsOpenAddSideProjectModal(false);
          document.body.style.overflow = "auto";
        }}
      ></div>
      <div className=' w-2/3 laptop:w-3/4 max-w-3xl flex flex-col laptop:flex-row items-center laptop:items-start gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-30'>
        <div className='w-full flex flex-col gap-6'>
          <div
            className='aspect-[3/4] bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${image?.url})` }}
            onClick={handleRemove}
          ></div>
          <label
            htmlFor='side-project-cover'
            className='h-12 w-full text-center mt-auto mx-auto text-gray-500 bg-blue-200 p-4 cursor-pointer rounded-md shadow-md'
          >
            上傳圖片
            <input
              type='file'
              ref={inputRef}
              className='hidden'
              id='side-project-cover'
              onChange={handleUpload}
            />
          </label>
        </div>
        <div className='w-full flex flex-col justify-between gap-6'>
          <input
            type='text'
            className='h-12 bg-blue-200 p-4 rounded-md shadow-md outline-none'
            placeholder='作品名稱'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=''
            id=''
            cols='10'
            rows='3'
            className=' p-4 bg-blue-200 rounded-md outline-none'
            placeholder='作品簡介'
            value={textareaValue}
            onChange={handleTextareaChange}
          ></textarea>
          <button
            className='bg-blue-500 rounded-md text-white p-2'
            onClick={handleSubmit}
          >
            送出
          </button>
          <span>{progress}%</span>
        </div>
      </div>
    </>
  );
};

export default AddSideProjectModal;
