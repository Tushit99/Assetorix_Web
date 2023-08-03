import {
  Box, 
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo/Logo";
import style from "./Footer.module.css";
import { 
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import insta from "./insta.png";
import { Link } from "react-router-dom";

const Footer = () => {   

   
  return (
    <div className={style.ft}>
      <Box className={style.footer}>
        {/* footer */}
        <Box className={style.footer_description} >
          <Box>
            <h2>Business Line</h2>
            <Link to={"#"}>Buy</Link>
            <Link to={"#"}>Rent </Link>
            <Link to={"#"}>Sale</Link>
            <Link to={"#"}>Home Loan </Link>
            <Link to={"#"}>Advertise </Link>
            <Link to={"#"}>Agent Finder </Link>
            <Link to={"#"}>Corporate Service</Link>
          </Box>
          <Box >
            <h2>Company</h2>
            <Link to={"#"}>Home</Link>
            <Link to={"#"}>About Assetorix</Link>
            <Link to={"#"}> Developer Partners </Link>
            <Link to={"/contact"}> Contact </Link>
          </Box>
          <Box >
            <h2>Help Center</h2>
            <Link to={"/user_term_condition"}>User Terms & Condition </Link> 
            <Link to={"/Purchase_term_Condition"}>Payment Term & Condition</Link>
            <Link to={"#"}>Privacy</Link>
            <Link to={"#"}>Disclaimer</Link>

          </Box>
          <Box>
            <h2>CONTACT</h2>
            <Box display={"flex"} alignItems={"flex-start"} w={"100%"} justifyContent={"center"} >
              <Box flex={1} paddingTop={1} >
                <IoIosArrowForward size={"16px"} />
              </Box>
              <Box flex={9} textAlign={"left"} >
                <p>Ametheus Holdings Pvt Ltd Address: 27, 2nd Floor, Hauz Khas Village, New Delhi 110016, India  Phone: +91-11-41670666, +91-1140074433, +91-9999099538</p>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"flex-start"} w={"100%"}>
              <Box flex={1} paddingTop={1}>
                <IoIosArrowForward size={"16px"} />
              </Box>
              <Box flex={9} textAlign={"left"}>
                <p>Email: info@assetorix.com</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box py={4}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            {/* company Logo */}
            <Logo />
          </Flex>
        </Box>
        {/* some company info */}
        <Text className={style.groupof}>
          ©2010 - 2023 All rights reserved with Ametheus Holdings Pvt Ltd.
        </Text>

        {/* line with logo */}
        <Box className={style.contact}>
          <Link  to="#"> 
            <BiLogoLinkedin size={"24px"} />
          </Link>
          <Link target="_blank" to="https://twitter.com/assetorix">
            <BsTwitter size={"24px"} />
          </Link>
          <Link to="#">
            <BsFacebook size={"24px"} />
          </Link>
          <Link to="#">
            <BsInstagram size={"24px"} className={style.insta_icon} />
            <img src={insta} alt="imstagram" className={style.insta_logo} width={"24px"} />
          </Link>
        </Box>
      </Box>
      <div className={style.location_detail}>
        <Box>
          <h3 > <span className={style.blue}>assetorix.com </span>
            <span style={{fontSize:"16px"}}>
              by Ametheus Holdings Pvt Ltd <br />
            </span>
          </h3>
          <h3> 
            <span style={{ display: "flex", alignItems: "center",fontSize:"14px" }}> Marketing partner: </span> 
            <span className={style.red}>Unifie Entertainment technology LLP </span>
          </h3>
        </Box>
        <Box >
          Email: info@assetorix.com <span className={style.line}> | </span> <br className={style.brs} /> Call Us at: +91-9999099538
        </Box>
        
      </div> 
    </div>
  );
};

export default Footer;
