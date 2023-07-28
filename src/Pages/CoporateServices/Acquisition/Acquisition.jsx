import React from 'react'
import img from "./Acquisition-1024x342.jpg";
import { Box, Heading, Text } from '@chakra-ui/react'; 
import ServiceLink from '../Links/ServiceLink';


const Acquisition = () => {
    return (
        <Box w={"90%"} margin={"auto"} paddingTop={"70px"} display={"flex"} gap={10}>
            <Box width={"100%"} textAlign={"left"} flex={7} margin={"10px auto"}>
                <img src={img} alt="property_img" />
                <Heading m={"20px 0"} as='h3' size='lg'> ACQUISITIONS AND DISPOSITIONS </Heading>
                <Heading as='h4' m={"20px 0"} size='sm' fontWeight={"400"} > MARKETING OF PROPERTIES BY AMETHEUS HOLDINGS PVT LTD </Heading>
                <Text fontSize={"sm"} m={"20px 0"} textAlign={"justify"} >
                    Acquiring and disposing of the right assets (at the right time) is a critical step in enhancing investment return. Sometimes properties that appear similar on paper can perform differently in the marketplace. Advertised sales prices do not always adequately reflect a thorough understanding of the property and its current or potential value, making our unsurpassed local market knowledge and deep experience in the investment arena an indispensable component of any effective acquisition or disposition strategy. We understand the many factors that influence land values and site selection including supply and demand, zoning, demographic, traffic patterns, and political issues.
                </Text>
                <Text fontSize={"sm"} m={"20px 0"} textAlign={"justify"}>
                    Our agents have been trained to make smart and knowledgeable decisions when it comes to the strategic acquisition and disposition of commercial property. Whether it be a single property or a portfolio of properties, agriculture, dry graze land, master planned communities, tentative and finished lots, and residential at Ametheus Holdings Ltd professionals draw from a strong foundation of resources to support each client’s investment objectives. Clients seeking a single-source company for their acquisition and disposition needs can depend on our unending commitment to client service.
                    Our Real-Estate  web-portal is www.assetorix.com
                </Text>
            </Box>
            <Box padding={"0 40px"} display={{base:"none",md:"block"}} textAlign={"left"} position={"relative"} flex={2}>
                <ServiceLink /> 
            </Box>
        </Box>
    )
}

export default Acquisition

