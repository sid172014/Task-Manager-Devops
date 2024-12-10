import React, { useEffect, useState } from "react";
import Card from "./Card";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Cards = ({ setCreateTaskDiv, refetchTasks,setRefetchTasks, home, tab }) => {
  const [fetchTasks, setFetchTasks] = useState([]);
  // Fetching All Tasks that belong to a particular user
  useEffect(() => {
    const fetchAllTasks = async () => {
      if (tab === "Dashboard") {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/task/allTasks",
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data);
          setFetchTasks(response.data);
        } catch (e) {
          toast.error(e.message);
          console.log(e);
        }
      }else if(tab === "Important"){
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/task/impTasks",
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data);
          setFetchTasks(response.data);
        } catch (e) {
          toast.error(e.message);
          console.log(e);
        }
      }else if(tab === "Completed"){
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/task/completedTasks",
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data);
          setFetchTasks(response.data);
        } catch (e) {
          toast.error(e.message);
          console.log(e);
        }
      }else if(tab === "Incomplete"){
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/task/incompletedTasks",
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data);
          setFetchTasks(response.data);
        } catch (e) {
          toast.error(e.message);
          console.log(e);
        }
      }
    };
    fetchAllTasks();
  }, [refetchTasks]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-full grid grid-cols-3 gap-4 p-4">
        {fetchTasks.length == 0
          ? null
          : fetchTasks.map((item, index) => {
              return (
                <Card
                  key={index}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  important={item.important}
                  setRefetchTasks={setRefetchTasks}
                ></Card>
              );
            })}
        <div
          className={`dark:bg-white col-span-1 hover:scale-105 transition-all duration-300 ${
            home === "false" ? null : "hidden"
          }`}
        >
          <button
            onClick={() => {
              setCreateTaskDiv("fixed");
            }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <IoIosAddCircleOutline className="text-5xl"></IoIosAddCircleOutline>
            <h1 className="text-2xl font-semibold">Add Task</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
