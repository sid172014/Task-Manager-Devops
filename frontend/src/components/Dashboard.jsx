import React, { act, useState } from "react";
import Cards from "./Cards";
import CreateTask from "./CreateTask";

const Dashboard = () => {


  const [createTaskDiv, setCreateTaskDiv] = useState("hidden");
  const [refetchTasks,setRefetchTasks] = useState(false);
  
  return (
    <>
    <div className="h-screen w-full dark:bg-gray-900">
      <Cards home={"false"} setRefetchTasks={setRefetchTasks} tab={"Dashboard"}  refetchTasks={refetchTasks} setCreateTaskDiv={setCreateTaskDiv}></Cards>
      <CreateTask setRefetchTasks={setRefetchTasks} createTaskDiv={createTaskDiv} setCreateTaskDiv={setCreateTaskDiv}></CreateTask>
    </div>
    </>
  );
};

export default Dashboard;
