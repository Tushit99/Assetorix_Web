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
} from '@chakra-ui/react';  

const Singup = () => {   

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} w={'full'} maxW={'md'} padding={"80px 0"} border={"2px solid black"}> 
          <Heading fontSize={'2xl'}>Sign up to your account</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" autoComplete={"off"} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel> 
            <Input type="email" autoComplete={"off"} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" autoComplete={"off"} /> 
          </FormControl>
          <FormControl id="mobile">
            <FormLabel>Mobile no.</FormLabel>
            <Input type="number" autoComplete={"off"} /> 
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
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

export default Singup