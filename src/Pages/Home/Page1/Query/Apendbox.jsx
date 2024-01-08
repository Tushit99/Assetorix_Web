import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Input,
  useDisclosure,
  Text,
  Heading,  
  Box,
  useToast, 
  Button,
} from "@chakra-ui/react";
import style from "./WithStyles.module.css";
import axios from "axios"; 


const Apendbox = ({e}) => {
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

  return (
    <Box className={style.mapbox} onClick={fetchreplies}>
      <Box flex={1} className={`${style.placeCenter}`}>
        <Avatar size="md" name={e.name} />
      </Box>
      <Box textAlign={"left"} flex={3}>
        <Heading size={"md"} as={"h2"}>
          {e.name}
        </Heading>
        <Text
          fontsize={"md"}
          display={e.propertyType == "None" ? "none" : "block"}
        >
          <strong>Property Type:</strong> {e.propertyType}
        </Text>
        <Text fontsize={"lg"} className={style.desbox}>
          <strong>Requirement:</strong> {e.description}
        </Text>
        <Badge
          variant="solid"
          colorScheme={
            e.formType == "Rent"
              ? "red"
              : e.formType == "Sell"
              ? "green"
              : "blue"
          }
          fontWeight={"extrabold"}
          fontSize="0.8em"
          className={style.placeTop}
        >
          {e.formType}
        </Badge>
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
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Apendbox;
