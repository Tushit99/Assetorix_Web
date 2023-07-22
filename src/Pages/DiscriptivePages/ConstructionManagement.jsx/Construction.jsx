import { Box, ListItem, UnorderedList ,Text, Heading} from "@chakra-ui/react";
import React from "react";

const Construction = () => {
    return (
        <Box display={{ base: "grid", lg: "flex" }} w={"90%"} margin={"100px auto 40px auto"} gap={{base:"20px", lg:"50px"}} >
            <Box flex={7} textAlign={"left"} display={"flex"} flexDirection={"column"} gap={"14px"} fontSize={"lg"} padding={"20px"} > 
                <Text textAlign={"justify"}> 
                    Assetorex    provides state-of-the-art construction management services for
                    all project types and delivery methods. Project delivery method
                    selection depends, among other factors, upon the Client’s risk
                    tolerance, in-house staff capabilities, and best method for realizing
                    cost, schedule, and quality goals for your specific project.
                    www.assetorix.com
                </Text>
                <Heading as='h4' size='md'>Construction Management</Heading>
                <Text textAlign={"justify"}>
                    Assetorex    provides comprehensive pre-construction services and, upon
                    sufficient progress of planning and design, typically converts to a
                    Guaranteed Maximum Price (GMP) contract. Ametheus holds all
                    sub-contracts and thus assumes performance risk.
                </Text>
                <UnorderedList textAlign={"left"}>
                    <ListItem>Pre-Construction Services</ListItem>
                    <ListItem>Construction Phasing, Scheduling, and Site Logistics Planning</ListItem>
                    <ListItem>Constructability Reviews</ListItem>
                    <ListItem>Estimating/Financial Management</ListItem>
                    <ListItem>Value Engineering</ListItem>
                    <ListItem>Bid Process Management</ListItem>
                    <ListItem>On-Site Coordination and Supervision</ListItem>
                    <ListItem>Quality Assurance and Control</ListItem>
                    <ListItem>Construction Trade Coordination</ListItem>
                    <ListItem>Building Commissioning / Post-Construction Services</ListItem>
                </UnorderedList>
            </Box>
            <Box flex={3}>
                <img src={"https://www.ametheus.com/wp-content/uploads/2022/10/aerial-view-of-shanghai-lujiazui-financial-district-royalty-free-image-928266082-1557158532-685x1024.jpg"} alt="building_image" />
            </Box>
        </Box>
    );
};

export default Construction;
