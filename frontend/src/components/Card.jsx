import React, { useEffect, useRef, useState } from "react";
import { CiEdit, CiHeart, CiTrash } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import axios from 'axios';
import { toast } from "react-toastify";

const Card = ({title,description,id,completed,important,setRefetchTasks,setCreateTaskDiv,setData}) => {

  const [completeButton, setCompleteButton] = useState(completed=== true ? "Complete" : "Incomplete");
  const [importantButton, setImpotantButton] = useState(important === true ? true : false);


  const handleClick = async (e) => {
 
    const requestString = `http://localhost:3000/api/v1/task/completeTask/${id}`
    const response = await axios.get(
      requestString,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

    console.log(response);
    setCompleteButton((prev) =>{
      if(prev == 'Incomplete'){
        return "Complete";
      }else{
        return "Incomplete";
      }
    })
  };


  // Setting important Click buttons
  const handleImportantClick = async () => {
    try{
      const requestString = `http://localhost:3000/api/v1/task/importantTask/${id}`;
      const response = await axios.get(requestString,{
        headers : {
          Authorization: localStorage.getItem("token"),
        }
      });
      console.log(response.data);
      
      setImpotantButton((prev) => {
        return !prev;
      })
    }catch(e){
      console.log(e);
    }
  };

  
  // Deleting a particular Task
  const handleDeleteClick = async () => {
    try{
      const requestString = `http://localhost:3000/api/v1/task/deleteTask/${id}`;
      const response = await axios.delete(requestString, {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      })
      
      setRefetchTasks((prev) => {
        return !prev;
      });
      console.log(response);
      toast.success("Successfully deleted Task!")
    }catch(e){
      console.log(e);  
    }
  };


  // Handling Edit Click
  const handleEditClick = () => {
    setData({
      id,
      title,
      description,
      completed,
      important
    });
  };
 

  return (
    <div className="dark:bg-white col-span-1 p-3">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className='p-2'>
        {description}
      </div>

      {/* Flex and put all the icons and objects in the same row */}
      <div className="flex flex-row mt-4 gap-2 w-full">
        <div>
          <button className={`p-3 ${completeButton === "Incomplete" ? "dark:bg-gray-900 ": "dark:bg-green-500 "} text-white rounded-md`} onClick={handleClick}>
            {completeButton}
          </button>
        </div>
        <div className="text-3xl flex items-center ">
          <button onClick={handleImportantClick}>{importantButton === true ? <FaHeart></FaHeart> : <CiHeart></CiHeart>}</button>
        </div>
        <div className='text-3xl flex items-center bg-white'>
          <button onClick={handleEditClick}><CiEdit /></button>
        </div>
        <div className="text-2xl flex items-center bg-white">
          <button onClick={handleDeleteClick}><CiTrash /></button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Card;
