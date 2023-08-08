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
  useDisclosure, 
} from "@chakra-ui/react";
import sideimg from "./backimg.png";
import { useEffect, useState } from "react";
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
  // const [val, setVal] = "";
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handlesave = () => {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (name.length <= 2) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Please fill your name
          </Box>
        ),
      });
    }
    else if (number.length <= 9 || number.length > 10) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            mobile no. should be of 10 digits only
          </Box> 
        ),
      });
    }
    else if (password.length == "") {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Please Enter your password!
          </Box>
        ),
      });
    }
    else if (!password.match(lowerCase)) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Password should contains lowercase letters!
          </Box>
        ),
      });
    } else if (!password.match(upperCase)) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Password should contain uppercase letters!
          </Box>
        ),
      });
    } else if (!password.match(numbers)) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Password should contains numbers also!
          </Box>
        ),
      });
    } else if (password.length < 6) {
      toast({
        position: "top-right",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Password length should be more than 5
          </Box>
        ),
      });
    }
    else {
      let body = {
        name,
        password,
        mobile: number,
      };
      dispatch(signinuser(body));
    }
  };

  useEffect(() => {
    if (data.isError) {
      toast({
        title: `${data.error}`,
        status: 'warning',
        duration: 2000, 
      });
    }
    if (data.success == 0) {
      toast({
        title: 'Account created Successfully', 
        status: 'success',
        duration: 4000, 
      })
      navigate("/");
    }
  }, [data]);

  console.log(data); 

  // const handleotp = () => { }; 

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
              required={true}
              type="text"
              onChange={(e) => setname(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter name..."
              autoComplete={"off"}
            />
          </FormControl>
          {/* <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter email..."
              autoComplete={"off"}
              />
            </FormControl> */}
          <FormControl id="mobile">
            <FormLabel>Mobile no.</FormLabel>
            <Input
              type="number"
              onChange={(e) => setnumber(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="mobile no..."
              autoComplete={"off"}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter password..."
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
            {/* modal box end */}
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        display={{ base: "none", md: "flex" }}
        objectFit={"contain"}
        padding={"30px"}
        alignItems={"end"}
      > 
        <Image alt={"Login Image"} objectFit={"cover"} src={sideimg} />
      </Flex>
    </Stack>
  );
};

export default Singup;
