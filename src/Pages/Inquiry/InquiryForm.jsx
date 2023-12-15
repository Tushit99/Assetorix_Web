import {
  Box,
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const InquiryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [formType, steFormType] = useState("");
  const [PropertyType, stePropertyType] = useState("");
  const [dis, setDis] = useState("");
  const [visible, setVisible] = useState(false);

  const [nameWarning, setNameWarning] = useState("");
  const [mobileWarning, setMobileWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [formTypeWarning, steFormTypeWarning] = useState("");
  const [PropertyTypeWarning, stePropertyTypeWarning] = useState("");
  const [disWarning, setDisWarning] = useState("");

  const handlevisiblelity = (e) => {
    let val = e.target.value;

    if (val == "true") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleSendQuery = async (e) => {
    e.preventDefault();
    console.log("eafui");
    let id = localStorage.getItem("usrId") || undefined;
    let authorization = localStorage.getItem("AstToken") || undefined;

    let head = { id, authorization, "Content-type": "application/json" };

    if (!id || !authorization) {
      toast({
        title: "Kindly log in to access property posting.",
        description: "Login required for posting property.",
        status: "error",
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    const body = {
      userID: id,
      name: name,
      mobile,
      email,
      isMobileVisible: visible,
      formType: formType,
      description: dis,
    }; 

    if(name.length<3){
      setNameWarning("! Enter Your full name"); 
    }
    else if(mobile.length<3){ 
      setNameWarning(""); 
      setMobileWarning("! Enter Your Mobile number");  
    }

    // if(PropertyType!=="")

    // await axios
    //   .post(`${process.env.REACT_APP_URL}/leadForm`, body, head)
    //   .then((e) => {});
  };

  return (
    <Box>
      <Tooltip label="Query Form" aria-label="A tooltip" placement="top">
        <Button
          variant={"unstyled"}
          color={"white"}
          backgroundColor={"#2e3192"}
          colorScheme={"blue"}
          padding={"0px 10px"}
          borderRadius={"4px"}
          onClick={onOpen}
        >
          Q
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            Inquiry Form <sub> login is required to post query </sub>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSendQuery}>
              <Box>
                <Text> Name </Text>
                <Input
                  type={"text"}
                  required
                  minWidth={3}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter Name"
                  variant="outline"
                />
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={nameWarning == "" ? "none" : "block"}
                >
                  ! {nameWarning}
                </Text>
              </Box>
              <Box>
                <Text> mobile </Text>
                <Input
                  type={"number"}
                  required
                  minWidth={3}
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  placeholder="Enter Your mobile no."
                  variant="outline"
                />
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={mobileWarning == "" ? "none" : "block"}
                >
                  ! {mobileWarning}
                </Text>
              </Box>
              <Box>
                <Text> Email </Text>
                <Input
                  type={"email"}
                  required
                  minWidth={4}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Your Email"
                  variant="outline"
                />
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={emailWarning == "" ? "none" : "block"}
                >
                  ! {emailWarning}
                </Text>
              </Box>
              <Box>
                <Text> Form Type </Text>
                <Select
                  type={"text"}
                  onChange={(e) => steFormType(e.target.value)}
                  value={formType}
                  required
                  variant="outline"
                  placeholder="Select"
                  w={"100%"}
                >
                  <option value="Buy"> Buy </option>
                  <option value="Rent"> Rent </option>
                  <option value="Sell"> Sell </option>
                </Select>
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={formTypeWarning == "" ? "none" : "block"}
                >
                  ! {formTypeWarning}
                </Text>
              </Box>
              <Box
                display={
                  formType == "Rent" || formType == "Sell" ? "block" : "none"
                }
              >
                <Text> Property Type </Text>
                <Select
                  type={"text"}
                  onChange={(e) => stePropertyType(e.target.value)}
                  value={PropertyType}
                  required
                  variant="outline"
                  placeholder="Select"
                  w={"100%"}
                >
                  <option value="Residential"> Residential </option>n
                  <option value="Commercial"> Commercial </option>
                </Select>
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={PropertyTypeWarning == "" ? "none" : "block"}
                >
                  ! {PropertyTypeWarning}
                </Text>
              </Box>
              <Box>
                <Text> Description </Text>
                <Textarea
                  type="text"
                  value={dis}
                  onChange={(e) => setDis(e.target.value)}
                  placeholder="Please Describe Your Query Here..."
                />
                <Text
                  color={"red"}
                  fontSize={"12px"}
                  display={disWarning == "" ? "none" : "block"}
                >
                  ! {disWarning}
                </Text>
              </Box>
              <Box margin={"5px 0"}>
                <Checkbox
                  size="md"
                  value={visible}
                  onChange={handlevisiblelity}
                >
                  click to make visible your mobile number to others
                </Checkbox>
              </Box>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Discard
            </Button>
            <Button
              colorScheme="blue"
              type={"submit"}
              backgroundColor={"#2e3192"}
            >
              Post Inquiry
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default InquiryForm;
