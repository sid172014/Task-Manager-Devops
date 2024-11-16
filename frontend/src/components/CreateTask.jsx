import React from "react";
import { IoIosClose } from "react-icons/io";

const CreateTask = ({createTaskDiv,setCreateTaskDiv}) => {
  return (
    <>
      <div className={` ${createTaskDiv} flex flex-col items-center justify-center fixed top-0 left-0 bg-gray-800 opacity-80  h-screen w-full text-white`}></div>
      {/* Creating two layers because of opacity issues */}
      <div className={`${createTaskDiv} flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-full text-white`}>
        <div className="w-3/6 h-[50vh] dark:bg-gray-900 p-3 flex flex-col gap-2">
            <div className="flex w-full justify-end items-end">
                <button onClick={() => {
                    setCreateTaskDiv("hidden");
                }} className="text-3xl"><IoIosClose /></button>
            </div>
            <input className="bg-white p-3 w-full text-black rounded-md" placeholder="Title"></input>
            <textarea className="w-full h-[100%] p-3 text-black rounded-md" placeholder="Description"></textarea>
            <div className="flex items-center justify-center">
            <button className="p-3 dark:bg-green-500 text-black w-[50%] rounded-md ">Submit</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;