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
  UnorderedList,
  ListItem,
  List,
  ListIcon,
  InputGroup,
  InputRightElement,
  Text,
  // useDisclosure,
} from "@chakra-ui/react";
import sideimg from "./backimg.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinuser } from "../../Redux/userauth/action";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import BeatLoader from "react-spinners/BeatLoader";
import style from "./Siginup.module.css";

const Singup = () => {
  const data = useSelector((store) => store.userreducer);
  const toast = useToast();
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nameWarning, setNamewarning] = useState("");
  const [mobileWarning, setMobilewarning] = useState("");
  const [requirements, setRequirements] = useState(false);
  const [show, setShow] = useState(false);

  // const [val, setVal] = "";
  // const { isOpen, onOpen, onClose } = useDisclosure(); 

  const handleInputChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, ''); // Regex to remove special characters


    // Check if the original value differs from the sanitized value
    if (value !== sanitizedValue) {
      toast({
        title: 'Special characters are not allowed',
        status: 'warning',
        duration: 1000,
      })
    } else {
      setname(sanitizedValue);
    }
  };

  const handlesave = () => {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (name.length <= 2) {
      setNamewarning("Please fill your full name")
    }
    else if (number.length <= 9 || number.length > 10) {
      setNamewarning("");
      setMobilewarning("Mobile no. should be of 10 digits");
    }
    else if (password.length == 0) { 
      setNamewarning("");
      setMobilewarning("");
    }
    else if (!password.match(lowerCase)) {
      setNamewarning("");
      setMobilewarning("");
    } else if (!password.match(upperCase)) {
      setNamewarning("");
      setMobilewarning("");
    } else if (!password.match(numbers)) {
      setNamewarning("");
      setMobilewarning("");
    } else if (password.length < 6) {
      setNamewarning("");
      setMobilewarning("");
    }
    else {
      setNamewarning("");
      setMobilewarning("");

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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [data]);


  const handlePassword = (pass) => {
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var numbers = /[0-9]/;

    const meetsRequirements = pass.length >= 6 &&
      lowerCase.test(pass) &&
      upperCase.test(pass) &&
      numbers.test(pass);

    setRequirements(meetsRequirements);

    const sanitizedPassword = pass.replace(/[^a-zA-Z\s!@#$%&*{}0-9]/g, '');
    setPassword(sanitizedPassword);
  };

  const handleshowPassword = () => {
    setShow(!show);
  }

  return (
    <Stack
      minH={"60vh"}
      marginBottom={"20px"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        p={{ base: "4", lg: "8" }}
        flex={22}
        // align={"baseline"}
        justify={"center"}
      >
        <Stack
          w={"full"}
          maxW={"xl"}
          padding={"30px"}
          marginTop={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px "} 
          borderRadius={"8px"}
        >
          <Heading fontSize={"3xl"}>Sign up to your account</Heading>
          {/* Name */}
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              required={true}
              type="text"
              maxLength={20}
              value={name}
              borderRadius={0}
              onChange={handleInputChange}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter name..."
              autoComplete={"off"}
            />
          </FormControl>
          <UnorderedList fontSize={"xs"} color={"red"} display={nameWarning.length ? "flex" : "none"}>
            <ListItem>
              {nameWarning}
            </ListItem>
          </UnorderedList>
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
          {/* Mobile no. */}
          <FormControl id="mobile">
            <FormLabel>Mobile no.</FormLabel>
            <Input
              type="text"
              onChange={(e) => setnumber(e.target.value)}
              maxLength={10}
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="mobile no..."
              autoComplete={"off"}
            />
          </FormControl>
          <UnorderedList fontSize={"xs"} color={"red"} display={mobileWarning.length ? "flex" : "none"}>
            <ListItem>
              {mobileWarning}
            </ListItem>
          </UnorderedList>
          {/* Password */}
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? "password" : "text"}
                onChange={(e) => handlePassword(e.target.value)}
                maxLength={20}
                border={"2px solid rgb(193, 206, 250)"}
                _hover={{ border: "2px solid rgb(171, 81, 255)" }}
                placeholder="Enter password..."
                autoComplete={"off"}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' variant='outline' colorScheme='linkedin' size='sm' onClick={handleshowPassword}>
                  {show ? 'Show' : 'Hide'}   
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <List spacing={0} fontSize={"xs"} textAlign={"left"} display={requirements ? "none" : "block"} >
            <ListItem>
              <ListIcon as={/[a-z]/.test(password) ? CheckCircleIcon : InfoIcon} color={/[a-z]/.test(password) ? 'green.500' : "red"} />
              should contains lowercase letters!
            </ListItem>
            <ListItem>
              <ListIcon as={/[A-Z]/.test(password) ? CheckCircleIcon : InfoIcon} color={/[A-Z]/.test(password) ? 'green.500' : "red"} />
              should contains uppercase letters!
            </ListItem>
            <ListItem>
              <ListIcon as={/[0-9]/.test(password) ? CheckCircleIcon : InfoIcon} color={/[0-9]/.test(password) ? 'green.500' : "red"} />
              Password should contains numbers!
            </ListItem>
            <ListItem>
              <ListIcon as={password.length > 5 ? CheckCircleIcon : InfoIcon} color={password.length > 5 ? 'green.500' : "red"} />
              Password length should be more then 5
            </ListItem>
          </List>
          <Stack spacing={0}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            ></Stack>
            <Button
              isLoading={data.isLoading}
              spinner={<BeatLoader size={8} color='white' />}
              loadingText='Sign up...'
              spinnerPlacement='end'
              colorScheme={"blue"}
              onClick={handlesave}
              variant={"solid"}>
              Sign up
            </Button>
            {/* modal box end */}
          </Stack>
          <Text textAlign={"center"} margin={"10px auto 0 auto"} > Already a user? <Link to={"/login"} className={style.loginpage} >Login</Link> </Text>
        </Stack>
      </Flex>
      <Flex
        flex={18}
        display={{ base: "none", md: "flex" }}
        objectFit={"contain"}
        alignItems={"flex-start"}
        padding={0}
      >
        <Image alt={"Login Image"} padding={"0 20px"} objectFit={"contain"} src={sideimg} />
      </Flex>
    </Stack>
  );
};

export default Singup;
