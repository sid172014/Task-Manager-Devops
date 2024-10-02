import React, { useState } from 'react'
import {ChevronLast, ChevronFirst, MoreVertical} from 'lucide-react'

const Sidebar = ({children}) => {

    const [expanded,setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <h1  className='text-3xl font-extrabold w-full text-center' >Tasky</h1>
                <button onClick={() => {
                    setExpanded(curr => !curr);
                }} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    {expanded ? <ChevronFirst></ChevronFirst> : <ChevronLast></ChevronLast>}
                </button>
            </div>

            <ul className='flex-1 px-3'>
                {children}
            </ul>


            <div className='border-t flex px-3'>
                <img src='' alt='' className='w-10 h-10 rounded-md'></img>
                <div className='flex justify-between items-center w-52 ml-3'>
                    <div className='leading-4'>
                        <h4 className='font-semibold'> John Doe</h4>
                        <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
                    </div>
                    <MoreVertical size={20}></MoreVertical>
                </div>
            </div>
        </nav>
    </aside>
  )
}

const SidebarItem = ({icon,text,activeTab,alert,onClick}) => {
    

    return (
        <li onClick={onClick}  className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${activeTab == text ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className='w-52 ml-3'>{text}</span>
            {alert && (<div className='absolute right-2 w-2 h-2 rounded bg-indigo-400'></div>)}
        </li>
    );
}

export default Sidebar;

export {SidebarItem}