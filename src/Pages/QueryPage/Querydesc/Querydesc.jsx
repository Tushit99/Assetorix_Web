import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalHeader,
  Avatar,
  Badge,
  Input,
  Divider,
  useToast,
  Heading,
  Text,
} from "@chakra-ui/react";
import style from "../QueryPage.module.css";
import axios from "axios";
import { convertDateFormat } from "./code/code";
import { useSelector } from "react-redux";
import { EmailIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Querydesc = ({ e }) => {
  const { user } = useSelector((state) => state.userreducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [replies, setReplies] = useState([]);
  const [message, setMessage] = useState("");
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const fetchreplies = async () => {
    onOpen();
    setLoading(true);
    try {
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/single/${e._id}`)
        .then((e) => {
          console.log(e?.data?.replies);
          // let data = e?.data?.replies.reverse()
          setReplies(e?.data?.replies.reverse());
          setLoading(false);
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

  const submitmessage = async () => {
    setLoading(true);
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
        setLoading(false);
        return;
      }

      const body = {
        message: message,
      };

      await axios
        .post(`${process.env.REACT_APP_URL}/leadForm/${e._id}/replies`, body, {
          headers: head,
        })
        .then((e) => {
          console.log(e);
          setReplies(e?.data?.data?.replies.reverse());
          setMessage("");
          setLoading(false);
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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitmessage();
    } else {
      return;
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
                <Box
                  flex={1}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Avatar size="lg" name={e?.name} borderRadius={4} />
                  <Badge variant="solid" colorScheme={"blue"} fontSize={"2xs"}>
                    {convertDateFormat(e.createdOn)}
                  </Badge>
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
                {/* Contact Detail */}
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  margin={"10px 0"}
                >
                  <Button
                    size={"sm"}
                    as="a"
                    href={`mailto:${e.email}`}
                    target="_blank"
                    leftIcon={<EmailIcon />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Email
                  </Button>
                  <Button
                    size={"sm"}
                    target="_blank"
                    as="a"
                    href={`https://wa.me/${e.mobile}`}
                  >
                    Whatsapp
                  </Button>
                  <Button
                    size={"sm"}
                    rightIcon={<MdCall />}
                    colorScheme="blue"
                    target="_blank"
                    as="a"
                    href={`tel:+91-${e.mobile}`}
                    variant="outline"
                  >
                    mobile
                  </Button>
                </Box>
              </Box>
              <Divider
                orientation="vertical"
                h={"auto"}
                border={"1px solid black"}
              />
              {/* replyes detail */}
              <Box flex={6}>
                <Box>
                  {loading == true ? (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"10px"}
                      overflowY={"scroll"}
                      paddingBottom={{ base: "40px", md: "0px" }}
                      height={{ base: "auto", md: "70vh" }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((e, i) => (
                        <Box
                          display={"flex"}
                          key={i}
                          padding={"20px"}
                          gap={"20px"}
                        >
                          <Box flex={1}>
                            <Skeleton
                              height={"60px"}
                              width={"60px"}
                              borderRadius={"50px"}
                              baseColor="#9AE6FF"
                            />
                          </Box>
                          <Box textAlign={"left"} flex={8}>
                            <Heading size={"sm"} as={"h2"}>
                              <Skeleton baseColor="#9AE6FF" />
                            </Heading>
                            <Text fontSize={"10px"} marginTop={1}>
                              <Skeleton baseColor="#9AE6FF" />
                            </Text>
                            <Text
                              fontsize={"md"}
                              marginTop={3}
                              className={style?.des}
                            >
                              <Skeleton baseColor="#9AE6FF" />
                            </Text>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"10px"}
                      overflowY={"scroll"}
                      paddingBottom={{ base: "40px", md: "0px" }}
                      height={{ base: "auto", md: "70vh" }}
                    >
                      {replies.map((e, i) => (
                        <Box
                          display={"flex"}
                          key={i}
                          padding={"20px"}
                          gap={"20px"}
                        >
                          <Box
                            flex={1}
                            display={e?.userID !== user?.id ? "block" : "none"}
                          >
                            <Avatar size="md" name={e.name} />
                          </Box>
                          <Box
                            textAlign={e?.userID == user?.id ? "right" : "left"}
                            flex={8}
                          >
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
                          <Box
                            flex={1}
                            display={e?.userID == user?.id ? "block" : "none"}
                          >
                            <Avatar size="md" name={e.name} />
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
                <Box
                  display={"flex"}
                  position={{ base: "fixed", md: "relative" }}
                  bottom={0}
                  w={"100%"}
                  left={0}
                  right={0}
                  gap={"2px"}
                >
                  <Input
                    type="text"
                    flex={8}
                    value={message}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={"enter message"}
                    variant={"solid"}
                    border={"1px solid blue"}
                  />
                  <Button
                    borderRadius={0}
                    colorScheme="blue"
                    variant={"solid"}
                    flex={1}
                    onClick={submitmessage}
                  >
                    send
                  </Button>
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
