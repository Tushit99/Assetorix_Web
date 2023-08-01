import React from 'react';
import img from "./Market-1024x342.jpg";
import style from "./MarketResearch.module.css";
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ServiceLink from '../Links/ServiceLink';

const MarketResearch = () => {
    return (
        <Box w={"90%"} margin={"60px auto 30px auto"} paddingTop={"70px"} display={"flex"} gap={10}>
            <Box width={"100%"} textAlign={"left"} flex={7} margin={"10px auto"}>
                <img src={img} alt="property_img" />
                <Heading m={"20px 0"} as='h3' size='md'> MARKET RESEARCH </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"} >
                    There’s wide speculation regarding what will happen to the real estate market in 2021. Some experts predict a declining house inventory and stagnating home value appreciation that will leave many questioning how best to spend their money, while others forecast an increasing home ownership rate “as speculators and investors exit the market.”         </Text>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Whatever the case may be, it’s hardly surprising to learn that good real estate market research can help prospective investors choose a property that’s not only practical in the here and now, but that’s capable of turning a profit for them down the line. Especially in a year that may be plagued with the lingering effects of the recent Covid pandemic, a declining Chinese economy and fluctuating stock market conditions, it makes sense that people do their due diligence before dropping any amount of cash on a real estate deal.
                </Text>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Take a look at three ways a well-designed real estate market research plan can help corporate investors, lending professionals and developers, along with private buyers, sellers and renters alike, critically assess the existing value of properties, as well as their potential:
                </Text>
                {/* part1 */}
                <Heading m={0} as='h3' size='md'> Real Estate Market Research Helps Define Search Area </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Location is everything when dealing in real estate. Neighborhoods and their accompanying resources, including, but not limited to, their schools, shops, entertainment venues and recreational offerings, determine property desirability and price. But neighborhoods aren’t static entities; demographic and economic factors that ebb and flow combine in ways that affect property value and appeal and create a neighborhood life cycle that rotates through stages of revitalization, growth, stability and decline in perpetuity.
                </Text>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Profitable investments can be made at any point of the cycle, but only if prior research has established the time and the areas in which infusions and exchanges of cash make the most sense. For example, research could point to a specific geographic area that’s in a declining stage where purchasing rental properties could effectively meet the demand of the people who will be eventually forced to rent rather than own due to the area’s economic instability. Or research could identify a certain stable neighborhood where selling property to compensate for the loss of suitable lots could net a sizable profit. In either case, just a little bit of homework can help you reap worthwhile returns.
                </Text>
                {/* part 2 */}
                <Heading m={0} as='h3' size='md'> Real Estate Market Research Helps Identify Demographic and Economic Trends </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Changing cultural norms and evolving demographic cohorts necessarily determine real estate demand, forcing neighborhood life cycle change and creating systems of supply and demand that expand and shrink financial margins within an area. Real estate market research helps identify trends that might affect property value. At present, 1st Generations are retiring, and Millennials are becoming more economically stable as many begin hitting their career stride. This means the real estate market will shift in ways that accommodate senior living and a younger cohort with money to spend. Knowing the trends that might influence buying patterns and demand can help you determine how and when to spend or save your money.
                </Text>
                {/* part 3 */}
                <Heading m={0} as='h3' size='md'>Real Estate Market Research Helps Verify a Profitable Price Point </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    In essence, real estate market research is about helping you verify the price at which a property will be profitable for you long-term. Comparing the property prices (i.e, establishing “comps”) of recently sold, as well as, current listings, is essential to good real estate market research. It helps ensure that you buy at a fair price now so that you can make more later. And it also helps pinpoint a competitive sales price should you want to sell, thus preventing you from languishing with a property longer than necessary.  </Text>
                {/* part 4 */}
                <Heading m={0} as='h3' size='md'>Need More Information?  </Heading>
                <Text textAlign={"justify"} fontSize={"sm"} m={"10px 0"}>
                    Quality research not only makes entering the real estate market easier, it can also make it more profitable. Understanding communities — their economic and societal trends, as well as their patterns of supply and demand — means you can better forecast property value and buy and sell when the time is truly right, not just convenient. Contact our team at Ametheus Holdings Pvt Ltd (AHPL) for more information on how to create and administer a market analysis that nets you useful and rewarding results.                </Text>
                <Text>
                    Our Real-Estate  web-portal is www.assetorix.com
                </Text>
            </Box>
            <Box padding={"0 40px"} display={{base:"none",md:"block"}}  textAlign={"left"} position={"relative"} flex={2}>
                <ServiceLink />
            </Box>
        </Box>
    )
}

export default MarketResearch

