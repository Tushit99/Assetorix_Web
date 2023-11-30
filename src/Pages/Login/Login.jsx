import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    useToast,
    InputGroup,
    InputRightElement,
    Text,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import style from "./Login.module.css";
import img from "./sideimg.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../../Redux/userauth/action";
import BeatLoader from "react-spinners/BeatLoader";

const Login = ({ onpage }) => {
    const data = useSelector((store) => store.userreducer);
    const toast = useToast();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setshow] = useState(true);
    const [mobileWarn, setMobileWarn] = useState("");
    const [warning, setWarning] = useState("");

    const handlelogin = async () => {
        if (mobile.length <= 9 || mobile.length >= 11) {
            setMobileWarn("Mobile number is invalid!");
            return;
        }
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (password.length == "") {
            setMobileWarn("");
            setWarning("Please Enter your password!");
        } else if (!password.match(lowerCase)) {
            setMobileWarn("");
            setWarning("Password should contains lowercase letters!");
        } else if (!password.match(upperCase)) {
            setMobileWarn("");
            setWarning("Password should contain uppercase letters!");
        } else if (!password.match(numbers)) {
            setMobileWarn("");
            setWarning("Password should contains numbers also!");
        } else if (password.length < 6) {
            setMobileWarn("");
            setWarning("Password length should be more than 5");
        } else {
            setMobileWarn("");
            setWarning("");
            // console.log(obj);
            let body = {
                mobile,
                password,
            };
            dispatch(loginuser(body));
        }
    };

    useEffect(() => {
        if (data.isError) {
            toast({
                title: `${data.error}`,
                status: "warning",
                duration: 4000,
                isClosable: true,
            });
        }
        if (data.success == 0) {
            toast({
                title: "Login Succesfull",
                status: "success",
                duration: 4000,
            });
            // if(onpage!=""){
            //     console.log()
            //     navigate(`${onpage}`);
            // }else{
            navigate("/");
            // }
        }
    }, [data]);

    const handleShow = () => {
        setshow(!show);
    };

    // const handlekeybox = (e) => {
    //     if (e.key === "Enter") {
    //         if (mobile.length > 2 && password.length > 3 && val == 0) {
    //             handlelogin();
    //             setVal((prev) => prev + 1);
    //         }
    //     }
    // }

    // console.log(data);

    return (
        <div className={style.signin_topbox}>
            <Box
                position={"relative"}
                w={"full"}
                marginTop={"10px"}
                direction={{ base: "column", md: "row" }}
            >
                <div className={style.detail}>
                    {/* sigin image */}
                    <Flex className={style.login_img}>
                        <Image alt={"Login Image"} objectFit={"cover"} src={img} />
                    </Flex>
                    {/* Login Form  */}
                    <Flex>
                        <Box
                            spacing={4}
                            gap={{ base: "10px", md: "20px" }}
                            className={style.log_info}
                        >
                            <Heading
                                fontWeight={"semibold"}
                                fontSize={{ base: "2xl", md: "4xl", lg: "2xl" }}
                            >
                                Login to your account
                            </Heading>
                            <FormControl id="number">
                                <FormLabel fontSize={{ base: "md", lg: "xl" }}>
                                    Mobile no.
                                </FormLabel>
                                <Input
                                    colorScheme="linkedin"
                                    type="text"
                                    maxLength={10}
                                    placeholder="Enter mobile no."
                                    onChange={(e) => {
                                        const result = (e.target.value).replace(/[^0-9]/g, "");
                                        setMobile(result)
                                    }}
                                    value={mobile}
                                    required
                                />
                                <UnorderedList
                                    fontSize={"xs"}
                                    color={"red"}
                                    margin={"0 0 0 20px"}
                                    textAlign={"left"}
                                    display={mobileWarn.length ? "flex" : "none"}
                                >
                                    <ListItem>{mobileWarn}</ListItem>
                                </UnorderedList>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontSize={{ base: "md", lg: "xl" }}>
                                    Password
                                </FormLabel>
                                <InputGroup>
                                    <Input
                                        type={show ? "text" : "password"}
                                        maxLength={"25"}
                                        placeholder={"Enter Password"}
                                        colorScheme="linkedin"
                                        onChange={(e) => {
                                            const result = (e.target.value).replace(/[^a-zA-Z0-9\-!@#$%^&*]/g, "");
                                            setPassword(result)
                                        }} 
                                        value={password}
                                        required
                                    />

                                    <InputRightElement width="4.5rem">
                                        <Button
                                            h="1.75rem"
                                            marginRight={2}
                                            letterSpacing={"1px"}
                                            fontWeight={"light"}
                                            color={"black"}
                                            onClick={handleShow}
                                            size={"sm"}
                                            border={"1px solid rgb(172, 172, 172)"}
                                            backgroundColor={"unset"}
                                        >
                                            {show ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <UnorderedList
                                    fontSize={"xs"}
                                    color={"red"}
                                    margin={"0 0 0 20px"}
                                    textAlign={"left"}
                                    display={warning.length ? "flex" : "none"}
                                >
                                    <ListItem>{warning}</ListItem>
                                </UnorderedList>
                            </FormControl>
                            <Box
                                w={"100%"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"left"}
                            >
                                <Checkbox colorScheme={"blue"} className={style.boxback}>
                                    {" "}
                                    Remember me{" "}
                                </Checkbox>
                            </Box>
                            <Box margin={0} width={"100%"}>
                                {/* <Stack 
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox size={{ base: "md", md: 'lg' }}>Remember me</Checkbox>
                                    <Link color={'blue'}>Forgot password?</Link>
                                </Stack>  */}
                                <Button
                                    className={style.logbtn}
                                    variant={data.isLoading ? "outline" : "solid"}
                                    w={"full"}
                                    isLoading={data.isLoading}
                                    spinner={<BeatLoader size={8} color="white" />}
                                    loadingText="Login"
                                    spinnerPlacement="end"
                                    colorScheme="blue"
                                    onClick={handlelogin}
                                    fontSize={{ base: "2xl", lg: "xl" }}
                                >
                                    Login
                                </Button>
                            </Box>
                            <Text className={style.resgister}>
                                {" "}
                                Don't have an acount?{" "}
                                <Link to={"/signup"} className={style.tosign}>
                                    Register
                                </Link>{" "}
                            </Text>
                        </Box>
                    </Flex>
                </div>
            </Box>
        </div>
    );
};

export default Login;
