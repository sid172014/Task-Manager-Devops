import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar>
            <SidebarItem icon={""} text={"Dashboard"} onClick={() => {
              setActiveTab("Dashboard");
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"All Tasks"} onClick={() => {
                setActiveTab("All Tasks")
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Important Tasks"} onClick={() => {
                setActiveTab("Important Tasks")
            }} activeTab={activeTab}></SidebarItem>
            <SidebarItem icon={""} text={"Completed Tasks"}></SidebarItem>
            <SidebarItem
              icon={""}
              text={"Incomplete Tasks"}
              alert
            ></SidebarItem>
          </Sidebar>
        </div>

        <div className="col-span-4">{activeTab}</div>
      </div>
    </>
  );
};

export default Home;
