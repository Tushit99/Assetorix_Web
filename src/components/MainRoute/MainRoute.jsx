import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Singup from '../../Pages/Sign/Singup' 
import Delhi from '../../Pages/AllPlaces/Delhi'
import Mumbai from '../../Pages/AllPlaces/Mumbai' 
import Noida from '../../Pages/AllPlaces/Noida'
import Pune from '../../Pages/AllPlaces/Pune'
import Bangalore from '../../Pages/AllPlaces/Bangalore'
import Gurugram from '../../Pages/AllPlaces/Gurugram'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/signup' element={<Singup />} />     
            <Route path='/delhi' element={<Delhi />} />  
            <Route path='/bangalore' element={<Bangalore />} />
            <Route path='/gurugram' element={<Gurugram />} />   
            <Route path='/mumbai' element={<Mumbai />} />   
            <Route path='/noida' element={<Noida />} />  
            <Route path='/pune' element={<Pune />} />  
        </Routes>
    </div>
  )
}

export default MainRoute