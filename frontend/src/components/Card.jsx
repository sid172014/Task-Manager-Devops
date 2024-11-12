import React from "react";
import { CiEdit, CiHeart, CiTrash } from "react-icons/ci";

const Card = () => {
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
          <button className="p-3 dark:bg-gray-900 text-white rounded-md">
            Incomplete
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
