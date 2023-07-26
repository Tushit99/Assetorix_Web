import {
  Box,
  Container,
  Stack,
  Text,
  Image, 
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'; 
import style from "./Product.module.css"; 

const imgs =[ 
    "https://photos.zillowstatic.com/fp/b16cca62600af0fac54f79364f61b6ff-cc_ft_768.webp", 
    "https://photos.zillowstatic.com/fp/27efae838aebb06f5b98cd163150e9b1-cc_ft_768.webp", 
    "https://photos.zillowstatic.com/fp/77a6e3b0a2b7eabcf230578b8bf23c6a-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/70ea44f1493b2f753372a5e14f0459be-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/2de413a66210a1613b7c0428503f7bf3-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/ce5d1d7d780e90847e5ff2faee0e019d-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/fea7b45ace81d117838ef3aac2c8364f-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/25274ad6caa8cb9466a73d8a0875a6d3-cc_ft_384.webp",  
    "https://photos.zillowstatic.com/fp/ff7b819b67f527886d6e6ad5346977cc-cc_ft_384.webp",  
    "https://photos.zillowstatic.com/fp/833054c8c3fefd45c61023a834def3d4-cc_ft_384.webp", 
    "https://photos.zillowstatic.com/fp/76447c9ef29a71598371ae1bc03c8693-cc_ft_384.webp", 
   "https://photos.zillowstatic.com/fp/3c965fe6b2233d875691c5d78b9e379f-cc_ft_384.webp" 
]

const ProductDetail = () => {
  // const 

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        w={"90%"}
        margin={"100px auto 40px auto"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: "18px", md: "24px" }}>
        <Box display={"grid"}>  
          <Image
            rounded={'md'}
            alt={'product image'}
            src={'https://photos.zillowstatic.com/fp/871fade17c06905c8808a3cb1a942162-cc_ft_1344.webp'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          /> 
          <Box className={style.img_box}>  
            {imgs.map((e,i)=>(
              <Box id={i+1} >
                <img src={e} w={"100%"} alt="image_url_wrong" />
              </Box>
            ))}
          </Box>
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              textAlign={"left"}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Godrej Exquisite Noida
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              textAlign={"left"}
              fontSize={'2xl'}>
              Price: ₹2.43 Cr to 3.00 Cr
            </Text>
            <Breadcrumb separator='|'>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>3 bd</BreadcrumbLink>
              </BreadcrumbItem>  

              <BreadcrumbItem>
                <BreadcrumbLink href='#'>2 ba</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>2,268 sqft</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={"black"} 
                fontSize={'xl'}
                textAlign={"left"} 
                fontWeight={'300'}>
                Est. payment: $3,449/month
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text> 
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack> 
          
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetail;
