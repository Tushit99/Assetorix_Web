import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import Reactw from 'react';
import style from "./Contact.module.css";

const Contact = () => {
    // const [iframeWidth, setIframeWidth] = useState(600);
    // const [iframeHeight, setIframeHeight] = useState(500);

    return (
        <Box display={{base:"grid",lg:"flex"}} className={style.top_head}>
            <Box>
                <Heading color={"rgb(233,110,114)"} textAlign={"left"} as='h4' size='md'>CONTACT US</Heading>
                <Divider marginBottom={"30px"} />

                <Heading color={"black"} as='h4' size='md'> Ametheus Holdings Pvt Ltd </Heading>
                <Text>
                    If you ever feel like you can’t find the right product for you on our site or you need a little more information or assistance please get in touch with the sales team.
                </Text>
                <Text>
                    Call Us: +91-11-41670666, +91-1140074433, +91-9999099538 <br />  Email: info@ametheus.com
                </Text>
                <Heading as='h4' size='md' fontWeight={"bold"}>Postal Address:</Heading>
                <Text>
                    Ametheus Holdings Pvt Ltd <br />
                    27, 2nd Floor, Hauz Khas Village, New Delhi 110016, India
                </Text>
                <Heading as={"h4"} size={"md"} fontWeight={"bold"}> WARNING: #THIS WEBSITE IS UNDER TRIAL VERSION. WE ARE REQUESTING YOU NOT TO PURCHASE FROM THIS SITE UNTIL FURTHER INFORMATION PROVIDED# </Heading>
            </Box>
            {/* <map> 
                <area shape="" coords="" href="https://www.google.com/maps/search/27a+second+floor,+hauz+khas+vilage/@28.5501009,77.1763438,14z/data=!3m1!4b1?entry=ttu" alt="this_is_map" />
            </map> */}
            <Box>
                <div className={style.mapouter}>
                    <div className={style.gmap_canvas}> 
                        <iframe
                            width={600} 
                            height={500}
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=27A%20hauz%20khas%20village&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no" 
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                        <a href="https://123movies-to.org"></a>
                        <br />
                        {/* <style>{`.mapouter{position:relative;text-align:right;height:${iframeHeight}px;width:${iframeWidth}px;}`}</style> */}
                        <a href="https://www.embedgooglemap.net"></a>
                        {/* <style>{`.gmap_canvas {overflow:hidden;background:none!important;height:${iframeHeight}px;width:${iframeWidth}px;}`}</style> */}
                    </div>
                </div>
            </Box>  
        </Box>
    )
}

export default Contact

