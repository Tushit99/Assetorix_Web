import React, { useEffect, useState } from "react";
import {
  Box,
  useToast,
  Button,
  Heading,
  TableContainer,
  Tbody,
  Tr,
  Divider,
  Td,
  Table,
  Text,
  Flex,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import style from "./MyLeads.module.css";
import EditForm from "./EditForm/EditForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import { ViewIcon } from "@chakra-ui/icons";
import { handldatetransform } from "./code";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdOutlineEditNote } from "react-icons/md";
import { DeleteIcon } from "@chakra-ui/icons";
import Preview from "./Preview/Preview";

const MyLeads = () => {
  const [data, setData] = useState([]);
  const toast = useToast(); 
  const [change, setChange] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlechange = () => {
    setChange((prev) => +prev + +1);
  };

  const fetchQuery = async () => {
    setLoading(true); 
    setData([]); 
    try {
      let id = localStorage.getItem("usrId") || undefined;
      let authorization = localStorage.getItem("AstToken") || undefined;

      let head = { id, authorization, "Content-type": "application/json" };

      if (!id || !authorization) {
        toast({
          title: "Kindly log in to send message.",
          description: "Login required for sending message.",
          status: "error",
          duration: 2000,
          position: "top-right",
        });
        return;
      }
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm`, { headers: head })
        .then((e) => {
          setData(e.data);
          setLoading(false);
          console.log(e.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(change);

  useEffect(() => {
    fetchQuery();
  }, [change]);

  return (
    <Box margin={"30px auto 80px auto"}>
      <Heading> My Leads </Heading>
      <Box className={style.leads}>
        {/* while data is Loading ( Loader ) */}
        {loading &&
          [1, 2, 3].map((e) => (
            <Box key={e} paddingRight={"20px"} as={"div"}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Heading size={"md"} textTransform={"capitalize"} width={"30%"}>
                  <Skeleton baseColor="#9AE6FF" />
                </Heading>
                <Text width={"30%"}>
                  <Skeleton baseColor="#9AE6FF" />
                </Text>
              </Box>
              <Divider border={"1px solid rgb(150, 150, 150)"} />
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Tbody>
                    <Tr display={"flex"}>
                      <Td flex={1}>Mobile </Td>
                      <Td flex={1}>
                        <Skeleton baseColor="#9AE6FF" />
                      </Td>
                    </Tr>
                    <Tr display={"flex"}>
                      <Td flex={1}>Email </Td>
                      <Td flex={1}>
                        <Skeleton baseColor="#9AE6FF" />
                      </Td>
                    </Tr>
                    <Tr display={"flex"}>
                      <Td flex={1}>Form Type </Td>
                      <Td flex={1}>
                        <Skeleton baseColor="#9AE6FF" />
                      </Td>
                    </Tr>
                    <Tr display={"flex"}>
                      <Td flex={1}>Property Type </Td>
                      <Td flex={1}>
                        <Skeleton baseColor="#9AE6FF" />
                      </Td>
                    </Tr>
                    <Tr display={"flex"}>
                      <Td flex={1}>Verification Status </Td>
                      <Td flex={1}>
                        <Skeleton baseColor="#9AE6FF" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Box display={"flex"} gap={"4px"} marginLeft={"16px"} >
                <Text fontSize={"sm"} >Description -  </Text>
                <Text fontSize={"sm"} className={style.maxline}>
                  <Skeleton baseColor="#9AE6FF" />
                </Text>
              </Box>
              <Flex
                width={"100%"}
                marginTop={"10px"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Button size="sm" borderRadius={0} colorScheme={"green"}>
                  <Skeleton baseColor="#2f855a" width={"60px"} />
                </Button>
                <Button colorScheme="blue" size="sm" borderRadius={0}>
                  <Skeleton baseColor="#2b6cb0" width={"60px"} />
                </Button>
                <Button size="sm" colorScheme="red" borderRadius={0}>
                  <Skeleton baseColor="#c53030" width={"60px"} />
                </Button>
              </Flex>
            </Box>
          ))}
        {/* after data is loaded */}
        {data.map((detail) => (
          <Box key={detail._id} paddingRight={"20px"} as={"div"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Heading size={"md"} textTransform={"capitalize"}>
                {detail.name}
              </Heading>
              <Box fontSize={"sm"}> 
                <Badge
                  variant="subtle"
                  color={"#636262"}
                  colorScheme="blue"
                  padding={"0 5px"}
                > 
                  {handldatetransform(detail.createdOn)}
                </Badge>
              </Box>
            </Box>
            <Divider border={"1px solid rgb(150, 150, 150)"} />
            <TableContainer>
              <Table size="sm" variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Mobile  </Td>
                    <Td>{detail.mobile} </Td>
                  </Tr>
                  <Tr>
                    <Td>Email  </Td>
                    <Td>{detail.email} </Td>
                  </Tr>
                  <Tr>
                    <Td>Form Type </Td>
                    <Td>{detail.formType} </Td>
                  </Tr>
                  <Tr>
                    <Td>Property Type </Td>
                    <Td>{detail.propertyType} </Td>
                  </Tr>
                  <Tr>
                    <Td>Verification Status </Td>
                    <Td>
                      <Badge
                        variant="outline"
                        fontWeight="bold"
                        colorScheme={
                          detail.verificationState == "Approved"
                            ? "green"
                            : "blue"
                        }
                      >
                        {detail.verificationState}
                      </Badge>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Box display={"flex"} gap={"4px"}>  
              <Text fontSize={"sm"} marginLeft={"16px"}>Description&nbsp;- </Text>
              <Text fontSize={"sm"} className={style.maxline} >
                {detail.description}  
              </Text>
            </Box> 
            <Flex
              width={"100%"}
              marginTop={"10px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Preview detail={detail} />
              <EditForm detail={detail} handlechange={handlechange} />
              <DeleteForm queryid={detail._id} handlechange={handlechange} />
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyLeads;
