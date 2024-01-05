import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Divider,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
  Avatar,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import style from "../MyLeads.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { convertDateFormat } from "../../QueryPage/Querydesc/code/code";
import comment from "../nocomments.png";

const Preview = ({ detail }) => {
  const { user } = useSelector((state) => state.userreducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Button
        size="sm"
        leftIcon={<ViewIcon />}
        onClick={onOpen}
        borderRadius={0}
        colorScheme={"green"}
      >
        Preview
      </Button>

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
                  <Avatar size="lg" name={detail?.name} borderRadius={4} />
                </Box>
                <Box textAlign={"left"} flex={3}>
                  <Box
                    display={"flex"}
                    alignItems={"flex-end"}
                    justifyContent={"space-between"}
                  >
                    <Heading size={"sm"} as={"h2"}>
                      {detail?.name}
                    </Heading>
                    <Badge
                      variant="solid"
                      colorScheme={
                        detail?.formType == "Rent"
                          ? "red"
                          : detail?.formType == "Sell"
                          ? "green"
                          : "blue"
                      }
                      fontWeight={"bold"}
                      fontSize="0.7em"
                    >
                      {detail?.formType}
                    </Badge>
                  </Box>
                  <Text display={detail?.email ? "block" : "none"}>
                    <strong>Email:</strong> {detail?.email}
                  </Text>
                  <Text display={detail?.mobile ? "block" : "none"}>
                    <strong>mobile:</strong> {detail?.mobile}
                  </Text>
                  <Text
                    fontsize={"sm"}
                    display={detail?.propertyType == "None" ? "none" : "block"}
                  >
                    <strong>Property Type:</strong> {detail?.propertyType}
                  </Text>

                  <Text fontsize={"md"} className={style?.des}>
                    <strong>Requirement:</strong> {detail?.description}
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
                <Box >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"} 
                    overflowY={"scroll"}
                    paddingBottom={{ base: "40px", md: "0px" }}
                    height={{ base: "auto", md: "70vh" }}
                  >
                    {detail.replies.length < 1 ? ( 
                      <Image src={comment} w={"60%"} margin={"auto"} alt="no comment" />
                    ) : (
                      detail.replies.map((e, i) => (
                        <Box
                          display={"flex"}
                          key={i}
                          padding={"20px"}
                          gap={"20px"}
                        >
                          <Box
                            flex={1}
                            display={
                              detail?.userID !== user?.id ? "block" : "none"
                            }
                          >
                            <Avatar size="md" name={detail.name} />
                          </Box>
                          <Box
                            textAlign={
                              detail?.userID == user?.id ? "right" : "left"
                            }
                            flex={8}
                          >
                            <Heading size={"sm"} as={"h2"}>
                              {detail?.name}
                            </Heading>
                            <Text fontSize={"10px"} marginTop={1}>
                              {convertDateFormat(e.createdOn)}
                            </Text>
                            <Text
                              fontsize={"md"}
                              marginTop={3}
                              className={style?.des}
                            >
                              {detail?.message}
                            </Text>
                          </Box>
                          <Box
                            flex={1}
                            display={
                              detail?.userID == user?.id ? "block" : "none"
                            }
                          >
                            <Avatar size="md" name={detail.name} />
                          </Box>
                        </Box>
                      ))
                    )} 
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Preview;
