import React, { useEffect } from 'react'
import Cards from './Cards';
import CreateTask from './CreateTask';
import { toast } from 'react-toastify';

const CompletedTasks = () => {
    
    useEffect(() => {
        toast.success("Loaded Completed Tasks !");
    }, []);


    return (
        <>
        <div className="h-screen w-full dark:bg-gray-900">
          <Cards tab={"Completed"} home={"true"}></Cards>
        </div>
        </>
    );
}

export default CompletedTasks