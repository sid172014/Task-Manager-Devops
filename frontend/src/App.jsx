// Importing Pages and components
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'

function App() {
  
  return (
    <div className='relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Signin></Signin>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
