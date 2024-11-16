import React from "react";
import Card from "./Card";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = ({setCreateTaskDiv}) => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-4 p-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <div className="dark:bg-white col-span-1 hover:scale-105 transition-all duration-300">
          <button onClick={() => {
            setCreateTaskDiv("fixed");
          }} className="w-full h-full flex flex-col items-center justify-center">
            <IoIosAddCircleOutline className="text-5xl"></IoIosAddCircleOutline>
            <h1 className='text-2xl font-semibold'>Add Task</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
