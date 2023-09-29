import React, { useEffect, useState } from 'react'
import FlatAppartmentUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/FlatAppartment/FlatAppartment';
import IndependentHouseUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/IndependentHouse/IndependentHouse';
import CommercialShowroomUpdate from "./PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Retail/CommercialShowroom/CommercialShowroom";
import CommercialShopUpdate from "./PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Retail/CommercialShop/CommercialShop";
import ColdStorageUpdate from "./PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Storage/ColdStorage/ColdStorage"
import ReadyToMoveUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/OfficeSetup/ReadyToMove/ReadyToMove';
import IndependentbuilderUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/Independentbuilder/Independentbuilder';
import ServicedApartmentUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/ServicedApartment/ServicedApartment';
import RKStudioUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/RKStudio/RKStudio';
import FarmHouseUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/FarmHouse/FarmHouse';
import PlotLandUpdate from './PropertyUpdateForm/SellUpdateForm/ResidentialUpdate/PlotLand/PlotLand';
import CoWorkingspaceUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/OfficeSetup/CoWorkingspace/CoWorkingspace';
import BareshellspaceUpdate from "./PropertyUpdateForm/SellUpdateForm/CommercialUpdate/OfficeSetup/Bareshellspace/Bareshellspace";
import WareHouseUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Storage/WareHouse/WareHouse';
import CommercialLandUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/PlotLandCommercial/CommercialLand/CommercialLand';
import AgricalturalFarmUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/PlotLandCommercial/AgricalturalFarm/AgricalturalFarm';
import IndustrialLandUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/PlotLandCommercial/IndustrialLand/IndustrialLand';
import ManufactureUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Industry/Manufacture/Manufacture';
import FactoryUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Industry/Factory/Factory';
import GuestBanquetUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Hospitality/GuestBanquet/GuestBanquet';
import HotelResortUpdate from './PropertyUpdateForm/SellUpdateForm/CommercialUpdate/Hospitality/HotelResort/HotelResort';
import FlatApartmentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/FlatApartment';
import IndependentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/Independent';
import IndependentBuilderRentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/IndependentBuilder';
import ServicedApartmentRentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/ServicedApartmentRent';
import StudioApartmentRentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/StudioApartmentRent';
import FarmhouseRentUpdate from './PropertyUpdateForm/RentUpdateForm/ResidentialUpdate/FarmhouseRent';
import GuestBanquetRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/Hospitality/GuestBanquet/GuestBanquet';
import HotelResortRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/Hospitality/HotelResort/HotelResort';
import ManufactureRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/Industry/Manufacture/ManufactureRent';
import FactoryRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/Industry/Factory/FactoryRent';
import BareShellUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/OfficeRent/BareShellOffice/BareShell';
import ReadyMoveUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/OfficeRent/ReadyMove/ReadyMove';
import CommercialLandRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/PlotLand/CommercialLandRent/CommercialLandRent';
import AgriculturalLandRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/PlotLand/AgriculturalLand/AgriculturalLandRent';
import IndustrialLandRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/PlotLand/IndustrialLand/IndustrialLand';
import CommercialShopRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/RetailRent/CommercialShopRent/CommercialShopRent';
import CommercialShowRoomRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/RetailRent/CommercialShowRoomRent/CommercialShowRoomRent';
import WareHouseRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/StorageRent/WareHouseRent/WareHouse';
import ColdStorageRentUpdate from './PropertyUpdateForm/RentUpdateForm/CommercialUpdate/StorageRent/ColdStorageRent/ColdStorageRent';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Listings = () => { 
  const {productID} = useParams(); 
  const [looking, setLooking] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [other, setOther] = useState("");

  const editBox = async () =>{
    await axios.get(`${process.env.REACT_APP_URL}/property`).then((e)=>{
      console.log(e.data.data); 
      let dt = e.data.data[0];  
      setGroup(dt.propertyGroup);  
      setType(dt.propertyType);  
      setLooking(dt.lookingFor);  

      if(dt.propertyType=="office"){
        setOther(dt.officeType); 
      } 
      else if(dt.propertyType=="Storage"){
        setOther(dt.storageType); 
      }

    })
  }

  useEffect(()=>{
     editBox(); 
  },[]) 


  return (
    <div>
      {/* ============================== sell -=- Residential ==============================  */}

      {(looking == "Sell" && group == "Residential" && type == "Flat / Apartment") ? <FlatAppartmentUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "Independent House / Villa") ? <IndependentHouseUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "Independent / Builder Floor") ? <IndependentbuilderUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "Serviced Apartment") ? <ServicedApartmentUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "1RK / Studio Apartment") ? <RKStudioUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "Farmhouse") ? <FarmHouseUpdate /> : ""}

      {(looking == "Sell" && group == "Residential" && type == "Plot / Land") ? <PlotLandUpdate /> : ""}

      {/* ============================== sell -=- commercial ==============================  */}
      {/* -------- office -------- */}
      {(looking == "Sell" && group == "Commercial" && type == "Office" && other == "Ready to move office space") ? <ReadyToMoveUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Office" && other == "Co-working office space") ? <CoWorkingspaceUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Office" && other == "Bare shell office space") ? <BareshellspaceUpdate /> : ""}

      {/* -------- Reatial -------- */}
      {(looking == "Sell" && group == "Commercial" && type == "Retail" && other == "Commercial Shops") ? <CommercialShopUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Retail" && other == "Commercial Showrooms") ? <CommercialShowroomUpdate /> : ""}

      {/* ------------ Storage ----------- */}
      {(looking == "Sell" && group == "Commercial" && type == "Storage" && other == "Ware House") ? <WareHouseUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Storage" && other == "Cold Storage") ? <ColdStorageUpdate /> : ""}

      {/* ------------- Plot / Land ------------ */}
      {(looking == "Sell" && group == "Commercial" && type == "Plot / Land" && other == "Commercial Land / lnst. Land") ? <CommercialLandUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Plot / Land" && other == "Agricultural Land / Farm Land") ? <AgricalturalFarmUpdate /> : ""}

      {(looking == "Sell" && group == "Commercial" && type == "Plot / Land" && other == "Industrial Lands / Plots") ? <IndustrialLandUpdate /> : ""}    

      {/* --------------- Industry---------------- */} 
      {(looking == "Sell" && group == "Commercial" && type == "Industry" && other == "Factory") ? <FactoryUpdate /> : ""}
      
      {(looking == "Sell" && group == "Commercial" && type == "Industry" && other == "Manufacturing") ? <ManufactureUpdate /> : ""}
      
      {/* ---------------- Hospitality --------------- */}
      {(looking == "Sell" && group == "Commercial" && type == "Hospitality" && other == "Hotel / Resorts") ? <HotelResortUpdate /> : ""}
      
      {(looking == "Sell" && group == "Commercial" && type == "Hospitality" && other == "Guest-House / Banquet-Hall") ? <GuestBanquetUpdate /> : ""}
      
      {/* ============================== Rent -=- Residential ==============================  */} 

      {(looking == "Rent" && group == "Residential" && type == "Flat / Apartment") ? <FlatApartmentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Independent House / Villa") ? <IndependentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Independent / Builder Floor") ? <IndependentBuilderRentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Serviced Apartment") ? <ServicedApartmentRentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "1RK / Studio Apartment") ? <StudioApartmentRentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Farmhouse") ? <FarmhouseRentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Hospitality" && other == "Hotel / Resorts" ) ? <HotelResortRentUpdate /> : ""}
      
      {(looking == "Rent" && group == "Residential" && type == "Hospitality" && other == "Guest-House / Banquet-Hall") ? <GuestBanquetRentUpdate /> : ""}
      
      {/* ---------------------------------------- */}
      {(looking == "Rent" && group == "Commercial" && type == "Industry" && other == "Factory") ? <FactoryRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Industry" && other == "Manufacturing") ? <ManufactureRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Office" && other == "Ready to move office space") ? <ReadyMoveUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Office" && other == "Bare shell office space") ? <BareShellUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Plot / Land" && other == "Commercial Land / Institutional Land") ? <CommercialLandRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Plot / Land" && other == "Agricultural Land / Farm Land") ? <AgriculturalLandRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Plot / Land" && other == "Industrial Lands / Plots") ? <IndustrialLandRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Retail" && other == "Commercial Shops") ? <CommercialShopRentUpdate /> : ""} 

      {(looking == "Rent" && group == "Commercial" && type == "Retail" && other == "Commercial Showrooms") ? <CommercialShowRoomRentUpdate /> : ""}  
      
      {(looking == "Rent" && group == "Commercial" && type == "Storage" && other == "Ware House") ? <WareHouseRentUpdate /> : ""}  

      {(looking == "Rent" && group == "Commercial" && type == "Storage" && other == "Cold Storage") ? <ColdStorageRentUpdate /> : ""}  

    </div>
  )
}

export default Listings;

