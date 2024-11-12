import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [renederElement,setRenderElement] = useState(<Dashboard></Dashboard>);

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar>
            <SidebarItem icon={""} text={"Dashboard"} onClick={() => {
              setActiveTab("Dashboard");
              setRenderElement(<Dashboard></Dashboard>);
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"All Tasks"} onClick={() => {
                setActiveTab("All Tasks")
                setRenderElement(<div>All Tasks</div>)
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Important Tasks"} onClick={() => {
                setActiveTab("Important Tasks")
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Completed Tasks"} onClick={() => {
              setActiveTab("Completed Tasks")
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem
              icon={""}
              text={"Incomplete Tasks"}
              onClick={() => {
                setActiveTab("Incomplete Tasks")
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
