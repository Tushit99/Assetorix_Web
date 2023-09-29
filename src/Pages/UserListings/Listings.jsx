import React, { useState } from 'react'
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



const Listings = () => {
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");
  const [looking, setLooking] = useState("");
  const [other, setOther] = useState("");

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

      {/* {(looking == "Rent" && group == "Residential" && type == "Flat / Apartment") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "Independent House / Villa") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "Independent / Builder Floor") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "Serviced Apartment") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "1RK / Studio Apartment") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */}
      
      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */} 

      {/* {(looking == "Rent" && group == "Residential" && type == "" && other == "") ? < /> : ""} */}  
      

    </div>
  )
}

export default Listings;

