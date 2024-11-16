import React, { useRef, useState } from "react";
import { CiEdit, CiHeart, CiTrash } from "react-icons/ci";


const Card = () => {

  const [completeButton, setCompleteButton] = useState("Incomplete");

  const handleClick = (e) => {
    setCompleteButton((prev) =>{
      if(prev == 'Incomplete'){
        return "Complete";
      }else{
        return "Incomplete";
      }
    })
  }
 

  return (
    <div className="dark:bg-white col-span-1 p-3">
      <h1 className="font-bold text-2xl">Hello world</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        doloremque totam error facilis consequatur numquam eos dolorem quidem,
        molestias eveniet laboriosam rerum odio asperiores laborum iure? Labore
        aliquam error voluptas!
      </div>

      {/* Flex and put all the icons and objects in the same row */}
      <div className="flex flex-row mt-4 gap-2 w-full">
        <div>
          <button className={`p-3 ${completeButton === "Incomplete" ? "dark:bg-gray-900 ": "dark:bg-green-500 "} text-white rounded-md`} onClick={handleClick}>
            {completeButton}
          </button>
        </div>
        <div className="text-3xl flex items-center ">
          <button><CiHeart /></button>
        </div>
        <div className='text-3xl flex items-center bg-white'>
          <button><CiEdit /></button>
        </div>
        <div className="text-2xl flex items-center bg-white">
          <button><CiTrash /></button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Card;
