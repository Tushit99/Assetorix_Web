import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Box,
    useToast,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import style from "./Login.module.css";
import img from "./sideimg.png";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../../Redux/userauth/action';
// import axios from 'axios';

const Login = ({ onpage }) => {
    const data = useSelector((store) => store.userreducer);
    const toast = useToast();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setshow] = useState(true); 
    const [val, setVal] = useState(0);  


    const handlelogin = async () => {
        if (mobile.length <= 9 || mobile.length >= 11) {
            toast({
                position: 'top-right',
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Mobile number is invalide!
                    </Box>
                ),
            })
        }
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (password.length == "") {
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
            // console.log(obj);  
            let body = {
                mobile,
                password
            }
            dispatch(loginuser(body));
        }
    }

    useEffect(() => {
        if (data.isError) {
            toast({
                title: `${data.error}`,
                status: 'warning',
                duration: 4000,
                isClosable: true
            });
        }
        if (data.success == 0) {
            toast({
                title: 'Login Succesfull',
                status: 'success',
                duration: 4000,
            })
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
    }

    const handlekeybox = (e) => {
        if (e.key === "Enter") {
            if (mobile.length > 2 && password.length > 3 && val==0) {
                handlelogin(); 
                setVal((prev)=>prev+1); 
            }
        }
    }

    // console.log(data);

    return (
        <div className={style.signin_topbox}>
            <Box position={"relative"} w={"full"} marginTop={"10px"} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <div className={style.detail}>
                    {/* sigin image */}
                    <Flex className={style.login_img} >
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={img}
                        />
                    </Flex>
                    {/* Login Form  */}
                    <Flex >
                        <Box spacing={4} gap={{ base: "10px", md: "20px" }} className={style.log_info} >
                            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}>Login to your account</Heading>
                            <FormControl id="number">
                                <FormLabel fontSize={{ base: 'md', lg: 'xl' }}>Mobile no.</FormLabel>
                                <Input type="text" placeholder='Enter mobile no.' onChange={(e) => setMobile(e.target.value)} value={mobile} required />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontSize={{ base: 'md', lg: 'xl' }}>Password</FormLabel>
                                <InputGroup>
                                    <Input type={show ? "text" : "password"} placeholder={"Enter Password"} onKeyPress={handlekeybox} onChange={(e) => setPassword(e.target.value)} value={password} required />

                                    <InputRightElement width='4.5rem'  >
                                        <Button h='1.75rem' marginRight={2} letterSpacing={"1px"} fontWeight={"light"} color={"black"} onClick={handleShow} size='md' border={"1px solid rgb(172, 172, 172)"} backgroundColor={"unset"}  >
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={6} width={"100%"} >
                                {/* <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox size={{ base: "md", md: 'lg' }}>Remember me</Checkbox>
                                    <Link color={'blue'}>Forgot password?</Link>
                                </Stack>  */}
                                <Button className={style.logbtn} variant={'solid'} w={"full"} onClick={handlelogin} fontSize={{ base: '2xl', lg: 'xl' }} >
                                    Login
                                </Button>
                            </Stack>
                        </Box>
                    </Flex>
                </div>
            </Box>
        </div>
    );
}

export default Login; 
