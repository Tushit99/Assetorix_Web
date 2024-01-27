import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react"; 
// import style from "./UsaRealState.module.css";
import img from "./American-Housing-Market.webp";
import ServiceLink from "../Links/ServiceLink";

const UsaRealState = () => {
    return (
        <Box
            w={"90%"}
            margin={"20px auto 30px auto"} 
            display={"flex"}
            gap={10}
        >
            <Box width={"100%"} textAlign={"left"} flex={7} margin={"10px auto"}>
                <img src={img} alt="property_img" />
                <Heading m={"20px 0"} as="h3" size="md">
                    INVESTMENT IN THE USA REALESTATE
                </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Foreign investment in the United States real estate is a major source
                    of investment in the United States, facilitated by an open economy
                    legislation (foreign individuals and corporations are free to purchase
                    residential or commercial real estate).
                </Text>
                <Heading
                    m={"20px 0"}
                    as="h3"
                    size="sm"
                    textAlign={"justify"}
                    fontSize={"sm"}
                    margin={"10px 0"}
                >
                    Our key differentiator is varying geographic and property types,
                    offering investors a diverse array of real estate opportunities in
                    USA. We can help you to earn returns through exposure to
                    income-generating loans backed by real estate or through equity
                    investments in real estate properties.
                </Heading>
                <Heading m={"20px 0"} as="h3" size="md">
                    Overview:
                </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Since 2013, foreign buyers made up about 7% ($92.2 billion) of
                    transactions in the $1.2 trillion U.S. real estate market. Canada was
                    the main buyer with 19% of sales (decrease from 23% the year before),
                    China was on the second place with 16% of sales, while on the first
                    place considering total foreign sales by dollar value (24% or $22
                    billion). Mexico ranked third with 9% of sales and India and the UK
                    both accounted for 5%. Florida is the most popular destination with
                    31% of sales, followed by California (12%), Texas (9%) and Arizona
                    (6%). Almost 80% of foreign-born U.S. residents owned a home in 2009,
                    according to the National Association of Realtors. The national
                    homeownership rate at that time was 65.4%.
                </Text>
                {/* part 2 */}
                <Heading m={"20px 0"} as="h3" size="md">
                    Taxation:
                </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Foreign non-resident real estate owners have two taxation options. One of them is to have the property taxed as Effectively Connected Income (ECI) of a U.S. trade or business. Income from real estate that is “effectively connected” with a U.S. trade or business is taxed to the owner of the real estate at the same rates that apply to U.S. individuals and corporations. In addition, the owner can claim deductions that arise from the operation of the property.
                </Text>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    A second option is to have the property treated as an investment property and subject to a flat 30% tax. Most income received by foreign persons from U.S. investments, including rent, is taxed at a flat 30%, and the foreign person is permitted no deductions related to the operations of the property. That means that if there is a mortgage on the property, the interest payments are not deductible. However, many countries have entered into income tax treaties with the U.S. reducing the 30% rate to a lesser amount.
                </Text>
                {/* part 3 */}
                <Heading m={"20px 0"} as="h3" size="md">
                    Estate tax:
                </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    All U.S. real estate (and other assets) owned by non-resident aliens (and others) is subject to an estate tax upon the owner’s death. However, U.S. citizens and residents are permitted a partial exclusion from estate taxes; non-resident aliens are also allowed a smaller exclusion (prior planning may change the exclusion level to that of a citizen/resident).
                </Text>
                {/* part 4 */}
                <Heading m={"20px 0"} as="h3" size="md">
                    Purchase structure:
                </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    There are various variables to consider when deciding the structure of a real estate purchase in the U.S., like:
                </Text>
                <UnorderedList margin={"20px"} textAlign={"justify"}>
                    <ListItem>Is the real estate income-producing or is it a personal residence?</ListItem>
                    {/* point - 1 */}
                    <ListItem>Is the real estate part of a U.S. trade or business?</ListItem>
                    {/* point - 2 */}
                    <ListItem>If the owner is a foreign individual, is the owner a U.S. resident for U.S. estate tax purposes?</ListItem>
                    {/* point - 3 */}
                    <ListItem>Does the foreign owner seek to keep the identity of the owner confidential?</ListItem>
                    {/* point - 4 */}
                    <ListItem>Does the owner seek “asset protection” i.e. to shield the property from the claims of creditors?</ListItem>
                </UnorderedList>

            </Box>
            <Box padding={"0 40px"} display={{ base: "none", md: "block" }} textAlign={"left"} position={"relative"} flex={2}>
                <ServiceLink />
            </Box>
        </Box>
    );
};

export default UsaRealState;
