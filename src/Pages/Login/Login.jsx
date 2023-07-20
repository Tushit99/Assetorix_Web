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

const Login = () => {
    return (
        <> 
            <Box position={"relative"} w={"full"} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <div className={style.detail}>
                    <Flex >
                        <Box spacing={4} gap={"20px"} className={style.log_info} >
                            <Heading fontSize={{base:'4xl',lg:'2xl'}}>Login to your account</Heading>
                            <FormControl id="email">
                                <FormLabel fontSize={{base:'2xl',lg:'xl'}}>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel fontSize={{base:'2xl',lg:'xl'}}>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack 
                                    direction={{ base: 'column', sm: 'row' }}  
                                    align={'start'} 
                                    justify={'space-between'}>
                                    <Checkbox size='lg'>Remember me</Checkbox>
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

            {/* styling components */}
            <div className={style.area} >
                <ul className={style.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    );
}

export default Login; 
