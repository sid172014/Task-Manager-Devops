import React, { act, useState } from "react";
import Cards from "./Cards";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  
  

  const [createTaskDiv, setCreateTaskDiv] = useState("hidden");
  const [refetchTasks,setRefetchTasks] = useState(false);
  const [data,setData] = useState({
    id:"",
    title:"",
    description:"",
    completed : false,
    important : false
  });
  
  return (
    <>
    <div className="h-screen w-full dark:bg-gray-900">
      <Cards setData={setData} home={"false"} setRefetchTasks={setRefetchTasks} tab={"Dashboard"}  refetchTasks={refetchTasks} setCreateTaskDiv={setCreateTaskDiv}></Cards>
      <CreateTask data={data} setRefetchTasks={setRefetchTasks} createTaskDiv={createTaskDiv} setCreateTaskDiv={setCreateTaskDiv}></CreateTask>
    </div>
    </>
  );
};

export default Dashboard;
