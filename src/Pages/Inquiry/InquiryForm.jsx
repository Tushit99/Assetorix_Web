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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericString } from "./Incript";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const InquiryForm = () => {
  const username = useSelector((state) => state.userreducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [formType, steFormType] = useState("Buy");
  const [PropertyType, stePropertyType] = useState("Residential");
  const [dis, setDis] = useState("");
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const [nameWarning, setNameWarning] = useState("");
  const [mobileWarning, setMobileWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [formTypeWarning, steFormTypeWarning] = useState("");
  const [PropertyTypeWarning, stePropertyTypeWarning] = useState("");
  const [disWarning, setDisWarning] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handlevisiblelity = (e) => {
    let val = e.target.value;

    if (val == "true") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handletologin = () => {
    navigate("/login");
    onClose();
  };

  const handleSendQuery = async (e) => {
    e.preventDefault();
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

    if (PropertyType) {
      body["propertyType"] = PropertyType;
    }

    if (name.length < 3) {
      setNameWarning("Enter Your full name");
      return;
    } else if (mobile.length < 3) {
      setNameWarning("");
      setMobileWarning("Enter Your Mobile number");
      return;
    } else if (email.length < 3) {
      setNameWarning("");
      setMobileWarning("");
      setEmailWarning("email is required"); 
      return;
    } else if (formType.length < 3) {
      setNameWarning("");
      setMobileWarning("");
      setEmailWarning("");
      steFormTypeWarning("Enter Your form Type");
      return;
    } else if (
      (formType == "Rent" || formType == "Sell") &&
      PropertyType.length < 3
    ) {
      setNameWarning("");
      setMobileWarning("");
      setEmailWarning("");
      steFormTypeWarning("");
      stePropertyType("Enter Your property Type");
    } else if (dis.length < 3) {
      setNameWarning("");
      setMobileWarning("");
      setEmailWarning("");
      steFormTypeWarning("");
      stePropertyType("");
      setDisWarning("Enter Your description number");
      return;
    } else {
      setNameWarning("");
      setMobileWarning("");
      setEmailWarning("");
      steFormTypeWarning("");
      stePropertyType("");
      setDisWarning("");
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/leadForm`,
        body,
        {
          headers: head,
        }
      );
      toast({
        title: response.data.msg,
        description: "form submited successfully",
        status: "success",
        duration: 5000, // Adjust duration as needed
        isClosable: true,
      });
      console.log(response.data); 
      setDis("");
      onClose();  
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          "Please check your internet connection or contact us on email",
        status: "error",
        duration: 4000,
      });
      onClose();
    }
  };

  useEffect(() => {
    setName(username?.user?.name);
    setEmail(username?.user?.email);
    setMobile(username?.user?.mobile);
  }, [username]);

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
          display={
            location.pathname == "/login" || location.pathname == "/signup"
              ? "none"
              : "block"
          }
        >
          Q
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        {username.name ? (
          <ModalContent>
            <ModalHeader>Inquiry Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Box>
                  <Text> Name </Text>
                  <Input
                    type={"text"}
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    maxLength={30}
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
                    onChange={(e) => setMobile(NumericString(e.target.value))}
                    value={mobile}
                    maxLength={10}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    maxLength={40}
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
                    onChange={(e) => {
                      steFormType(e.target.value);
                    }}
                    value={formType}
                    required
                    variant="outline" 
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
                    maxLength={400}
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
                    click to make your mobile number visible to others
                  </Checkbox>
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Discard
              </Button>
              <Button
                colorScheme="blue"
                onClick={handleSendQuery}
                backgroundColor={"#2e3192"}
              >
                Post Inquiry
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>Query Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> If you want to Post Query Please Login First </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                onClick={handletologin}
                backgroundColor={"#2e3192"}
              > 
                Login
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </Box>
  );
};

export default InquiryForm;
