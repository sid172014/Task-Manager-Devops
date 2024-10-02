import React from 'react'

// Importing the Animation
import animation from './../assets/animation.json'

// Importing the Lottie package files
import Lottie from 'lottie-react'

// Importing Components
import Box from '../components/Box'

const Signin = () => {
  return (
    <div className='dark:bg-gray-900 h-screen mx-auto w-full text-white grid grid-cols-2'>
      <div className='col-span-1 flex justify-center items-center p-6'>
        <Box link={"/"} headingText={"Welcome back"} subheading={"Don't have an account?"} linkText={"Sign up"} buttonText={"Sign in"}></Box>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        {/* <div>Goes the GIF in here</div> */}
        <Lottie animationData={animation} loop={true}></Lottie>
      </div>
    </div>
  )
}

export default Signin