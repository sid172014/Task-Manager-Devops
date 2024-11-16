import React, { useState } from "react";
import Cards from "./Cards";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  const [createTaskDiv, setCreateTaskDiv] = useState("hidden");
  
  return (
    <>
    <div className="h-screen w-full dark:bg-gray-900">
      <Cards setCreateTaskDiv={setCreateTaskDiv}></Cards>
      <CreateTask createTaskDiv={createTaskDiv} setCreateTaskDiv={setCreateTaskDiv}></CreateTask>
    </div>
    </>
  );
};

export default Dashboard;
