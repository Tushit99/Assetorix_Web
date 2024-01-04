import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useToast,
  Button,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";

const DeleteForm = ({ queryid, handlechange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deletebutton = useRef();
  const [loader, setLoader] = useState(false);
  const toast = useToast();

  const handledelete = async () => {
    setLoader(true); 
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
        .delete(`${process.env.REACT_APP_URL}/leadForm/${queryid}`, {
          headers: head,
        })
        .then((e) => {
          onClose();
          handlechange(); 
          setLoader(false); 
        })
        .catch((err) => {
          console.log(err);
          onClose();
          setLoader(false);  
        });
    } catch (err) {
      console.log(err);
      onClose();
      setLoader(false);  
    }
  };

  return (
    <Box>
      <Button
        leftIcon={<DeleteIcon />}
        size="sm"
        borderRadius={0}
        colorScheme="red"
        onClick={onOpen}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={deletebutton}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Query form
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={deletebutton} onClick={onClose}>
                Cancel
              </Button>
              <Button  
                isLoading={loader} 
                loadingText="Deleting"
                colorScheme="red"
                onClick={handledelete}
                spinnerPlacement='end'
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default DeleteForm;
