import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import Button from "./Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Box = ({ headingText, subheading, linkText, buttonText, link }) => { 
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  // Handling user input
  const handleUserInfo = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Handling button click
  const handleButtonClick = async () => {
    console.log(import.meta.env.VITE_USER_URL)

    if (window.location.pathname === "/") {
      // Signup Axios Request

      try{
        const response = await axios.post(
          `${import.meta.env.VITE_USER_URL}/signup`,
          userInfo
        );
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          navigate('/home');
        },2000);
      } catch (e) {
        console.log(e);
        toast.error(e.response.data.error);
      }
      
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_USER_URL}/signin`,
          userInfo
        );

        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          navigate('/home');
        },2000);
      } catch (e) {
        console.log(e);
        toast.error(e.response.data.error);
      }
    }
  };

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
      <div className="p-6 mx-8 w-full rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-extrabold text-center underline">
            Task Manager
          </h1>
          <h1 className="text-2xl font-extrabold">{headingText}</h1>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            {subheading}{" "}
            <a
              href={link}
              className="font-medium text-blue-600 hover:underline"
            >
              {linkText}
            </a>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          <InputBox
            onChange={handleUserInfo}
            placeholder={"name@gmail.com"}
            label={"Your Email"}
            name={"email"}
          ></InputBox>
          <InputBox
            onChange={handleUserInfo}
            placeholder={"******"}
            label={"Password"}
            name={"password"}
          ></InputBox>
          <Button buttonText={buttonText} onClick={handleButtonClick}></Button>
        </div>
      </div>
    </>
  );
};

export default Box;
