import {
  Button, 
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input, 
  Stack,
  Image,
} from '@chakra-ui/react';  
import sideimg from "./side.png";  

const Singup = () => {   

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} w={'full'} maxW={'md'} padding={"80px 0"} > 
          <Heading fontSize={'3xl'} >Sign up to your account</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" border={"2px solid rgb(193, 206, 250)"} _hover={{border:"2px solid rgb(171, 81, 255)"}} placeholder='Enter name...' autoComplete={"off"} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel> 
            <Input type="email" border={"2px solid rgb(193, 206, 250)"} _hover={{border:"2px solid rgb(171, 81, 255)"}} placeholder='Enter email...' autoComplete={"off"} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" border={"2px solid rgb(193, 206, 250)"} _hover={{border:"2px solid rgb(171, 81, 255)"}} placeholder='Enter password...' autoComplete={"off"} /> 
          </FormControl>
          <FormControl id="mobile">
            <FormLabel>Mobile no.</FormLabel>
            <Input type="number" border={"2px solid rgb(193, 206, 250)"} _hover={{border:"2px solid rgb(171, 81, 255)"}} placeholder='mobile no...' autoComplete={"off"} /> 
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}> 
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
          src={sideimg}  
        />
      </Flex>
    </Stack>
  );
}

export default Singup