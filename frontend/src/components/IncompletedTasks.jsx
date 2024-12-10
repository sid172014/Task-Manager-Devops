import React, { useEffect } from 'react'
import Cards from './Cards';
import CreateTask from './CreateTask';
import { toast } from 'react-toastify';

const IncompletedTasks = () => {
    
    useEffect(() => {
        toast.success("Loaded In-Completed Tasks !");
    }, []);


    return (
        <>
        <div className="h-screen w-full dark:bg-gray-900">
          <Cards tab={"Incomplete"} home={"true"}></Cards>
        </div>
        </>
    );
}

export default IncompletedTasks