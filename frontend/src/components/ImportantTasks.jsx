import React, { useEffect } from 'react'
import Cards from './Cards';
import CreateTask from './CreateTask';
import { toast } from 'react-toastify';

const ImportantTasks = () => {
    
    useEffect(() => {
        toast.success("Loaded Important Tasks !");
    }, []);


    return (
        <>
        <div className="h-screen w-full dark:bg-gray-900">
          <Cards tab={"Important"} home={"true"}></Cards>
        </div>
        </>
    );
}

export default ImportantTasks