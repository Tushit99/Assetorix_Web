import React from 'react';
import style from "./PortfolioPlaning.module.css";
import { Box, Divider, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import img from "./Portfolio-1024x342.jpg";

const PortfolioPlaning = () => {
    return (
        <Box w={"90%"} margin={"auto"} paddingTop={"70px"} display={"flex"} gap={10}>
            <Box width={"100%"} textAlign={"left"} flex={7} margin={"10px auto"}>
                <img src={img} alt="property_img" />
                <Heading m={"20px 0 0 0"} as='h3' size='md'> PORTFOLIO PLANNING </Heading>
                <Divider h={1} />
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Global capital within reach </Heading>
                <Text textAlign={"justify"} fontSize={"md"} m={"10px 0"}>
                    The property investment market is an increasingly complex, international playing field. Operating in this market requires more than just a large network of contacts. What matters is the personal relationship with the right persons who have power of decision, know their financial targets and investment strategy, and have decided how they want to expand or dispose of their portfolio. Because of the close, personal relationships of ASSETORIX consultants with investors at all levels throughout the world, we know where capital is available. And which aspects are decisive in making international capital aware of your property.
                </Text>
                {/* part1 */}
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Structured process, maximum result, minimum risk of execution </Heading>
                <Text textAlign={"justify"}>
                    On the basis of the proposition we will design a bespoke selling process, which is dynamically elaborated from day 1 by an experienced, dedicated team. We understand that good timing and meticulous preparation determine the sale’s success. Our selling processes are therefore clearly structured, and nothing is left to chance. We will let our national and international network work for you, prepare each phase of the marketing and selling process in detail, and produce a complete commercial, technical and legal sales dossier in the data room. We eliminate as many risks as possible in advance in order to ensure a mdooth selling process, up to the official transfer.
                </Text>
                {/* part 2 */}
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Large sales team, specialists in all sectors </Heading>
                <Text textAlign={"justify"}>
                    Many investors consider our structured approach essential in the extremely competitive market. We therefore have a large team of agents by global standards, which allows us to carry out many different sales processes simultaneously and within a brief period of time. Our in-depth knowledge of all property sectors and our specialist sector teams for investments in offices, retail, logistics, hotels, healthcare property and residential complexes is particularly valued by our clients.
                </Text>
                {/* part 3 */}
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Your property portfolio in market perspective </Heading>
                <Text textAlign={"justify"}>
                    What are your property goals? Continuation, expansion or disposal? Do you want to know what the market trends and options are, and what this means for your portfolio?  As we are active in the property market every day, in India, The USA and throughout the world, we know all about market developments and capital flows. We know the property market better than anyone else, and have the references to prove this. We will show you how your property is positioned in the current market.
                </Text>
                {/* part 4 */}
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Short- and long-term portfolio strategies </Heading>
                <Text textAlign={"justify"}>
                    Following our analysis of the commercial aspects of each property in your portfolio, we will show you how one property’s value affects the value of the whole portfolio. We will also explain your options, and how you can benefit most from the current market conditions. We will convert this into a hold/sell strategy, in which we elaborate both the short- and long-term steps to be taken. We will give you clear insights and honest advice.
                </Text>


                {/* part 5 */}
                <Heading m={"20px 0 6px 0"} as='h3' size='md'> Selling your portfolio? </Heading>
                <Text textAlign={"justify"}>
                    If, on the basis of our analysis, you decide to sell your portfolio in total or in parts, we can organise this as your partner in a well-structured and decisive way.
                </Text>
                <UnorderedList margin={"20px"} textAlign={"justify"}>  
                    <ListItem>Strategic hold/sell advice for your property portfolio, including short- and long-term value assessment and feasibility</ListItem> 
                    {/* 1 */}
                    <ListItem>Detailed analysis of the commercial aspects of your buildings, and factors that increase or reduce the value</ListItem>  
                    {/* 2 */}
                    <ListItem>Opportunities in the international market from a global perspective up-to-date, highly qualified expertise, enabling us to give you a well-substantiated, clear picture within a short period of time</ListItem> 
                    {/* 3 */}
                </UnorderedList>
                <Text textAlign={"justify"} as='h3' size='sm'> Our Real-Estate  web-portal is www.assetorix.com </Text>
            </Box>
            <Box padding={"0 40px"} textAlign={"left"} position={"relative"} flex={2}>
                <Box className={style.link_box}>
                    <Link to={"/Construction_Management"} >Construction Management</Link>
                    <Link to={"/partner"} >Partner with Us</Link>
                    <Link to={"/Property_Marketing"} >Property Marketing</Link>
                    <Link to={"/acquisitions_and_dispositions"} >Acquisitions & Dispositions</Link>
                    <Link to={"/consulting"} >Consulting</Link>
                    <Link to={"/marketresearch"} >Market Research</Link>
                    <Link to={"/portfolio_planning"} >Property & Portfolio Sales</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default PortfolioPlaning;

