import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./ServiceLink.module.css"; 

const ServiceLink = () => {
    return (
        <Box className={style.link_box}>
            <Link to={"/Construction_Management"} >Construction Management</Link>
            <Link to={"/partner"} >Partner with Us</Link>
            <Link to={"/Property_Marketing"} >Property Marketing</Link>
            <Link to={"/acquisitions_and_dispositions"} >Acquisitions & Dispositions</Link>
            {/* <Link to={"/consulting"} >Consulting</Link> */}
            <Link to={"/market_research"} >Market Research</Link>
            <Link to={"/portfolio_planning"} >Property & Portfolio Sales</Link>
        </Box>
    )
}

export default ServiceLink