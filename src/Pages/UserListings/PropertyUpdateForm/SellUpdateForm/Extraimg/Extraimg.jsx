import React, { useEffect, useState } from "react";
import style from "../ResidentialUpdate/Residential.module.css";
import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

const Extraimg = ({ e, propertyid, deleteimagePermanently }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [propertykey, setPropertykey] = useState("");

    const handleSavedImages = () => {
        onOpen();
    };

    useEffect(() => {
        setPropertykey(e.KEY);
        console.log(e);
    }, []);

    return (
        <Box className={style.image} key={e._id}>
            <Text className={style.delete} onClick={() => handleSavedImages(e._id)}>
                &#10006;
            </Text>
            <img src={e?.URL} alt="images" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete image</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Are you sure. Image will be deleted permanently</ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme={"red"}
                            variant={"outline"}
                            onClick={() => {
                                onClose();  
                                deleteimagePermanently(propertyid, propertykey)
                            }}
                            _hover={{ backgroundColor: "rgb(202, 26, 26)", color: "white" }}
                        >
                            Delete Permanently
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Extraimg;
