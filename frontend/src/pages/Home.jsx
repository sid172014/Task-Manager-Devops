import React, { act, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import ImportantTasks from "../components/ImportantTasks";
import CompletedTasks from "../components/CompletedTasks";
import IncompletedTasks from "../components/IncompletedTasks";

const Home = () => {
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });


  const [activeTab, setActiveTab] = useState("Dashboard");
  const [renederElement,setRenderElement] = useState(<Dashboard ></Dashboard>);

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar>
            <SidebarItem icon={""} text={"Dashboard"} onClick={() => {
              setActiveTab("Dashboard");
              setRenderElement(<Dashboard ></Dashboard>);
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Important Tasks"} onClick={() => {
                setActiveTab("Important Tasks")
                setRenderElement(<ImportantTasks ></ImportantTasks>)
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Completed Tasks"} onClick={() => {
              setActiveTab("Completed Tasks")
              setRenderElement(<CompletedTasks></CompletedTasks>)
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem
              icon={""}
              text={"Incomplete Tasks"}
              onClick={() => {
                setActiveTab("Incomplete Tasks")
                setRenderElement(<IncompletedTasks></IncompletedTasks>)
              }}
              activeTab={activeTab}
            ></SidebarItem>
          </Sidebar>
        </div>

        <div className="col-span-4">{renederElement}</div>
      </div>
    </>
  );
};

export default Home;
