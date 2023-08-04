import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
  Box,
} from "@chakra-ui/react";
import sideimg from "./backimg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinuser } from "../../Redux/userauth/action";

const Singup = () => {
  const data = useSelector((store) => store.userreducer);
  const toast = useToast();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesave = () => {
    if ( name.length == "" || email.length == "" || password.length == "" || number.length == "" ) {
      toast({
        position: "bottom-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Please fill all required information 
          </Box>
        ),
      });
    } else {
      let obj = {
        avatar: "", 
        name,
        email,
        password,
        mobile: number,
      };
      dispatch(signinuser(obj)); 
      toast({ 
        title: "Account created.",
        description: "Your Account is created successfully",
        status: "success",
        duration: 2000, 
      });  
      navigate("/login");
    }
  };

  return (
    <Stack
      minH={"60vh"}
      direction={{ base: "column", md: "row" }}
      padding={"20px 0"}
    >
      <Flex
        p={{ base: "4", lg: "8" }}
        marginTop={"30px"}
        flex={1}
        align={"baseline"}
        justify={"center"}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          padding={"30px"}
          marginTop={{ base: "20px", lg: "50px" }}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px "}
          borderRadius={"8px"}
        >
          <Heading fontSize={"3xl"}>Sign up to your account</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              required
              type="text"
              onChange={(e) => setname(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter name..."
              autoComplete={"off"}
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              required
              type="email"
              onChange={(e) => setemail(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter email..."
              autoComplete={"off"}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              required
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter password..."
              autoComplete={"off"}
            />
          </FormControl>
          <FormControl id="mobile">
            <FormLabel>Mobile no.</FormLabel>
            <Input
              required
              type="number"
              onChange={(e) => setnumber(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="mobile no..."
              autoComplete={"off"}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            ></Stack>
            <Button colorScheme={"blue"} onClick={handlesave} variant={"solid"}>
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        display={{ base: "none", md: "block" }}
        objectFit={"contain"}
        padding={"30px"}
      >
        <Image alt={"Login Image"} objectFit={"cover"} src={sideimg} />
      </Flex>
    </Stack>
  );
};

export default Singup;
