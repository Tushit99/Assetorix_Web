import React, { useEffect, useState } from "react";
import {
  Box,
  useToast,
  Button,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  Modal,
  Checkbox,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineEditNote } from "react-icons/md";
import { NumericString } from "../../Inquiry/Incript";
import axios from "axios";

const EditForm = ({ detail, handlechange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [formType, steFormType] = useState("");
  const [PropertyType, setPropertyType] = useState("");
  const [dis, setDis] = useState("");
  const [PropertyTypeWarning, stePropertyTypeWarning] = useState("");
  const [visible, setVisible] = useState(false);

  const [nameWarning, setNameWarning] = useState("");
  const [mobileWarning, setMobileWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [formTypeWarning, steFormTypeWarning] = useState("");
  const [disWarning, setDisWarning] = useState("");
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(detail?.name);
    setMobile(detail?.mobile);
    setEmail(detail?.email);
    steFormType(detail?.formType);
    setPropertyType(detail.propertyType);
    setDis(detail.description);
    setVisible(detail.isMobileVisible);
  }, []);

  const handleeditform = async () => {
    onOpen();
  };

  const handlefinaledit = async () => {
    try {
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
        setEmailWarning("Enter Your full email");
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
        setPropertyType("Enter Your property Type");
      } else if (dis.length < 3) {
        setNameWarning("");
        setMobileWarning("");
        setEmailWarning("");
        steFormTypeWarning("");
        setPropertyType("");
        setDisWarning("Enter Your description number");
        return;
      } else {
        setNameWarning("");
        setMobileWarning("");
        setEmailWarning("");
        steFormTypeWarning("");
        setPropertyType("");
        setDisWarning("");
      }

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
      setLoading(true);

      const body = {
        name: name,
        mobile,
        email,
        isMobileVisible: visible,
        formType: formType,
        description: dis,
      };

      await axios
        .patch(`${process.env.REACT_APP_URL}/leadForm/${detail._id}`, body, {
          headers: head,
        })
        .then((e) => {
          handlechange();
          onClose();
          setLoading(false);
        })
        .catch((err) => {
          onClose();
          console.log(err);
          setLoading(false);
        });
    } catch (err) {
      onClose();
      setLoading(false);
    }
  };

  const handlevisiblelity = (e) => {
    let val = e.target.value;

    if (val == "true") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <Box>
      <Button
        colorScheme="blue"
        size="sm"
        leftIcon={<MdOutlineEditNote />}
        onClick={handleeditform}
        borderRadius={0}
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingBottom={0}> Query Edit Form </ModalHeader>
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
                  onChange={(e) => setPropertyType(e.target.value)}
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
                  isChecked={visible}
                  onChange={handlevisiblelity}
                >
                  click to make visible your mobile number to others
                </Checkbox>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              loadingText="Editing Form..."  
              variant={"solid"} 
              colorScheme="blue"
              onClick={handlefinaledit}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditForm;
