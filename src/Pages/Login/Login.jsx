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
    useToast
} from '@chakra-ui/react';
import style from "./Login.module.css";
import img from "./sideimg.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../../Redux/userauth/action';
// import axios from 'axios';

const Login = () => {
    const data = useSelector((store) => store.userreducer);
    const toast = useToast();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    

    const handlelogin = async () => {
        if (email.length <= 2 || password.length <= 2) {
            toast({
                position: 'top-right',
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Please fill all required information
                    </Box>
                ),
            })
        }
        else {
            // console.log(obj);  
            let obj = {
                mobile: email,
                password
            }
            toast({
                title: 'Login Successfull',
                description: "You logged in successfully",
                status: 'success',
                duration: 2000,
            })
            dispatch(loginuser(obj));    
            // try {
                // const res = await fetch("https://assetorix.onrender.com/user/login", {
                //     method: 'POST',  
                //     headers: {  
                //         'Content-Type': 'application/json',  
                //     }, 
                //     body: JSON.stringify(obj),  
                // });
                // const data = res.json() ;  
                // console.log(data);  
            // }
            // catch (err) {
            //     console.log(err);
            // }
        }  
    } 
     console.log(data); 

    return (
        <div className={style.signin_topbox}>
            <Box position={"relative"} w={"full"} marginTop={{ base: "0px", md: "120px" }} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <div className={style.detail}>
                    <Flex >
                        <Box spacing={4} gap={{ base: "10px", md: "20px" }} className={style.log_info} >
                            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}>Login to your account</Heading>
                            <FormControl id="number">
                                <FormLabel fontSize={{ base: 'md', lg: 'xl' }}>Mobile no.</FormLabel>
                                <Input type="text" onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontSize={{ base: 'md', lg: 'xl' }}>Password</FormLabel>
                                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox size={{ base: "md", md: 'lg' }}>Remember me</Checkbox>
                                    <Link color={'blue'}>Forgot password?</Link>
                                </Stack>
                                <Button variant={'solid'} onClick={handlelogin} fontSize={{ base: '2xl', lg: 'xl' }} >
                                    Login
                                </Button>
                            </Stack>
                        </Box>
                    </Flex>
                    <Flex className={style.login_img} >
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={img}
                        />
                    </Flex>
                </div>
            </Box>
        </div>
    );
}

export default Login; 
