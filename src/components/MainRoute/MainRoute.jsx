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
import Login from '../../Pages/Login/Login'
import Construction from '../../Pages/CoporateServices/ConstructionManagement/Construction'
import PropertyMarketing from '../../Pages/CoporateServices/PropertyMarkiting/PropertyMarketing'
import Buy from '../../Pages/buy/Buy'
import Acquisition from '../../Pages/CoporateServices/Acquisition/Acquisition'
import Partner from '../../Pages/CoporateServices/PartnerWithUs/Partner' 
import Consulting from "../../Pages/CoporateServices/Consulting/Consulting"
import MarketResearch from '../../Pages/CoporateServices/MarketResearch/MarketResearch'
import PortfolioPlaning from '../../Pages/CoporateServices/Pertfolio/PortfolioPlaning'
import UsaRealState from '../../Pages/CoporateServices/UsaRealstate/UsaRealState'
 
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
        {/* Login Page */}
        <Route path='/login' element={<Login />} />
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

        {/* buy rent sale */} 
        <Route path='/buy' element={<Buy />} />  
        {/* <Route path='/rent' element={< />} />   */}
        {/* <Route path='/sale' element={<Buy />} />   */}

        <Route path='/Construction_Management' element={<Construction />} />
        <Route path='/Property_Marketing' element={<PropertyMarketing />} /> 
        <Route path='/partner' element={<Partner />} /> 
        <Route path='/acquisitions_and_dispositions' element={<Acquisition />} />  
        <Route path='/consulting' element={<Consulting />} /> 
        <Route path='/market_research' element={<MarketResearch />} />   
        <Route path='/portfolio_planning' element={<PortfolioPlaning />} /> 
        <Route path='/usa_real_state' element={<UsaRealState />} /> 

        <Route path='*' element={<Error />} />

      </Routes>
    </div>
  )
}

export default MainRoute