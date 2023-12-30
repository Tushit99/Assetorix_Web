import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ModalHeader,
  Avatar,
  Badge,
  Input,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import style from "../QueryPage.module.css";
import axios from "axios";
import { convertDateFormat } from "./code/code";

const Querydesc = ({ e }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [replies, setReplies] = useState([]);  
 

  const fetchreplies = async () => {
    onOpen();
    try {
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/single/${e._id}`)
        .then((e) => {
          // console.log(e?.data?.replies);
          // let data = e?.data?.replies.reverse()
          setReplies(e?.data?.replies);  
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        as={"div"}
        cursor={"pointer"}
        onClick={fetchreplies}
        className={style.flex}
      >
        <Box flex={1}>
          <Avatar size="lg" name={e.name} borderRadius={4} />
        </Box>
        <Box textAlign={"left"} flex={3}>
          <Box className={style.posttype}>
            <Badge
              variant="solid"
              colorScheme={
                e?.formType == "Rent"
                  ? "red"
                  : e?.formType == "Sell"
                  ? "green"
                  : "blue"
              }
              fontWeight={"bold"}
              fontSize="0.7em"
            >
              {e?.formType}
            </Badge>
          </Box>
          <Heading size={"md"} as={"h2"}>
            {e?.name}
          </Heading>
          <Text display={e?.email ? "block" : "none"}>
            {" "}
            <strong>Email:</strong> {e?.email}{" "}
          </Text>
          <Text display={e?.mobile ? "block" : "none"}>
            {" "}
            <strong>mobile:</strong> {e?.mobile}{" "}
          </Text>
          <Text
            fontsize={"md"}
            display={e?.propertyType == "None" ? "none" : "block"}
          >
            <strong>Property Type:</strong> {e?.propertyType}
          </Text>
          <Text fontsize={"lg"} className={style?.des}>
            <strong>Requirement:</strong> {e?.description}
          </Text>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        size={{ base: "full", md: "4xl" }}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={{ base: "grid", md: "flex" }} gap={"20px"}>
              {/* Querie detail */}
              <Box flex={6}>
                <Box flex={1}>
                  <Avatar size="lg" name={e?.name} borderRadius={4} />
                </Box>
                <Box textAlign={"left"} flex={3}>
                  <Box
                    display={"flex"}
                    alignItems={"flex-end"}
                    justifyContent={"space-between"}
                  >
                    <Heading size={"sm"} as={"h2"}>
                      {e?.name}
                    </Heading>
                    <Badge
                      variant="solid"
                      colorScheme={
                        e?.formType == "Rent"
                          ? "red"
                          : e?.formType == "Sell"
                          ? "green"
                          : "blue"
                      }
                      fontWeight={"bold"}
                      fontSize="0.7em"
                    >
                      {e?.formType}
                    </Badge>
                  </Box>
                  <Text display={e?.email ? "block" : "none"}>
                    <strong>Email:</strong> {e?.email}
                  </Text>
                  <Text display={e?.mobile ? "block" : "none"}>
                    <strong>mobile:</strong> {e?.mobile}
                  </Text>
                  <Text
                    fontsize={"sm"}
                    display={e?.propertyType == "None" ? "none" : "block"}
                  >
                    <strong>Property Type:</strong> {e?.propertyType}
                  </Text>

                  <Text fontsize={"md"} className={style?.des}>
                    <strong>Requirement:</strong> {e?.description}
                  </Text>
                </Box>
              </Box>
              <Divider
                orientation="vertical"
                h={"auto"}
                border={"1px solid black"}
              />
              {/* replyes detail */}
              <Box flex={6}>
                <Box  
                  display={"grid"}
                  gap={"10px"}
                  overflowY={"scroll"}  
                  paddingBottom={{base:"40px",md:"0px"}} 
                  height={{ base: "auto", md: "70vh" }}
                >
                  {replies.reverse().map((e, i) => (
                    <Box display={"flex"} key={i} padding={"20px"} gap={"20px"}>
                      <Box flex={1}>
                        <Avatar size="md" name={e.name} />
                      </Box>
                      <Box textAlign={"left"} flex={8}>
                        <Heading size={"sm"} as={"h2"}>
                          {e?.name}
                        </Heading>
                        <Text fontSize={"10px"} marginTop={1}>
                          {convertDateFormat(e.createdOn)}
                        </Text>
                        <Text
                          fontsize={"md"}
                          marginTop={3}
                          className={style?.des}
                        >
                          {e?.message}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box display={"flex"} position={{base:"fixed",md:"relative"}} bottom={0} w={"100%"} left={0} right={0} gap={"2px"}>
                  <Input type="text" flex={8} placeholder={"enter message"} variant={"solid"} border={"1px solid blue"} />
                  <Button borderRadius={0} colorScheme="blue" variant={"solid"} flex={1}> send </Button>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Querydesc;
