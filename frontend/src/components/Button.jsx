import React from 'react'

const Button = ({buttonText,onClick}) => {
  return (
    <button onClick={onClick}  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{buttonText}</button>
  )
}

export default Button