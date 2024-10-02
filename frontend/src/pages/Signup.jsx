import React from 'react'

// Importing the Animation
import animation from './../assets/animation.json'

// Importing the Lottie package files
import Lottie from 'lottie-react'

// Importing Components
import Box from '../components/Box'

const Signup = () => {
  return (
    <div className='dark:bg-gray-900 h-screen mx-auto w-full text-white grid grid-cols-2'>
      <div className='col-span-1 flex justify-center items-center p-6'>
        <Box link={'/login'} headingText={"Register Here"} subheading={"Already have an Account ?"} linkText={"Sign in"} buttonText={"Sign up"}></Box>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        {/* <div>Goes the GIF in here</div> */}
        <Lottie animationData={animation} loop={true}></Lottie>
      </div>
    </div>
  )
}

export default Signup