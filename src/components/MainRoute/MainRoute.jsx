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
import ProductDetail from '../../Pages/ProductDetailPage/ProductDetail'
import Error from '../../Pages/ErrorPage/Error'

const MainRoute = () => {
  return (
    <div>
        <Routes> 
            {/* home */}
            <Route path='/' element={<Home />} />  
            {/* about */} 
            <Route path='/about' element={<About />} />  
            {/* signin Page */}
            <Route path='/signup' element={<Singup />} />    
             {/* Product Page */}
            <Route path='/delhi' element={<Delhi />} />  
            <Route path='/bangalore' element={<Bangalore />} />
            <Route path='/gurugram' element={<Gurugram />} />   
            <Route path='/mumbai' element={<Mumbai />} />   
            <Route path='/noida' element={<Noida />} />  
            <Route path='/pune' element={<Pune />} />   

            {/* Product detail page */}
            <Route path='/delhi/:id' element={<ProductDetail />} />  
            <Route path='/bangalore/:id' element={<ProductDetail />} />
            <Route path='/gurugram/:id' element={<ProductDetail />} />   
            <Route path='/mumbai/:id' element={<ProductDetail />} />   
            <Route path='/noida/:id' element={<ProductDetail />} />  
            <Route path='/pune/:id' element={<ProductDetail />} />   

            <Route path='*' element={<Error />} /> 

        </Routes>
    </div>
  )
}

export default MainRoute