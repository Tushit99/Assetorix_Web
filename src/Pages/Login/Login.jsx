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
    Box
} from '@chakra-ui/react';
import style from "./Login.module.css"; 
import img from "./sideimg.png";  
import { useState } from 'react';

const Login = () => { 
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  

    console.log(email,password); 

    return (
        <div className={style.signin_topbox}> 
            <Box position={"relative"} w={"full"} marginTop={{base:"0px",md:"50px"}} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <div className={style.detail}> 
                    <Flex >
                        <Box spacing={4} gap={{base:"10px",md:"20px"}} className={style.log_info} >
                            <Heading fontSize={{base:'2xl',md:'4xl',lg:'2xl'}}>Login to your account</Heading>
                            <FormControl id="email">
                                <FormLabel fontSize={{base:'md',lg:'xl'}}>Email address</FormLabel>
                                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontSize={{base:'md',lg:'xl'}}>Password</FormLabel>
                                <Input type="password" onChange={(e)=>setPassword(e.target.value)} />  
                            </FormControl> 
                            <Stack spacing={6}>
                                <Stack 
                                    direction={{ base: 'column', sm: 'row' }}  
                                    align={'start'} 
                                    justify={'space-between'}>
                                    <Checkbox size={{base:"md",md:'lg'}}>Remember me</Checkbox>
                                    <Link color={'blue'}>Forgot password?</Link>
                                </Stack> 
                                <Button variant={'solid'} fontSize={{base:'2xl',lg:'xl'}} >
                                    Sign in
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
