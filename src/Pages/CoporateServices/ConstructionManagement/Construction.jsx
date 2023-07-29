import {
    Box,
    ListItem,
    UnorderedList,
    Text,
    Heading,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabIndicator,
} from "@chakra-ui/react";
import React from "react";
import style from "./construction.module.css";


const Construction = () => {
    return (
        <Box
            display={{ base: "grid", lg: "flex" }}
            w={"90%"}
            margin={"130px auto 40px auto"}
            gap={{ base: "20px", lg: "50px" }}
        >
            <Box
                flex={7}
                textAlign={"left"}
                display={"flex"}
                flexDirection={"column"}
                gap={"14px"}
                fontSize={"lg"}
                padding={"20px"}
            >
                <Text textAlign={"justify"} fontSize={"sm"}>
                    Assetorex provides state-of-the-art construction management services
                    for all project types and delivery methods. Project delivery method
                    selection depends, among other factors, upon the Client’s risk
                    tolerance, in-house staff capabilities, and best method for realizing
                    cost, schedule, and quality goals for your specific project.
                    www.assetorix.com 
                </Text>

                {/* pages */}
                <Tabs display={"flex"} >
                    <TabList 
                        display={"flex"}  
                        flexDirection={"column"}  
                        fontSize={"sm"}   
                    >
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Construction Management</Tab>
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Construction Management As Agent</Tab>
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Construction Management- Variants</Tab>
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Pre-Construction Services / Consulting Services</Tab>
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Program Management</Tab>
                        <Tab fontSize={{base:"sm",md:"md"}} textAlign={"left"} _selected={{borderLeft:"3px solid rgb(230,37,82)",backgroundColor:"white"}} >Lump-Sum Contracting</Tab>
                    </TabList> 

                    <TabPanels className={style.management_box}>
                        <TabPanel>
                            <Heading as="h4" size="md" margin={"10px 0"}>
                                Construction Management
                            </Heading>
                            <Text textAlign={"justify"}>
                                Assetorex provides comprehensive pre-construction services and,
                                upon sufficient progress of planning and design, typically
                                converts to a Guaranteed Maximum Price (GMP) contract. Ametheus
                                holds all sub-contracts and thus assumes performance risk.
                            </Text>
                            <UnorderedList textAlign={"left"} margin={"10px 16px"}>
                                <ListItem>Pre-Construction Services</ListItem>
                                <ListItem>
                                    Construction Phasing, Scheduling, and Site Logistics Planning
                                </ListItem>
                                <ListItem>Constructability Reviews</ListItem>
                                <ListItem>Estimating/Financial Management</ListItem>
                                <ListItem>Value Engineering</ListItem>
                                <ListItem>Bid Process Management</ListItem>
                                <ListItem>On-Site Coordination and Supervision</ListItem>
                                <ListItem>Quality Assurance and Control</ListItem>
                                <ListItem>Construction Trade Coordination</ListItem>
                                <ListItem>
                                    Building Commissioning / Post-Construction Services
                                </ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h4" size="md">
                                Construction Management As Agent
                            </Heading>
                            <Text textAlign={"justify"}>
                                Ametheus acts as the Owner’s Agent. Construction Manager can
                                provide pre-construction services but, ultimately, all
                                subcontracts run to the Owner. Construction Manager coordinates
                                subcontractor work during construction.
                            </Text>
                            <UnorderedList textAlign={"left"}>
                                <ListItem>Pre-Construction Services</ListItem>
                                <ListItem>
                                    Construction Phasing, Scheduling, and Site Logistics Planning
                                </ListItem>
                                <ListItem>Constructability Reviews</ListItem>
                                <ListItem>Estimating/Financial Management</ListItem>
                                <ListItem>Value Engineering</ListItem>
                                <ListItem>Bid Process Management</ListItem>
                                <ListItem>On-Site Coordination and Supervision</ListItem>
                                <ListItem>Quality Assurance and Control</ListItem>
                                <ListItem>Construction Trade Coordination</ListItem>
                                <ListItem>
                                    Building Commissioning / Post-Construction Services
                                </ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h4" size="md">
                                Construction Management- Variants
                            </Heading>
                            <Text textAlign={"justify"}>
                                The variant of Construction Management is unique to Projects . It generally mandates specific Contractual requirements for Public School, Library and other Projects which involve taxpayer funding. Most significant among these requirements is that all Contractors must pay “Prevailing Wage” rates, as established for each Project locality, and which has the effect of creating a separate class of lump-sum bidders who specialize in this type of work. Another aspect of construction work is is that it requires separate lump-sum, competitive bids for, at a minimum, Mechanical, Electrical and Plumbing trades. Since these “Prime Contractors” must contract directly with an Owner who does not have in-house capabilities to coordinate separate trades, it is customary to hire a professional Construction Manager that is experienced in this specialized form of Contracting.
                            </Text>
                            <UnorderedList textAlign={"left"}>
                                <ListItem>Pre-Construction Services</ListItem>
                                <ListItem>
                                    Construction Phasing,
                                </ListItem>
                                <ListItem>Planning</ListItem>
                                <ListItem>Constructability Reviews</ListItem>
                                <ListItem>Estimating / Financial</ListItem>
                                <ListItem>Management</ListItem>
                                <ListItem>Value Engineering</ListItem>
                                <ListItem>Bid Package Preparation</ListItem>
                                <ListItem>Bid Process Management</ListItem>
                                <ListItem> Quality Assurance and Control </ListItem>
                                <ListItem>Construction Trade Coordination</ListItem>
                                <ListItem>Building Commissioning / Post-Construction Services</ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h4" size="md">
                                Pre-Construction Services / Consulting Services
                            </Heading>
                            <Text textAlign={"justify"}>
                                Ametheus Construction team believes that our collective experience translates into valuable counsel. Our professional networks cover the spectrum of the construction industry. As your consultant, we will deliver an array of customized, client-specific services that will set your project on the right course.

                                It is not unusual for a Client to initially engage Triton for pre-construction phase services only, in order to evaluate services feasibility prior to proceeding with a Project or choosing the ideal delivery method.
                            </Text>
                            <UnorderedList textAlign={"left"} >
                                <ListItem>Feasibility Studies</ListItem>
                                <ListItem> Project Workout </ListItem>
                                <ListItem>Adaptive Re-Use Analysis</ListItem>
                                <ListItem>Comprehensive Pre-Construction Services</ListItem>
                                <ListItem>Estimating and Value Engineering</ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h4" size="md">
                                Program Management
                            </Heading>
                            <Text textAlign={"justify"}>
                                Normally applicable to multi-site and multiple-phase projects that a Client may be managing simultaneously.  As in “Construction Management as Agent,” the Program Manager functions as Owner’s Agent for the overall construction program.
                            </Text>
                            <UnorderedList textAlign={"left"} >
                                <ListItem>Pre-Construction Services</ListItem>
                                <ListItem> Construction Phasing, scheduling and site logistic planning</ListItem>
                                <ListItem>Constructability Reviews</ListItem>
                                <ListItem>Design Team Management</ListItem>
                                <ListItem>Estimating/Financial Management</ListItem>
                                <ListItem>Value Engineering</ListItem>
                                <ListItem>Bid Process Management</ListItem>
                                <ListItem>On-Site Coordination and Supervision</ListItem>
                                <ListItem>Quality Assurance and Control</ListItem>
                                <ListItem>Construction Trade Coordination</ListItem>
                                <ListItem>Building Commissioning/Post-Construction Services</ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading as="h4" size="md">
                                Lump-Sum Contracting
                            </Heading>
                            <Text textAlign={"justify"}>
                                The Owner pays a set “lump-sum” amount to the Construction Manager for completing a Project in accordance with Plans and Specifications prepared by the Owner’s Design Team.  The Construction Manager is not required to provide an estimate or contract cost breakdown and does not typically participate in pre-construction.
                            </Text>
                            <UnorderedList textAlign={"left"} >
                                <ListItem>Safety Management</ListItem>
                                <ListItem> Design/build (turnkey services) </ListItem>
                                <ListItem>Renovation</ListItem>
                                <ListItem>New Construction</ListItem>
                                <ListItem>Quality Control</ListItem>
                            </UnorderedList>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box flex={3} display={{base:"none",lg:"block"}}>
                <img
                    src={
                        "https://www.ametheus.com/wp-content/uploads/2022/10/aerial-view-of-shanghai-lujiazui-financial-district-royalty-free-image-928266082-1557158532-685x1024.jpg"
                    }
                    alt="building_image"
                />
            </Box>
        </Box>
    );
};

export default Construction;
