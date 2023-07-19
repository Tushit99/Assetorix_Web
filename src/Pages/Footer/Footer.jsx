import {
  Box,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo/Logo";
import style from "./Footer.module.css";
import {
  BsArrowRight,
  BsFacebook, 
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"; 
import {FaLinkedinIn} from "react-icons/fa"; 

const Footer = () => {
  return (
    <div> 
      <Box className={style.footer}>
        {/* footer */}
        <Box  
          p={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Research </Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Careers </Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Help </Link>
          <Link href={"#"}>Fair Housing Guide</Link>
          <Link href={"#"}>Advertise</Link>
          <Link href={"#"}>Contact Us</Link>
          <Link href={"#"}>Partners</Link>
          <Link href={"#"}>Cookies Policy</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms of Service</Link>
          <Link href={"#"}>Law Enforcement</Link>
          <Link href={"#"}>Facebook</Link>
          <Link href={"#"}>Twitter</Link>
          <Link href={"#"}>Dribbble</Link>
          <Link href={"#"}>Instagram</Link>
          <Link href={"#"}>LinkedIn</Link>
        </Box>
        {/* footer Warning line  */}
        <Box className={style.info_warning}>
          <h3>
            Do Not Sell or Share My Personal Information <BsArrowRight />
          </h3>
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
          AssetOrix Group is committed to ensuring digital accessibility for
          individuals with disabilities. We are continuously working to improve
          the accessibility of our web experience for everyone, and we welcome
          feedback and accommodation requests. If you wish to report an issue or
          seek an accommodation, please
        </Text>
        <Text className={style.underline}>let us know.</Text>

        {/* line with logo */}
        <Box className={style.contact}> 
          <h1> 
            <BsFacebook size={"24px"} /> 
          </h1>
          <h1>
            <BsInstagram size={"24px"} />
          </h1>
          <h1>
            <BsTwitter size={"24px"} />
          </h1> 
          <h1>
            <FaLinkedinIn size={"24px"} />
          </h1>
        </Box>  
      </Box>
    </div>
  );
};

export default Footer;
