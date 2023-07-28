import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import img from "./Consulting-1024x342.jpg"; 
import ServiceLink from '../Links/ServiceLink';

const ConsultingPage = () => {
    return (
        <Box w={"90%"} margin={"auto"} paddingTop={"70px"} display={"flex"} gap={10}>
            <Box textAlign={"justify"} w={"70%"} flex={7} padding={"0px auto"}>
                <img src={img} alt="property_img" />
                <Heading m={"10px 0"} as='h3' size='lg'> CONSULTING </Heading>
                <Heading as='h4' m={"10px 0"} size='md' fontWeight={"400"} > MARKETING OF PROPERTIES BY AMETHEUS HOLDINGS PVT LTD </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >
                    Ametheus Consulting offers real estate and urban economic consulting services to developers, owners, occupiers, institutional investors and public sector organizations in metropolitan cities including NCR.
                </Text>

                <Text fontSize={"sm"} m={"10px 0"} >
                    What differentiates our team is the expertise of our seasoned professionals, which are the fundamental pillar of our service offering. When navigating complex real estate challenges, these professionals are committed to fully understanding the specific needs of every individual client and applying a solution driven outcome. This ensures that our clients are able to utilize the strategic advice provided by our team to make informed real estate decisions, reduce costs, create value and improve performance.
                </Text>

                <Text fontSize={"sm"} m={"10px 0"} >
                    With the ability to leverage broad knowledge and insights across design, construction and real estate technology – we provide real estate consultancy and advisory that guides you on the path to success. our team ensures that customized solutions are aligned to the key business objectives of our clients.
                </Text>

                <Text fontSize={"sm"} m={"10px 0"} >
                    Our Consultancy include 5 ways;
                </Text>

                {/* 1 */}
                <Heading m={0} as='h3' size='sm'>
                    Capital planning:
                </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >Without a best-in-class plan, you can spend too much — or too little — and pay the consequences. Evaluate scope, budget, and risk to balance spending and goals.</Text>
                {/* 2 */}
                <Heading m={0} as='h3' size='sm'>
                    Building consultancy:
                </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >Make informed decisions with building surveys, schedules of condition, construction and development monitoring, dilapidations assessments, planned maintenance, reinstatement cost assessments, and defect analysis and alterations approval.</Text>
                {/* 3 */}
                <Heading m={0} as='h3' size='sm'>
                    Smart buildings:
                </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >Design a smart building solution aligned to your needs. Introduce new technology and connect existing systems to enhance the productivity of buildings, workplaces and people. Get access to real-time data to ensure your property or portfolio operates efficiently and creates positive experiences for the people using the space.</Text>
                {/* 4 */}
                <Heading m={0} as='h3' size='sm'>
                    Project management:
                </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >We manage a project’s requirements from start to finish – addressing the needs of development at every phase to ensure completion on time and within budget. </Text>
                {/* 5 */}
                <Heading m={0} as='h3' size='sm'>
                    Sustainability services:
                </Heading>
                <Text fontSize={"sm"} m={"10px 0"} >We can help you find sustainable solutions which maximise asset value, mitigate risk, create new revenue streams, reduce occupancy costs or enhance wellbeing. </Text>
                {/* 6 */}
                <Text fontSize={"sm"} m={"10px 0"} >Our Real-Estate  web-portal is www.assetorix.com</Text>
            </Box>
            <Box padding={"0 40px"} display={{base:"none",md:"block"}}  textAlign={"left"} position={"relative"} flex={2}>
                <ServiceLink />
            </Box>
        </Box>
    )
}

export default ConsultingPage; 
