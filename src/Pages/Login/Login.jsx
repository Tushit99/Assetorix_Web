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
            <Box position={"relative"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <div className={style.detail}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <Heading fontSize={'2xl'}>Login in to your account</Heading>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.500'}>Forgot password?</Link>
                                </Stack>
                                <Button colorScheme={'blue'} variant={'solid'}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image  
                            alt={'Login Image'}
                            objectFit={'cover'} 
                            src={img}
                        />
                    </Flex>
                </div>
            </Box>
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
