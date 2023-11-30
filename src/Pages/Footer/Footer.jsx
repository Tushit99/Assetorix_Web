import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Image,
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
// import {FaSquareXTwitter} from "react-icons/fa6";  
import xwhiteicon from "./whitexicon.png";
import xblackicon from "./blackxicon.png";
import insta from "./insta.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLookingFor } from "../../Redux/globalval/action";
import topimg from "./backbox.png"; 

const Footer = () => {
  const dispatch = useDispatch();

  const handleScroltop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const handlePageRent = () => {
    dispatch(changeLookingFor("Rent/Lease"));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }

  const handlePageSell = () => {
    dispatch(changeLookingFor("sell"));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }

  return (
    <Box position={"relative"} > 
      <div className={style.ft}>
        <Box className={style.footer}>
          {/* footer */}
          <Box className={style.footer_description} >
            <Box>
              <h2>Business Line</h2>
              <Link onClick={handleScroltop} to={"/residential_buy"}>Buy</Link>
              <Link onClick={handlePageRent} to={"/residential_rent"}>Rent </Link>
              <Link onClick={handlePageSell} to={"/post"}>Sell</Link>
              <Link onClick={handleScroltop} to={"#"}>Home Loan </Link>
              <Link onClick={handleScroltop} to={"#"}>Advertise </Link>
              <Link onClick={handleScroltop} to={"#"}>Agent Finder </Link>
              <Link onClick={handleScroltop} to={"#"}>Corporate Service</Link>
            </Box>
            <Box >
              <h2>Company</h2>
              <Link onClick={handleScroltop} to={"/"}>Home</Link>
              <Link onClick={handleScroltop} to={"/about"}>About Assetorix</Link>
              <Link onClick={handleScroltop} to={"#"}> Developer Partners </Link>
              <Link onClick={handleScroltop} to={"/contact"}> Contact </Link>
            </Box>
            <Box >
              <h2>Help Center</h2>
              <Link onClick={handleScroltop} to={"/user_term_condition"}>User Terms & Condition </Link>
              <Link onClick={handleScroltop} to={"/Purchase_term_Condition"}>Payment Term & Condition</Link>
              <Link onClick={handleScroltop} to={"/privacy"}>Privacy</Link>
              <Link onClick={handleScroltop} to={"/disclaimer"}>Disclaimer</Link>
            </Box>
            <Box>
              <h2>CONTACT</h2>
              <Box display={"flex"} alignItems={"flex-start"} w={"100%"} justifyContent={"center"} >
                <Box flex={1} paddingTop={1} >
                  <IoIosArrowForward size={"16px"} />
                </Box>
                <Box flex={9} textAlign={"left"} >
                  <p>Ametheus Holdings Pvt Ltd Address: 27, 2nd Floor, Hauz Khas Village, New Delhi 110016,
                    India.  <br /> <a href={"tel:+91-9990032288"}> Phone: +91 9990032288 </a>  <br />
                  </p>
                  <a href={"tel:+91-9990045588"}> +91 9990045588 </a>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"flex-start"} w={"100%"}>
                <Box flex={1} paddingTop={1}>
                  <IoIosArrowForward size={"16px"} />
                </Box>
                <Box flex={9} textAlign={"left"}>
                  <p>Email: <a href="mailto:info@assetorix.com">info@assetorix.com</a> </p>
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
            <Link to="#">
              <BiLogoLinkedin size={"24px"} />
            </Link>
            <Link target="_blank" to="https://twitter.com/assetorix">
              <img src={xwhiteicon} alt="whiteIcon" className={style.xicon2} />
              <img src={xblackicon} alt="blackIcon" className={style.xicon1} />
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
            <h3> <span className={style.blue}>assetorix.com </span>
              <span style={{ fontSize: "16px" }}>
                by Ametheus Holdings Pvt Ltd <br />
              </span>
            </h3>
            <h3>
              <span style={{ display: "flex", alignItems: "center", fontSize: "14px" }}> Marketing partner: </span>
              <span className={style.red}>Unifie Entertainment technology LLP </span>
            </h3>
          </Box>
          <Box >
            Email: <a href="mailto:info@assetorix.com">info@assetorix.com</a> <span className={style.line}> | </span> <br className={style.brs} /> Call Us at: <a href="tel:+91-9990032288"> +91 9990032288,</a>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Footer; 
