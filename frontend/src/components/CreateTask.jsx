import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const CreateTask = ({
  createTaskDiv,
  setCreateTaskDiv,
  setRefetchTasks,
  data
}) => {

  const [inputTask, setInputTask] = useState({
    title: "",
    description: "",
    completed: false,
    important: false,
  });

  useEffect(() => {

    setInputTask({
      title: data.title,
      description: data.description,
      completed: data.completed,
      important: data.important,
    });

  }, [data]);

  const handleInputTexts = (e) => {
    e.preventDefault();
    setInputTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleButtonClick = async (e) => {
    
    try {
      if(data.id === ""){
      const response = await axios.post(
        `${import.meta.env.VITE_TASK_URL}/create`,
        inputTask,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      toast.success(response.data.message);
      }else{
        const response = await axios.put(`${import.meta.env.VITE_TASK_URL}/updateTask/${data.id}`,
          {
            title : inputTask.title,
            description : inputTask.description
          },
          {
            headers: {
              Authorization: localStorage.getItem("token")
            },
          }
        );
        toast.success("Successfully updated Task!");

      } 
      setCreateTaskDiv("hidden");
      setRefetchTasks((prev) => {
        return !prev;
      });

    } catch (e) {
      toast.error(e);
    }
}

  return (
    <>
      <div
        className={` ${createTaskDiv} flex flex-col items-center justify-center fixed top-0 left-0 bg-gray-800 opacity-80  h-screen w-full text-white`}
      ></div>
      {/* Creating two layers because of opacity issues */}
      <div
        className={`${createTaskDiv} flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-full text-white`}
      >
        <div className="w-3/6 h-[50vh] dark:bg-gray-900 p-3 flex flex-col gap-2">
          <div className="flex w-full justify-end items-end">
            <button
              onClick={() => {
                setInputTask({
                  title: "",
                  description: "",
                  completed: false,
                  important: false,
                });
                setCreateTaskDiv("hidden");
              }}
              className="text-3xl"
            >
              <IoIosClose />
            </button>
          </div>
          <input
            name="title"
            onChange={handleInputTexts}
            value={inputTask.title}
            className="bg-white p-3 w-full text-black rounded-md"
            placeholder="Title"
          ></input>
          <textarea
            name="description"
            onChange={handleInputTexts}
            value={inputTask.description}
            className="w-full h-[100%] p-3 text-black rounded-md"
            placeholder="Description"
          ></textarea>
          <div className="flex items-center justify-center">
            <button
              onClick={handleButtonClick}
              className="p-3 dark:bg-green-500 text-black w-[50%] rounded-md "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
